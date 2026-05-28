import { motion } from "motion/react";
import { svgPaths } from "../constants/assets";
function Footer() {
  return <div className="absolute backdrop-blur-[12px] bg-[rgba(15,23,42,0.95)] h-[467px] left-0 right-0 top-[21628px]" data-name="footer.">
      <div aria-hidden="true" className="absolute border-[rgba(30,58,138,0.5)] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
    </div>;
}
function Heading1() {
  return <div className="content-stretch flex flex-col items-start relative shrink-0 w-[544px]" data-name="Heading 3">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f1f3fc] text-[26.26px] tracking-[1.313px] uppercase w-full">
        <p className="leading-[32.825px] mb-0">DATA SCIENCE TALENT COMPETITION</p>
        <p className="leading-[32.825px] mb-0">2026 – VIETNAM QUANT CHALLENGE</p>
        <p className="leading-[32.825px]"></p>
      </div>
    </div>;
}
function Container1() {
  return <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#002a35] text-[20.421px] whitespace-nowrap">
        <p className="leading-[31.766px]">Đăng ký ngay hôm nay</p>
      </div>
    </div>;
}
function Container2() {
  return <div className="relative shrink-0 size-[18.152px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.1519 18.1519">
        <g id="Container">
          <path d={svgPaths.p1a406200} fill="var(--fill-0, #002A35)" id="Icon" />
        </g>
      </svg>
    </div>;
}
function Link() {
  return <a href="https://xnoquant.io/vqc2026" target="_blank" rel="noopener noreferrer" className="col-1 content-stretch flex items-center justify-between ml-0 mt-0 px-[27.228px] py-[18.152px] relative rounded-[4.538px] row-1 w-[544.651px] no-underline hover:opacity-95 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 cursor-pointer" style={{
    backgroundImage: "linear-gradient(37.9661deg, rgb(74, 222, 128) 0%, rgb(0, 207, 252) 100%)"
  }} data-name="Link">
      <Container1 />
      <Container2 />
    </a>;
}
function Group80() {
  return <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Link />
    </div>;
}
function BrandingTitle() {
  return <div className="col-1 content-stretch flex flex-col gap-[33.409px] items-start justify-self-stretch pb-[81.698px] relative row-1 self-start shrink-0" data-name="Branding & Title">
      <Heading1 />
      <Group80 />
    </div>;
}
function Heading2() {
  return <div className="col-1 content-stretch flex flex-col items-start ml-0 mt-0 opacity-60 relative row-1 w-[544.651px]" data-name="Heading 4">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f1f3fc] text-[20.424px] tracking-[1.0212px] uppercase w-full">
        <p className="leading-[29.178px]">Thông tin liên hệ</p>
      </div>
    </div>;
}
function Margin() {
  return <div className="h-[32.096px] relative shrink-0 w-[23.342px]" data-name="Margin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.3422 32.0955">
        <g id="Margin"><path d={svgPaths.p1c507150} fill="var(--fill-0, #4ADE80)" id="Icon" /></g>
      </svg>
    </div>;
}
function Container3() {
  return <div className="content-stretch flex flex-col items-start pr-[32.489px] relative shrink-0 w-[454px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[20.424px] text-white whitespace-nowrap">
        <p className="leading-[25.531px] mb-0">Address: Nhà CLB, Toà B, Trường Đại học Ngoại</p>
        <p className="leading-[25.531px]">thương - 91 Phố Chùa Láng, Phường Láng, Hà Nội</p>
      </div>
    </div>;
}
function Item() {
  return <div className="content-stretch flex gap-[23.328px] items-start relative shrink-0 w-full" data-name="Item">
      <Margin />
      <Container3 />
    </div>;
}
function Margin1() {
  return <div className="h-[26.26px] relative shrink-0 w-[29.178px]" data-name="Margin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.1779 26.26">
        <g id="Margin"><path d={svgPaths.p2c606a40} fill="var(--fill-0, #4ADE80)" id="Icon" /></g>
      </svg>
    </div>;
}
function Item1() {
  return <div className="content-stretch flex gap-[23.328px] items-start relative shrink-0 w-full" data-name="Item">
      <Margin1 />
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[20.424px] text-white w-[426px]">
        <p className="leading-[29.178px]">Email: datasciencetalent.cteftu@gmail.com</p>
      </div>
    </div>;
}
function Margin2() {
  return <div className="h-[36.472px] relative shrink-0 w-[35.013px]" data-name="Margin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.0135 36.4722">
        <g id="Margin"><path d={svgPaths.p2ce55780} fill="var(--fill-0, #4ADE80)" id="Icon" /></g>
      </svg>
    </div>;
}
function Link1() {
  return <div className="content-stretch flex flex-col items-start pr-[86.424px] relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[20.424px] text-white whitespace-nowrap">
        <p className="leading-[29.178px] mb-0">Fanpage cuộc thi: Data Science Talent</p>
        <p className="leading-[29.178px]">Competition</p>
      </div>
    </div>;
}
function Item2() {
  return <div className="content-stretch flex gap-[19px] items-start relative shrink-0 w-full" data-name="Item">
      <Margin2 />
      <Link1 />
    </div>;
}
function Margin3() {
  return <div className="h-[20.424px] relative shrink-0 w-[35.013px]" data-name="Margin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.0133 20.4244">
        <g id="Margin"><path d={svgPaths.p5d9cd00} fill="var(--fill-0, #4ADE80)" id="Icon" /></g>
      </svg>
    </div>;
}
function Link2() {
  return <div className="content-stretch flex flex-col items-start pr-[11.365px] relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[20.424px] text-white whitespace-nowrap">
        <p className="leading-[29.178px] mb-0">Fanpage BTC: CLB Khoa học công nghệ trong</p>
        <p className="leading-[29.178px]">Kinh tế và Kinh doanh - CTE FTU</p>
      </div>
    </div>;
}
function Item3() {
  return <div className="content-stretch flex gap-[17px] items-start relative shrink-0 w-full" data-name="Item">
      <Margin3 />
      <Link2 />
    </div>;
}
function List() {
  return <div className="col-1 content-stretch flex flex-col gap-[29.178px] items-start ml-0 mt-[64.51px] relative row-1 w-[544.651px]" data-name="List">
      <Item />
      <Item1 />
      <Item2 />
      <Item3 />
    </div>;
}
function Group81() {
  return <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Heading2 />
      <List />
    </div>;
}
function ContactInformation() {
  return <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Contact Information">
      <Group81 />
    </div>;
}
function Container() {
  return <div className="absolute gap-x-[70.02659606933594px] gap-y-[70.02659606933594px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[_357.43px] h-[446.99px] left-[31px] max-w-[1867.3758544921875px] px-[46.684px] py-[93.369px] top-[21580px] w-[1867.376px]" data-name="Container">
      <BrandingTitle />
      <ContactInformation />
    </div>;
}
function Container5() {
  return <div className="h-[16px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
        <g id="Container"><path d={svgPaths.p18c14180} fill="var(--fill-0, #00D1FF)" id="Icon" /></g>
      </svg>
    </div>;
}
function Link3() {
  return <div className="content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px]" data-name="Link">
      <Container5 />
    </div>;
}
function Container6() {
  return <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container"><path d={svgPaths.p1f0e7f00} fill="var(--fill-0, #00D1FF)" id="Icon" /></g>
      </svg>
    </div>;
}
function Link4() {
  return <div className="content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px]" data-name="Link">
      <Container6 />
    </div>;
}
function Container7() {
  return <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
        <g id="Container"><path d={svgPaths.p2f9b4300} fill="var(--fill-0, #00D1FF)" id="Icon" /></g>
      </svg>
    </div>;
}
function Link5() {
  return <div className="content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px]" data-name="Link">
      <Container7 />
    </div>;
}
function Container4() {
  return <div className="absolute content-stretch flex gap-[16px] items-start left-[78px] right-[1468.67px] top-[21969px]" data-name="Container">
      <Link3 />
      <Link4 />
      <Link5 />
    </div>;
}
function CreditsSection() {
  const names = "Vu Thi Thanh Huyen - Nguyen Minh Kiet - Nguyen Sy Son - Vu Khanh Huyen - Hoang Minh Phuong - Nguyen Thi Ngoc Diep - Tran Duc Thang - Nguyen Thi Hien - Dinh Thanh Hang";
  return <>
      <style>{`
        @keyframes scrollMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .my-marquee-container {
          display: flex;
          width: max-content;
          flex-shrink: 0;
          animation: scrollMarquee 25s linear infinite;
        }
      `}</style>
      <div className="absolute left-0 right-0 top-[22095px] h-[45px] bg-[#0b1221] flex items-center text-[12px] text-[#f1f3fc] overflow-hidden border-t border-[rgba(30,58,138,0.5)] z-20 tracking-wider">
        <div className="shrink-0 font-['Space_Grotesk:Bold',sans-serif] px-[31px] whitespace-nowrap z-30 bg-[#0b1221] h-full flex items-center relative shadow-[15px_0_20px_-5px_#0b1221]">
          web is created by CTE FTU
        </div>
        <div className="flex-1 overflow-hidden relative h-full flex items-center opacity-80">
          <div className="my-marquee-container font-['Space_Grotesk:Regular',sans-serif] text-[14px]">
            <span className="pr-[100px] shrink-0 whitespace-nowrap">{names}</span>
            <span className="pr-[100px] shrink-0 whitespace-nowrap">{names}</span>
          </div>
        </div>
      </div>
    </>;
}
export function FooterSection() {
  return <motion.footer className="absolute contents left-0 top-[21580px]" initial={{
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
      <Footer />
      <Container />
      <Container4 />
      <CreditsSection />
    </motion.footer>;
}