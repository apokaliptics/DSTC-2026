import { imgImage11, imgImage12, img20254 } from "./constants/assets";

function LogoFtu() {
  return (
    <div className="max-h-[56px] max-w-[56px] overflow-clip relative shrink-0 size-[44px]" data-name="Logo FTU">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[48px] justify-center leading-[0] left-0 not-italic text-[15.1px] text-white top-[39.6px] w-[35.91px]">
        <p className="leading-[24px] mb-0">Logo</p>
        <p className="leading-[24px]">FTU</p>
      </div>
    </div>
  );
}

function DivRoundedFull() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] content-stretch flex items-center justify-center p-[6px] relative rounded-[9999px] shadow-[0px_0px_10px_0px_rgba(255,255,255,0.2)] shrink-0 size-[56px]" data-name="div.rounded-full">
      <LogoFtu />
    </div>
  );
}

function DivFlex10() {
  return (
    <div className="flex gap-[16px] items-center shrink-0" data-name="div.flex">
      <div className="relative shrink-0 size-[56px]" data-name="image 11">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage11} />
      </div>
      <div className="relative shrink-0 size-[56px]" data-name="image 12">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage12} />
      </div>
      <DivRoundedFull />
    </div>
  );
}

function LogoFtu1() {
  return (
    <div className="max-h-[56px] max-w-[56px] overflow-clip relative shrink-0 size-[44px]" data-name="Logo FTU">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[48px] justify-center leading-[0] left-0 not-italic text-[15.1px] text-white top-[39.6px] w-[35.91px]">
        <p className="leading-[24px] mb-0">Logo</p>
        <p className="leading-[24px]">FTU</p>
      </div>
    </div>
  );
}

function DivRoundedFull1() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] content-stretch flex items-center justify-center p-[6px] relative rounded-[9999px] shadow-[0px_0px_10px_0px_rgba(255,255,255,0.2)] shrink-0 size-[56px]" data-name="div.rounded-full">
      <LogoFtu1 />
    </div>
  );
}

function DivFlex11() {
  return (
    <div className="flex items-center shrink-0" data-name="div.flex">
      <DivRoundedFull1 />
    </div>
  );
}

export function DivFlex9() {
  return (
    <div className="flex items-center gap-[16px]" data-name="div.flex">
      <div className="relative shrink-0 w-[56px] h-[56px]" data-name="2025 4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[0%] max-w-none top-[0%] w-[100%] object-contain" src={img20254} />
        </div>
      </div>
      <DivFlex10 />
      <DivFlex11 />
    </div>
  );
}

function ATextBaseMargin() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-start justify-center pl-[32px] relative shrink-0" data-name="a.text-base:margin">
      <button onClick={() => document.getElementById('gioi-thieu-cuoc-thi')?.scrollIntoView({ behavior: 'smooth' })} className="content-stretch cursor-pointer flex flex-[1_0_0] flex-col items-start min-h-px relative hover:opacity-80 hover:underline decoration-blue-400/50 decoration-2 underline-offset-8 transition-all duration-300" data-name="Component 16">
        <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[20px] text-left text-white whitespace-nowrap">
          <p className="leading-[24px]">Về DSTC</p>
        </div>
      </button>
    </div>
  );
}

function ATextBaseMargin1() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-start justify-center pl-[32px] relative shrink-0" data-name="a.text-base:margin">
      <button onClick={() => document.getElementById('intensive-training')?.scrollIntoView({ behavior: 'smooth' })} className="content-stretch cursor-pointer flex flex-[1_0_0] flex-col items-start min-h-px relative hover:opacity-80 hover:underline decoration-blue-400/50 decoration-2 underline-offset-8 transition-all duration-300" data-name="Component 16">
        <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[20px] text-left text-white whitespace-nowrap">
          <p className="leading-[24px]">Intensive Training</p>
        </div>
      </button>
    </div>
  );
}

function ATextBaseMargin2() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-start justify-center pl-[32px] relative shrink-0" data-name="a.text-base:margin">
      <button onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })} className="content-stretch cursor-pointer flex flex-[1_0_0] flex-col items-start min-h-px relative hover:opacity-80 hover:underline decoration-blue-400/50 decoration-2 underline-offset-8 transition-all duration-300" data-name="Component 16">
        <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[20px] text-white whitespace-nowrap">
          <p className="leading-[24px]">FAQ</p>
        </div>
      </button>
    </div>
  );
}

function NavFlex() {
  return (
    <nav className="content-stretch flex items-center relative shrink-0" data-name="nav.flex">
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="content-stretch cursor-pointer flex flex-col h-[24px] items-start relative shrink-0 hover:opacity-80 hover:underline decoration-blue-400/50 decoration-2 underline-offset-8 transition-all duration-300" data-name="Component 16">
        <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[20px] text-left text-white whitespace-nowrap">
          <p className="leading-[24px]">Trang chủ</p>
        </div>
      </button>
      <ATextBaseMargin />
      <ATextBaseMargin1 />
      <ATextBaseMargin2 />
    </nav>
  );
}

function ButtonPx6Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[24px] relative shrink-0" data-name="button.px-6:margin">
      <button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })} className="cursor-pointer bg-gradient-to-r content-stretch drop-shadow-[0px_0px_7.5px_rgba(34,211,238,0.4)] flex flex-col from-[#44c882] items-center justify-center px-[24px] py-[12px] relative rounded-[9999px] shrink-0 to-[#60a5fa] hover:opacity-90 hover:scale-[1.02] transition-all duration-300" data-name="Component 17">
        <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[20px] text-center text-white whitespace-nowrap">
          <p className="leading-[20px]">Đăng ký ngay</p>
        </div>
      </button>
    </div>
  );
}

export function DivHidden() {
  return (
    <div className="content-stretch flex items-center gap-[24px]" data-name="div.hidden">
      <NavFlex />
      <ButtonPx6Margin />
    </div>
  );
}

export function Header({ scale = 1 }: { scale?: number }) {
  return (
    <header
      className="fixed w-full z-50 backdrop-blur-[8px] bg-[rgba(15,23,42,0.88)] top-0 flex justify-center pointer-events-none"
      style={{ height: `${96.8 * scale}px` }}
    >
      <div aria-hidden="true" className="absolute border-[rgba(30,58,138,0.5)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 shadow-[0px_10px_15px_-3px_rgba(30,58,138,0.2),0px_4px_6px_-4px_rgba(30,58,138,0.2)]" />
      
      <div 
        className="flex items-center justify-between px-[116px] pointer-events-auto"
        style={{ 
          width: '1920px', 
          height: '96.8px',
          transform: `scale(${scale})`, 
          transformOrigin: 'top center' 
        }}
      >
        <div className="flex items-center gap-[16px]">
          <DivFlex9 />
        </div>
        <DivHidden />
      </div>
    </header>
  );
}
