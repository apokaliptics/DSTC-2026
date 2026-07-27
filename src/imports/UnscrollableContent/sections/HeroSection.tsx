import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { imgChDataScienceTalent1, imgPhiHanhGia3 } from "../constants/assets";
function BreatheState({
  className
}: {
  className?: string;
}) {
  return <div className={className || "absolute h-[1212.372px] left-[-29px] top-[295px] w-[995.204px]"} data-name="Breathe/state 4" />;
}
function H1Text5Xl() {
  return <div className="absolute drop-shadow-[0px_0px_17.347px_rgba(255,255,255,0.2)] h-[222.239px] left-[27.76px] right-[27.75px] top-[85.12px]" data-name="h1.text-5xl" />;
}
function Frame1() {
  return <div className="relative shrink-0 size-[97.047px]" />;
}
function PTextXl() {
  return <div className="absolute content-stretch flex flex-col items-center left-[370.07px] max-w-[1036.2073974609375px] top-[334.92px] w-[1036.207px]" data-name="p.text-xl">
      <div className="flex flex-col font-quadrillion justify-center leading-[0] not-italic relative shrink-0 text-[30.994px] text-center text-white whitespace-nowrap">
        <p className="leading-[41.633px]">{`"VIETNAM QUANT CHALLENGE - DỮ LIỆU TÀI CHÍNH TRONG KỶ NGUYÊN AI"`}</p>
      </div>
      <Frame1 />
    </div>;
}
function CountdownBox() {
  return <div className="backdrop-blur-[10px] bg-gradient-to-br from-indigo-900/80 via-purple-900/60 to-cyan-900/80 relative rounded-[16px] shrink-0 size-[129.526px] overflow-hidden" data-name="Component 15">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400/20 via-transparent to-transparent opacity-60"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-30 mix-blend-overlay"></div>
      <div aria-hidden="true" className="absolute border-[1.5px] border-cyan-400/50 border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_0px_15px_0px_rgba(34,211,238,0.4),inset_0px_0px_20px_0px_rgba(168,85,247,0.3)]" />
    </div>;
}
function DivFlex1() {
  return <div className="absolute content-stretch flex flex-col h-[171.404px] items-center left-0 top-0" data-name="div.flex">
      <div className="content-stretch flex flex-col h-[143.404px] items-start pb-[13.878px] relative shrink-0 w-[129.526px]" data-name="div.w-20:margin">
        <CountdownBox />
      </div>
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[18.272px] text-center text-white tracking-[1.8504px] uppercase whitespace-nowrap">
        <p className="leading-[27.756px]">Ngày</p>
      </div>
    </div>;
}
function DivFlex2() {
  return <div className="-translate-x-1/2 absolute bottom-0 content-stretch flex flex-col items-center left-[calc(50%-87.89px)] top-0" data-name="div.flex">
      <div className="content-stretch flex flex-col h-[143.404px] items-start pb-[13.878px] relative shrink-0 w-[129.526px]" data-name="div.w-20:margin">
        <CountdownBox />
      </div>
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[18.504px] text-center text-white tracking-[1.8504px] uppercase whitespace-nowrap">
        <p className="leading-[27.756px]">Giờ</p>
      </div>
    </div>;
}
function DivFlex3() {
  return <div className="absolute content-stretch flex flex-col h-[171.404px] items-center left-[351.57px] top-0" data-name="div.flex">
      <div className="content-stretch flex flex-col h-[143.404px] items-start pb-[13.878px] relative shrink-0 w-[129.526px]" data-name="div.w-20:margin">
        <CountdownBox />
      </div>
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[18.504px] text-center text-white tracking-[1.8504px] uppercase whitespace-nowrap">
        <p className="leading-[27.756px]">Phút</p>
      </div>
    </div>;
}
function DivFlex4() {
  return <div className="absolute content-stretch flex flex-col h-[171.404px] items-center left-[527.36px] top-0" data-name="div.flex">
      <div className="content-stretch flex flex-col h-[143.404px] items-start pb-[13.878px] relative shrink-0 w-[129.526px]" data-name="div.w-20:margin">
        <CountdownBox />
      </div>
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[17.925px] text-center text-white tracking-[1.8504px] uppercase whitespace-nowrap">
        <p className="leading-[27.756px]">Giây</p>
      </div>
    </div>;
}
function CountdownTimer() {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  useEffect(() => {
    const targetDate = new Date("2026-07-26T23:59:00+07:00").getTime();
    const updateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      if (difference <= 0) {
        setTime({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
        return;
      }
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      const minutes = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60));
      const seconds = Math.floor(difference % (1000 * 60) / 1000);
      setTime({
        days,
        hours,
        minutes,
        seconds
      });
    };
    updateTime();
    const id = setInterval(updateTime, 1000);
    return () => clearInterval(id);
  }, []);
  const pad = (n: number) => String(n).padStart(2, "0");
  return <div className="h-[171.404px] relative shrink-0 w-[656.881px]">
      <DivFlex1 />
      <DivFlex2 />
      <DivFlex3 />
      <DivFlex4 />
      <div className="absolute font-['Inter:Bold',sans-serif] font-bold h-[56px] leading-[0] left-[29.44px] not-italic text-[55.511px] text-center text-white top-[42px] w-[600.355px] whitespace-nowrap drop-shadow-[0_0_15px_rgba(167,139,250,0.8)]">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center left-[36.5px] top-[28px]">
          <p className="leading-[55.511px]">{time.days}</p>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center left-[212.29px] top-[28px]">
          <p className="leading-[55.511px]">{pad(time.hours)}</p>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center left-[388.07px] top-[28px]">
          <p className="leading-[55.511px]">{pad(time.minutes)}</p>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center left-[563.86px] top-[28px]">
          <p className="leading-[55.511px]">{pad(time.seconds)}</p>
        </div>
      </div>
    </div>;
}
function DivFlex() {
  return <div className="absolute content-start flex flex-wrap h-[172px] items-start justify-center left-[27.41px] right-[-41.06px] top-[441.09px]" data-name="div.flex">
      <CountdownTimer />
    </div>;
}
function Frame2() {
  return <div className="absolute h-[185.378px] left-[911.68px] top-[-123.53px] w-[61.025px]" />;
}
function Frame10() {
  return <div className="absolute h-[32px] left-[754.41px] top-[721.09px] w-[43px]" />;
}
function DivRelative() {
  return <div className="-translate-y-1/2 absolute h-[765.128px] left-[276.59px] right-[167.5px] top-[calc(50%-9.02px)] z-[110]" data-name="div.relative">
      <H1Text5Xl />
      <PTextXl />
      <DivFlex />
      <Frame2 />
      <Frame10 />
      <div className="absolute left-[625px] top-[660px] w-[600px] text-center text-[15px] font-['Space_Grotesk:Regular',sans-serif] text-white/90 leading-snug z-[60] tracking-wide select-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] whitespace-nowrap">
        Nếu có bất kỳ thắc mắc nào, thí sinh vui lòng điền vào{" "}
        <a 
          href="https://forms.gle/1rqpMfThCzbnQySZA" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-[#4ade80] hover:text-[#60a5fa] underline decoration-[#4ade80] hover:decoration-[#60a5fa] underline-offset-4 font-bold transition-all duration-200"
        >
          link này
        </a>
      </div>
    </div>;
}
export function HeroSection() {
  return <motion.section className="absolute bg-[rgba(51,66,110,0)] drop-shadow-[0px_4.606px_2.303px_rgba(0,0,0,0.25)] h-[1249px] left-[-172px] overflow-clip top-[93px] w-[2220.444px]" data-name="Front page" initial={{
    opacity: 0,
    y: 50
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true,
    amount: 0.1
  }} transition={{
    duration: 0.8,
    ease: "easeOut"
  }}>
      <BreatheState />
      <div className="absolute h-[1212.372px] left-[7430px] top-[-744px] w-[995.204px]" data-name="Breathe">
        <div className="absolute h-[1211.94px] left-[-0.53px] top-[-10px] w-[994.677px]" data-name="phi hành gia 3">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img loading="lazy" alt="" className="absolute h-[182.02%] left-0 max-w-none top-[-82.02%] w-[221.77%]" src={imgPhiHanhGia3} />
          </div>
        </div>
      </div>
      <div className="absolute h-[500px] left-[9317px] top-[-1180px] w-[463px]" data-name="Breathe">
        <div className="absolute h-[500px] left-0 top-[-10px] w-[463px]" data-name="phi hành gia 2">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img loading="lazy" alt="" className="absolute h-[177.78%] left-[-92%] max-w-none top-0 w-[192%]" src={imgPhiHanhGia3} />
          </div>
        </div>
      </div>
      <div className="absolute h-[500px] left-[1757px] top-[-134px] w-[463px] astronaut-float-delay" data-name="Breathe">
        <div className="absolute h-[500px] left-0 top-[-10px] w-[463px]" data-name="phi hành gia 2">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img loading="lazy" alt="" className="absolute h-[177.78%] left-[-92%] max-w-none top-0 w-[192%]" src={imgPhiHanhGia3} />
          </div>
        </div>
      </div>
      <div className="absolute h-[894.855px] left-[7622px] top-[-585px] w-[776.356px]" data-name="Breathe">
        <div className="absolute flex h-[894.855px] items-center justify-center left-[-2.08px] top-[-10px] w-[776.356px]" style={{
        "--transform-inner-width": "1185",
        "--transform-inner-height": "22"
      } as React.CSSProperties}>
          <div className="flex-none rotate-[0.13deg]">
            <div className="h-[893.053px] relative w-[774.277px]" data-name="phi hành gia 3">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img loading="lazy" alt="" className="absolute h-[235.91%] left-[-14.25%] max-w-none top-[-125.65%] w-[272.1%]" src={imgPhiHanhGia3} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[931px] left-[125px] top-[491px] w-[806px] astronaut-float" data-name="Breathe">
        <div className="absolute flex h-[894.855px] items-center justify-center left-[-2.08px] top-[-10px] w-[776.356px]" style={{
        "--transform-inner-width": "1185",
        "--transform-inner-height": "22"
      } as React.CSSProperties}>
          <div className="flex-none rotate-[0.13deg]">
            <div className="h-[893.053px] relative w-[774.277px]" data-name="phi hành gia 3">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img loading="lazy" alt="" className="absolute h-[235.91%] left-[-14.25%] max-w-none top-[-125.65%] w-[272.1%]" src={imgPhiHanhGia3} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute h-[1157.776px] left-[calc(50%-0.45px)] pointer-events-none rounded-[115.142px] top-[13px] w-[2315.551px] z-[10]" data-name="chữ Data Science Talent 1">
        <div className="absolute inset-0 overflow-hidden rounded-[115.142px]">
          <img loading="lazy" alt="" className="absolute left-0 max-w-none size-full top-[-15.26%]" src={imgChDataScienceTalent1} />
        </div>
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 rounded-[115.142px]" />
      </div>
      <DivRelative />
    </motion.section>;
}