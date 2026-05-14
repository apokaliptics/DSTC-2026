import { useEffect, useState } from "react";
import UnscrollableContent from "../imports/UnscrollableContent/UnscrollableContent";
import { Header } from "../imports/UnscrollableContent/Header";
import bgImage from "../assets/background.jpg";

export default function App() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      // The design width is roughly 1920px. 
      const scaleValue = screenWidth / 1920;
      setScale(scaleValue);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const DESIGN_WIDTH = 1920;
  const DESIGN_HEIGHT = 16775; // Found via inspecting top bounds

  return (
    <div className="w-full min-h-screen overflow-x-hidden flex flex-col items-center">
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

      <Header scale={scale} />

      <div 
        style={{ 
          width: `${DESIGN_WIDTH}px`, 
          height: `${DESIGN_HEIGHT}px`,
          transform: `scale(${scale})`, 
          transformOrigin: 'top center',
          marginBottom: `-${DESIGN_HEIGHT * (1 - scale)}px`,
          marginTop: `${96.8 * scale}px`, // scaled offset for header
        }} 
        className="relative z-0"
      >
        <UnscrollableContent />
      </div>
    </div>
  );
}
