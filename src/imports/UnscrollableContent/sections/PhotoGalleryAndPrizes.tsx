import { svgPaths, imgImage8, imgFrameAll, imgRectangle1, imgRectangle1Text, imgRectangle3, imgRectangle3Text, imgRectangle6, imgRectangle6Text, imgRectangle10, imgPhiHanhGia3 } from "../constants/assets";
import { imgRectangle, imgRectangle2, imgRectangle4, imgRectangle5, imgRectangle7, imgRectangle8, imgRectangle9, imgRectangle11, imgRectangle12, imgRectangle13, imgRectangle14, imgRectangle15, imgRectangle16, imgRectangle17, imgRectangle18, imgRectangle19, imgRectangle20, imgRectangle21, imgRectangle22, imgRectangle23, imgRectangle24, imgRectangle25 } from "../svg-58rhk";

const prizeDetails = [
  {
    titleImage: imgRectangle1Text,
    titleAlt: "Quán quân",
    lines: ["02 học bổng toàn phần trị giá 189 triệu đồng", "02 Voucher 30% từ The English Tutor", "02 Voucher 3tr"],
    className: "top-0",
  },
  {
    titleImage: imgRectangle6Text,
    titleAlt: "Á quân",
    lines: ["02 học bổng toàn phần: 189 triệu đồng", "02 Voucher 30%", "02 Voucher 2tr"],
    className: "top-[871px]",
  },
  {
    titleImage: imgRectangle3Text,
    titleAlt: "Quý quân",
    lines: ["04 học đồng hành: 110 triệu đồng", "04 Voucher 30%", "04 Voucher 1tr"],
    className: "top-[1742px]",
  },
];

function AwardDetailFrame({ titleImage, titleAlt, lines, className }: { titleImage: string; titleAlt: string; lines: string[]; className: string }) {
  return (
    <article className={`absolute left-1/2 h-[1011px] w-[1851px] -translate-x-1/2 ${className}`}>
      <img src={imgFrameAll} alt="" className="absolute inset-0 h-full w-full object-contain pointer-events-none" />
      <img
        src={titleImage}
        alt={titleAlt}
        className="absolute left-1/2 top-[80px] h-[320px] -translate-x-1/2 object-contain pointer-events-none"
        style={{
          filter: "drop-shadow(0 0 8px rgba(110,255,130,0.9)) drop-shadow(0 0 20px rgba(74,222,128,0.85))",
        }}
      />
      <div className="absolute left-[300px] right-[300px] top-[460px] flex flex-col items-center justify-center gap-[20px] font-['EB_Garamond',serif] text-[48px] font-bold leading-[1.2] text-[#1f160d]">
        {lines.map((line) => (
          <p key={line} className="text-center">{line}</p>
        ))}
      </div>
    </article>
  );
}

function PrizeAstronaut({ className, imageClassName, style }: { className: string; imageClassName: string; style?: React.CSSProperties }) {
  return (
    <div className={`absolute overflow-hidden pointer-events-none ${className}`} style={style}>
      <img alt="" className={`absolute max-w-none ${imageClassName}`} src={imgPhiHanhGia3} />
    </div>
  );
}

export function PrizeDetailsFrames() {
  return (
    <section className="absolute left-0 top-[12450px] h-[2860px] w-[1920px] overflow-visible z-[10]" data-name="Prize details">
      {prizeDetails.map((prize) => (
        <AwardDetailFrame key={prize.titleAlt} {...prize} />
      ))}
      <PrizeAstronaut 
        className="astronaut-float left-[1700px] top-[680px] h-[240px] w-[270px] z-[3]" 
        style={{ transform: 'scale(0.6) rotate(90deg)' }}
        imageClassName="h-[590px] w-[590px] left-[-330px] top-[-58px]" 
      />
      <PrizeAstronaut 
        className="astronaut-float-delay left-[30px] top-[1200px] h-[260px] w-[290px] z-[3]" 
        style={{ transform: 'scale(1.4) rotate(15deg)' }}
        imageClassName="h-[570px] w-[570px] left-[-28px] top-[-340px]" 
      />
      <PrizeAstronaut 
        className="astronaut-float-slow left-[1600px] top-[2660px] h-[280px] w-[320px] z-[3]" 
        style={{ transform: 'scaleX(-0.9) scaleY(0.9) rotate(-15deg)' }} 
        imageClassName="h-[610px] w-[610px] left-[-34px] top-[-362px]" 
      />
    </section>
  );
}

/* ===== Photo Gallery mask groups (Group97) ===== */
function Group1() { return (<div className="absolute contents inset-[74.61%_31.61%_23.55%_34.2%]" data-name="Group"><div className="absolute inset-[74.61%_31.61%_23.55%_34.2%] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-0.001px_2.861px] mask-size-[656.473px_307.622px]" style={{ maskImage: `url('${imgRectangle}')` }} data-name="Rectangle"><div className="absolute inset-0 overflow-hidden pointer-events-none"><img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle1} /></div></div></div>); }
function Group() { return (<div className="absolute contents inset-[74.61%_31.61%_23.55%_34.2%]" data-name="Group"><Group1 /></div>); }
function MaskGroup() { return (<div className="absolute contents inset-[74.63%_31.61%_23.54%_34.2%]" data-name="Mask group"><Group /></div>); }
function Group3() { return (<div className="absolute contents inset-[77.22%_16.52%_21.28%_58.84%]" data-name="Group"><div className="absolute inset-[77.22%_16.52%_21.28%_58.84%] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[473.167px_251.448px]" style={{ maskImage: `url('${imgRectangle2}')` }} data-name="Rectangle"><div className="absolute inset-0 overflow-hidden pointer-events-none"><img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle3} /></div></div></div>); }
function Group2() { return (<div className="absolute contents inset-[77.22%_16.52%_21.28%_58.84%]" data-name="Group"><Group3 /></div>); }
function MaskGroup1() { return (<div className="absolute contents inset-[77.22%_16.52%_21.28%_58.84%]" data-name="Mask group"><Group2 /></div>); }
function Group6() { return (<div className="absolute contents inset-[77.23%_60.33%_21.22%_16.89%]" data-name="Group"><div className="absolute inset-[77.23%_60.33%_21.22%_16.89%] mask-position-[0.945px_-0.456px,_0px_0px]" style={{ maskImage: `url('${imgRectangle4}'), url('${imgRectangle5}')` }} data-name="Rectangle"><div className="absolute inset-0 overflow-hidden pointer-events-none"><img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle6} /></div></div></div>); }
function Group5() { return (<div className="absolute contents inset-[77.23%_60.33%_21.22%_16.89%]" data-name="Group"><Group6 /></div>); }
function MaskGroup2() { return (<div className="absolute contents inset-[77.23%_60.33%_21.22%_16.89%]" data-name="Mask group"><Group5 /></div>); }
function Group4() { return (<div className="absolute contents inset-[77.23%_60.33%_21.22%_16.89%]" data-name="Group"><MaskGroup2 /></div>); }
function ClipPathGroup() { return (<div className="absolute contents inset-[77.22%_60.3%_21.21%_16.94%]" data-name="Clip path group"><Group4 /></div>); }

export function PhotoGallerySection() {
  return (
    <div className="absolute contents left-[94px] top-[12519px]">
      <div className="absolute h-[538.403px] left-[501.6px] top-[12535.14px] w-[966.364px]" data-name="image 8">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage8} />
      </div>
      <div className="absolute h-[497.966px] left-[94px] top-[12951.03px] w-[893.786px]" data-name="image 9">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage8} />
      </div>
      <div className="absolute h-[497.966px] left-[922.21px] top-[12951.03px] w-[893.786px]" data-name="image 10">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage8} />
      </div>
      <MaskGroup />
      <MaskGroup1 />
      <ClipPathGroup />
    </div>
  );
}

/* ===== Prizes section mask groups ===== */
function Group10() { return (<div className="absolute contents inset-[25.47%_36.89%_16.62%_30.29%]" data-name="Group"><div className="absolute inset-[25.47%_36.89%_16.62%_30.29%] mask-position-[-7.161px_-37.578px,_5.079px_-1.802px,_0px_0px]" style={{ maskImage: `url('${imgRectangle7}'), url('${imgRectangle8}'), url('${imgRectangle9}')` }} data-name="Rectangle"><div className="absolute inset-0 overflow-hidden pointer-events-none"><img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle10} /></div></div></div>); }
function Group9() { return (<div className="absolute contents inset-[25.47%_36.89%_16.62%_30.29%]" data-name="Group"><Group10 /></div>); }
function MaskGroup3() { return (<div className="absolute contents inset-[25.47%_36.89%_16.62%_30.29%]" data-name="Mask group"><Group9 /></div>); }
function Group8() { return (<div className="absolute contents inset-[25.47%_36.89%_16.62%_30.29%]" data-name="Group"><MaskGroup3 /></div>); }
function ClipPathGroup2() { return (<div className="absolute contents inset-[25.35%_37.22%_16.77%_30.47%]" data-name="Clip path group"><Group8 /></div>); }
function Group12() { return (<div className="absolute contents inset-[45.54%_42.89%_37.03%_36.1%]" data-name="Group"><div className="absolute inset-[45.54%_42.89%_37.03%_36.1%] mask-position-[-168.544px_-353.385px,_-0.001px_0px]" style={{ maskImage: `url('${imgRectangle7}'), url('${imgRectangle11}')` }} data-name="Rectangle"><div className="absolute inset-0 overflow-hidden pointer-events-none"><img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle1} /></div></div></div>); }
function Group11() { return (<div className="absolute contents inset-[45.54%_42.89%_37.03%_36.1%]" data-name="Group"><Group12 /></div>); }
function MaskGroup4() { return (<div className="absolute contents inset-[45.54%_42.89%_37.03%_36.1%]" data-name="Mask group"><Group11 /></div>); }
function Group14() { return (<div className="absolute contents inset-[45.54%_42.89%_37.03%_36.1%]" data-name="Group"><div className="absolute inset-[45.54%_42.89%_37.03%_36.1%] mask-position-[-168.544px_-353.385px,_-0.001px_0px]" style={{ maskImage: `url('${imgRectangle7}'), url('${imgRectangle11}')` }} data-name="Rectangle"><div className="absolute inset-0 overflow-hidden pointer-events-none"><img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle1} /></div></div></div>); }
function Group13() { return (<div className="absolute contents inset-[45.54%_42.89%_37.03%_36.1%]" data-name="Group"><Group14 /></div>); }
function MaskGroup5() { return (<div className="absolute contents inset-[45.54%_42.89%_37.03%_36.1%]" data-name="Mask group"><Group13 /></div>); }
function Group7() { return (<div className="absolute contents inset-[25.35%_37.22%_16.77%_30.47%]" data-name="Group"><ClipPathGroup2 /><MaskGroup4 /><MaskGroup5 /></div>); }
function ClipPathGroup1() { return (<div className="absolute contents inset-[23.08%_34.86%_14.39%_30.03%]" data-name="Clip path group"><Group7 /></div>); }
function Group19() { return (<div className="absolute contents inset-[43.77%_22.53%_5.98%_49.2%]" data-name="Group"><div className="absolute inset-[43.77%_22.53%_5.98%_49.2%] mask-position-[151.624px_-0.428px,_0.642px_-0.001px,_0px_0px]" style={{ maskImage: `url('${imgRectangle12}'), url('${imgRectangle13}'), url('${imgRectangle14}')` }} data-name="Rectangle"><div className="absolute inset-0 overflow-hidden pointer-events-none"><img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle10} /></div></div></div>); }
function Group18() { return (<div className="absolute contents inset-[43.77%_22.53%_5.98%_49.2%]" data-name="Group"><Group19 /></div>); }
function MaskGroup6() { return (<div className="absolute contents inset-[43.77%_22.53%_5.98%_49.2%]" data-name="Mask group"><Group18 /></div>); }
function Group17() { return (<div className="absolute contents inset-[43.77%_22.53%_5.98%_49.2%]" data-name="Group"><MaskGroup6 /></div>); }
function ClipPathGroup4() { return (<div className="absolute contents inset-[43.77%_22.55%_5.98%_49.23%]" data-name="Clip path group"><Group17 /></div>); }
function Group21() { return (<div className="absolute contents inset-[61.7%_28.44%_23.85%_55.19%]" data-name="Group"><div className="absolute inset-[61.7%_28.44%_23.85%_55.19%] mask-position-[-14.629px_-282.563px,_0px_0px]" style={{ maskImage: `url('${imgRectangle12}'), url('${imgRectangle15}')` }} data-name="Rectangle"><div className="absolute inset-0 overflow-hidden pointer-events-none"><img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle3} /></div></div></div>); }
function Group20() { return (<div className="absolute contents inset-[61.7%_28.44%_23.85%_55.19%]" data-name="Group"><Group21 /></div>); }
function MaskGroup7() { return (<div className="absolute contents inset-[61.7%_28.44%_23.85%_55.19%]" data-name="Mask group"><Group20 /></div>); }
function Group16() { return (<div className="absolute contents inset-[43.77%_22.55%_5.98%_49.23%]" data-name="Group"><ClipPathGroup4 /><MaskGroup7 /></div>); }
function ClipPathGroup3() { return (<div className="absolute contents inset-[43.74%_16.98%_5.85%_54.66%]" data-name="Clip path group"><Group16 /></div>); }
function Group15() { return (<div className="absolute contents inset-[43.74%_16.98%_5.85%_54.66%]" data-name="Group"><ClipPathGroup3 /></div>); }
function Group26() { return (<div className="absolute contents inset-[44.02%_56.62%_5.98%_14.02%]" data-name="Group"><div className="absolute inset-[44.02%_56.62%_5.98%_14.02%] mask-position-[-1.311px_-0.426px,_0.666px_0px,_0px_0px]" style={{ maskImage: `url('${imgRectangle16}'), url('${imgRectangle17}'), url('${imgRectangle18}')` }} data-name="Rectangle"><div className="absolute inset-0 overflow-hidden pointer-events-none"><img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle10} /></div></div></div>); }
function Group25() { return (<div className="absolute contents inset-[44.02%_56.62%_5.98%_14.02%]" data-name="Group"><Group26 /></div>); }
function MaskGroup8() { return (<div className="absolute contents inset-[44.02%_56.62%_5.98%_14.02%]" data-name="Mask group"><Group25 /></div>); }
function Group24() { return (<div className="absolute contents inset-[44.02%_56.62%_5.98%_14.02%]" data-name="Group"><MaskGroup8 /></div>); }
function ClipPathGroup6() { return (<div className="absolute contents inset-[44.02%_56.64%_5.98%_14.04%]" data-name="Clip path group"><Group24 /></div>); }
function MaskGroup9() { return <div className="absolute contents inset-[61.87%_62.75%_23.75%_20.24%]" data-name="Mask group" />; }
function Group23() { return (<div className="absolute contents inset-[44.02%_56.64%_5.98%_14.04%]" data-name="Group"><ClipPathGroup6 /><MaskGroup9 /></div>); }
function ClipPathGroup5() { return (<div className="absolute contents inset-[43.99%_56.57%_5.85%_13.97%]" data-name="Clip path group"><Group23 /></div>); }
function Group22() { return (<div className="absolute contents inset-[43.99%_56.57%_5.85%_13.97%]" data-name="Group"><ClipPathGroup5 /></div>); }
function Group29() { return (<div className="absolute contents inset-[61.11%_64.22%_22.89%_21.54%]" data-name="Group"><div className="absolute inset-[61.11%_64.22%_22.89%_21.54%] mask-position-[0.854px_-0.439px,_0px_0px]" style={{ maskImage: `url('${imgRectangle19}'), url('${imgRectangle20}')` }} data-name="Rectangle"><div className="absolute inset-0 overflow-hidden pointer-events-none"><img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle6} /></div></div></div>); }
function Group28() { return (<div className="absolute contents inset-[61.11%_64.22%_22.89%_21.54%]" data-name="Group"><Group29 /></div>); }
function MaskGroup10() { return (<div className="absolute contents inset-[61.11%_64.22%_22.89%_21.54%]" data-name="Mask group"><Group28 /></div>); }
function Group27() { return (<div className="absolute contents inset-[61.11%_64.22%_22.89%_21.54%]" data-name="Group"><MaskGroup10 /></div>); }
function ClipPathGroup7() { return (<div className="absolute contents inset-[61.08%_64.2%_22.88%_21.57%]" data-name="Clip path group"><Group27 /></div>); }
function Group86() { return (<div className="absolute contents inset-[43.99%_56.57%_5.85%_13.97%]"><Group22 /><ClipPathGroup7 /></div>); }
function Group98() { return (<div className="absolute contents inset-[23.08%_16.98%_5.85%_13.97%]"><ClipPathGroup1 /><Group15 /><Group86 /></div>); }
function Group34() { return (<div className="absolute contents inset-[91.7%_111.43%_-46.39%_-43.3%]" data-name="Group"><div className="absolute inset-[91.7%_111.43%_-46.39%_-43.3%] mask-position-[-1.422px_-0.466px,_0.723px_-0.001px,_0px_0px]" style={{ maskImage: `url('${imgRectangle21}'), url('${imgRectangle22}'), url('${imgRectangle23}')` }} data-name="Rectangle"><div className="absolute inset-0 overflow-hidden pointer-events-none"><img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle10} /></div></div></div>); }
function Group33() { return (<div className="absolute contents inset-[91.7%_111.43%_-46.39%_-43.3%]" data-name="Group"><Group34 /></div>); }
function MaskGroup11() { return (<div className="absolute contents inset-[91.7%_111.43%_-46.39%_-43.3%]" data-name="Mask group"><Group33 /></div>); }
function Group32() { return (<div className="absolute contents inset-[91.7%_111.43%_-46.39%_-43.3%]" data-name="Group"><MaskGroup11 /></div>); }
function ClipPathGroup9() { return (<div className="absolute contents inset-[91.7%_111.46%_-46.39%_-43.28%]" data-name="Clip path group"><Group32 /></div>); }
function MaskGroup12() { return <div className="absolute contents inset-[111.22%_118.09%_-26.95%_-36.55%]" data-name="Mask group" />; }
function Group31() { return (<div className="absolute contents inset-[91.7%_111.46%_-46.39%_-43.28%]" data-name="Group"><ClipPathGroup9 /><MaskGroup12 /></div>); }
function ClipPathGroup8() { return (<div className="absolute contents inset-[91.67%_111.38%_-46.54%_-43.36%]" data-name="Clip path group"><Group31 /></div>); }
function Group30() { return (<div className="absolute contents inset-[91.67%_111.38%_-46.54%_-43.36%]" data-name="Group"><ClipPathGroup8 /></div>); }
function Group37() { return (<div className="absolute contents inset-[110.39%_119.68%_-27.9%_-35.14%]" data-name="Group"><div className="absolute inset-[110.39%_119.68%_-27.9%_-35.14%] mask-position-[0.928px_-0.48px,_0px_0px]" style={{ maskImage: `url('${imgRectangle24}'), url('${imgRectangle25}')` }} data-name="Rectangle"><div className="absolute inset-0 overflow-hidden pointer-events-none"><img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle6} /></div></div></div>); }
function Group36() { return (<div className="absolute contents inset-[110.39%_119.68%_-27.9%_-35.14%]" data-name="Group"><Group37 /></div>); }
function MaskGroup13() { return (<div className="absolute contents inset-[110.39%_119.68%_-27.9%_-35.14%]" data-name="Mask group"><Group36 /></div>); }
function Group35() { return (<div className="absolute contents inset-[110.39%_119.68%_-27.9%_-35.14%]" data-name="Group"><MaskGroup13 /></div>); }
function ClipPathGroup10() { return (<div className="absolute contents inset-[110.36%_119.66%_-27.91%_-35.11%]" data-name="Clip path group"><Group35 /></div>); }

export function PrizesSection() {
  return (
    <section className="absolute h-[1573px] left-[-333px] overflow-clip top-[11172px] w-[2777px]" data-name="magic 1">
      <Group98 />
      <Group30 />
      <ClipPathGroup10 />
      <div className="absolute flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal inset-[9.85%_26.4%_68.66%_21.61%] justify-center leading-[0] text-[36px] text-center text-white">
        <p className="leading-[1.5]">Phần thưởng tiền mặt và cơ hội nhận funding để phát triển và triển khai chiến lược trong môi trường tài chính thực tế</p>
      </div>
      <div className="absolute bg-clip-text bg-gradient-to-r flex flex-col font-['Tektur:Bold',sans-serif] font-bold from-[#4ade80] inset-[8.26%_29.53%_87.41%_24.31%] justify-center leading-[0] text-[73.471px] text-[transparent] text-center to-[#3b82f6]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold not-italic">
          <span className="gradient-text-safe bg-clip-text bg-gradient-to-r from-[#4ade80] leading-[1.5] text-[transparent] to-[#3b82f6]">{`GIẢI THƯỞNG `}</span>
          <span className="leading-[1.5] text-white">VÀ</span>
          <span className="gradient-text-safe bg-clip-text bg-gradient-to-r from-[#4ade80] leading-[1.5] text-[transparent] to-[#3b82f6]">{` CƠ HỘI CẤP VỐN`}</span>
        </p>
      </div>
    </section>
  );
}

export function CompetitionRulesBadge() {
  return (
    <a
      href="https://docs.google.com/document/d/189-9RtYtriV4NsQ_stGXiuab1rgv7ipJMfnn2OAiY9Y/edit?tab=t.0"
      target="_blank"
      rel="noopener noreferrer"
      className="absolute contents inset-[64.3%_29.53%_34.64%_29.48%] group cursor-pointer"
      aria-label="Bộ luật cuộc thi"
    >
      <div className="absolute inset-[64.3%_29.53%_34.64%_29.48%] -translate-y-[990px] transition-all duration-300 group-hover:brightness-110 group-hover:drop-shadow-[0_0_28px_rgba(74,222,128,0.65)]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 787 177">
          <path d={svgPaths.p23d55e00} fill="url(#paint0_linear_1_2065)" id="Rectangle 2" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2065" x1="0" x2="787" y1="88.5" y2="88.5">
              <stop offset="0.0288462" stopColor="#4ADE80" />
              <stop offset="1" stopColor="#2563EB" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold inset-[64.39%_31.77%_34.69%_32.95%] -translate-y-[990px] justify-center leading-[0] not-italic text-[60px] text-center text-shadow-[0px_6.123px_6.123px_rgba(224,43,43,0.25)] text-white transition-all duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_22px_rgba(255,255,255,0.75)]">
        <p className="leading-[1.5]">BỘ LUẬT CUỘC THI</p>
      </div>
    </a>
  );
}

export function Photo() {
  return (
    <div className="absolute contents left-[-118px] right-[340px] top-[1412px]" data-name="photo">
      <div className="absolute content-stretch flex flex-col h-[116.428px] items-start left-[115px] right-[1070.19px] rounded-[78px] top-[1525px]" data-name="div.space-y-8">
        <div className="content-stretch flex flex-col h-[118px] items-start py-[10px] relative shrink-0 w-[714px]" data-name="div.prose">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16.935px] text-white whitespace-nowrap">
            <p className="leading-[26.916px]"><br aria-hidden="true" /><br aria-hidden="true" /></p>
          </div>
        </div>
      </div>
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[1412px_340px_14433px_-118px] rounded-[230px] shadow-[0px_28.038px_56.075px_-13.458px_rgba(0,0,0,0.25)]" data-name="div.grid:shadow" />
    </div>
  );
}
