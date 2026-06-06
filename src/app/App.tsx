import { useEffect, useRef, useState } from "react";
import UnscrollableContent from "../imports/UnscrollableContent/UnscrollableContent";
import { Header } from "../imports/UnscrollableContent/Header";
import bgImage from "../assets/background.avif";

export default function App() {
  const [scale, setScale] = useState(1);
  const smoothScrollState = useRef({ current: 0, target: 0, raf: 0 });

  useEffect(() => {
    const handleResize = () => {
      // For mobile devices, rely on native viewport scaling to avoid OOM crashes.
      const isMobile = /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      if (isMobile) {
        setScale(1);
        return;
      }

      const screenWidth = window.innerWidth;
      // The design width is roughly 1920px. 
      const scaleValue = screenWidth / 1920;
      setScale(scaleValue);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    const state = smoothScrollState.current;

    const getMaxScroll = () => document.documentElement.scrollHeight - window.innerHeight;
    const clamp = (value: number) => Math.max(0, Math.min(getMaxScroll(), value));

    const animate = () => {
      const distance = state.target - state.current;

      if (Math.abs(distance) < 0.5) {
        window.scrollTo(0, state.target);
        state.current = state.target;
        state.raf = 0;
        return;
      }

      state.current += distance * 0.12;
      window.scrollTo(0, state.current);
      state.raf = requestAnimationFrame(animate);
    };

    const onWheel = (event: WheelEvent) => {
      if (event.ctrlKey || event.metaKey || event.defaultPrevented) return;

      event.preventDefault();

      const cappedDelta = Math.sign(event.deltaY) * Math.min(Math.abs(event.deltaY), 260);
      state.target = clamp(state.target + cappedDelta * 0.9);

      if (!state.raf) {
        state.current = window.scrollY;
        state.raf = requestAnimationFrame(animate);
      }
    };

    const syncScrollPosition = () => {
      if (state.raf) return;
      state.current = window.scrollY;
      state.target = window.scrollY;
    };

    syncScrollPosition();
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", syncScrollPosition, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", syncScrollPosition);
      if (state.raf) cancelAnimationFrame(state.raf);
    };
  }, []);

  const DESIGN_WIDTH = 1920;
  const CONTENT_HEIGHT = 23395; // Exact height of content up to CreditsSection
  const PAGE_HEIGHT = 23395;

  return (
    <div className="w-full min-h-screen overflow-x-clip flex flex-col items-center">
      {/* Static Background */}
      <div 
        className="fixed inset-0 z-[-1] pointer-events-none"
        style={{
          backgroundImage: `url('${bgImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#020617'
        }}
      />

      <Header />

      <div 
        style={{ 
          width: `${DESIGN_WIDTH}px`, 
          height: `${PAGE_HEIGHT}px`,
          ...(scale !== 1 && {
            transform: `scale(${scale})`, 
            transformOrigin: 'top center',
            marginBottom: `-${PAGE_HEIGHT * (1 - scale)}px`,
          }),
          marginTop: `77px`, // Fixed header height
        }} 
        className="relative z-0"
      >
        <div
          className="absolute left-0 top-0"
          style={{
            width: `${DESIGN_WIDTH}px`,
            height: `${CONTENT_HEIGHT}px`,
          }}
        >
          <UnscrollableContent />
        </div>
      </div>
    </div>
  );
}
