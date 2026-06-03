import { logoFtu, logoDoanTruong, logoCte, logoXno, logoDstc } from "./constants/assets";

export function DivFlex9() {
  return (
    <div className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5" data-name="div.flex">
      <img
        alt="Logo FTU"
        className="h-[32px] sm:h-[38px] md:h-[45px] w-auto object-contain shrink-0"
        src={logoFtu}
      />
      <img
        alt="Logo Đoàn Trường"
        className="h-[32px] sm:h-[38px] md:h-[45px] w-auto object-contain shrink-0"
        src={logoDoanTruong}
      />
      <img
        alt="Logo CTE"
        className="h-[32px] sm:h-[38px] md:h-[45px] w-auto object-contain shrink-0"
        src={logoCte}
      />
      <img
        alt="Logo XNO"
        className="h-[28px] sm:h-[34px] md:h-[40px] w-auto object-contain shrink-0"
        src={logoXno}
      />
      <img
        alt="Logo DSTC"
        className="h-[28px] sm:h-[34px] md:h-[40px] w-auto object-contain shrink-0"
        src={logoDstc}
      />
    </div>
  );
}

function NavFlex() {
  return (
    <nav className="content-stretch flex items-center gap-6 relative shrink-0" data-name="nav.flex">
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="content-stretch cursor-pointer flex flex-col items-start relative shrink-0 hover:opacity-80 hover:underline decoration-blue-400/50 decoration-2 underline-offset-8 transition-all duration-300" data-name="Component 16">
        <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-sm lg:text-base xl:text-[16px] text-left text-white whitespace-nowrap">
          <p className="leading-5">Trang chủ</p>
        </div>
      </button>
      <button onClick={() => document.getElementById('gioi-thieu-cuoc-thi')?.scrollIntoView({ behavior: 'smooth' })} className="content-stretch cursor-pointer flex flex-col items-start relative shrink-0 hover:opacity-80 hover:underline decoration-blue-400/50 decoration-2 underline-offset-8 transition-all duration-300" data-name="Component 16">
        <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-sm lg:text-base xl:text-[16px] text-left text-white whitespace-nowrap">
          <p className="leading-5">Về DSTC</p>
        </div>
      </button>
      <button onClick={() => document.getElementById('giai-thuong')?.scrollIntoView({ behavior: 'smooth' })} className="content-stretch cursor-pointer flex flex-col items-start relative shrink-0 hover:opacity-80 hover:underline decoration-blue-400/50 decoration-2 underline-offset-8 transition-all duration-300" data-name="Component 16">
        <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-sm lg:text-base xl:text-[16px] text-left text-white whitespace-nowrap">
          <p className="leading-5">Giải thưởng</p>
        </div>
      </button>
      <button onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })} className="content-stretch cursor-pointer flex flex-col items-start relative shrink-0 hover:opacity-80 hover:underline decoration-blue-400/50 decoration-2 underline-offset-8 transition-all duration-300" data-name="Component 16">
        <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-sm lg:text-base xl:text-[16px] text-white whitespace-nowrap">
          <p className="leading-5">FAQ</p>
        </div>
      </button>
    </nav>
  );
}

function ButtonPx6Margin() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="button.px-6:margin">
      <a href="https://cteftugen5.fillout.com/dstc2026registration" target="_blank" rel="noopener noreferrer" className="no-underline">
        <button className="cursor-pointer bg-gradient-to-r content-stretch drop-shadow-[0_0_7.5px_rgba(34,211,238,0.4)] flex flex-col from-[#44c882] items-center justify-center px-5 py-2.5 relative rounded-full shrink-0 to-[#60a5fa] hover:opacity-90 hover:scale-[1.02] transition-all duration-300" data-name="Component 17">
          <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-sm lg:text-base xl:text-[16px] text-center text-white whitespace-nowrap">
            <p className="leading-4">Đăng ký ngay</p>
          </div>
        </button>
      </a>
    </div>
  );
}

export function DivHidden() {
  return (
    <div className="hidden lg:flex items-center gap-6 xl:gap-9" data-name="div.hidden">
      <NavFlex />
      <ButtonPx6Margin />
    </div>
  );
}

export function Header() {
  return (
    <header className="fixed w-full z-[100] backdrop-blur-md bg-slate-900/80 top-0 flex justify-center h-[77px] border-b border-blue-900/50 shadow-[0_10px_15px_-3px_rgba(30,58,138,0.2),0_4px_6px_-4px_rgba(30,58,138,0.2)]">
      <div className="max-w-[1920px] w-full px-[65px] flex items-center justify-between pointer-events-auto h-full">
        <DivFlex9 />
        <DivHidden />
      </div>
    </header>
  );
}
