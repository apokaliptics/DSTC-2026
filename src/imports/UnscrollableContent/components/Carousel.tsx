import { useState, useEffect } from "react";
import { SliderDots } from "./SliderDots";
import { svgPaths } from "../constants/assets";

interface CarouselProps {
  images: string[];
  position: string;
  dotsInsets: string[];
  arrowViewBox?: string;
  arrowPath?: string;
  leftArrowInset?: string;
  rightArrowInset?: string;
  leftArrowOuterInset?: string;
  rightArrowOuterInset?: string;
}

export function Carousel({
  images,
  position,
  dotsInsets,
  arrowViewBox = "0 0 12.813 24.313",
  arrowPath = svgPaths.p3db7d440,
  leftArrowInset = "47.96% 92.85% 47.96% 5.93%",
  rightArrowInset = "47.96% 5.06% 47.96% 93.72%",
  leftArrowOuterInset = "-5.26% -11.01%",
  rightArrowOuterInset = "-5.26% -11.01%",
}: CarouselProps) {
  const count = images.length;
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((i) => (i + 1) % count);
    }, 3000);
    return () => clearInterval(timer);
  }, [count]);

  return (
    <div className={position}>
      {images.map((src, i) => (
        <img key={i} alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[50px] size-full transition-opacity duration-500" style={{ opacity: i === current ? 1 : 0 }} src={src} />
      ))}
      <div className="absolute flex items-center justify-center" style={{ inset: leftArrowInset, containerType: "size" }}>
        <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <button onClick={() => setCurrent((i) => (i - 1 + count) % count)} className="block cursor-pointer relative size-full" data-name="Vector">
            <div className="absolute" style={{ inset: leftArrowOuterInset }}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={arrowViewBox}>
                <path d={arrowPath} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.31296" />
              </svg>
            </div>
          </button>
        </div>
      </div>
      <button onClick={() => setCurrent((i) => (i + 1) % count)} className="absolute block cursor-pointer" style={{ inset: rightArrowInset }} data-name="Vector">
        <div className="absolute" style={{ inset: rightArrowOuterInset }}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={arrowViewBox}>
            <path d={arrowPath} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.31296" />
          </svg>
        </div>
      </button>
      <SliderDots insets={dotsInsets} current={current} onSelect={setCurrent} />
    </div>
  );
}
