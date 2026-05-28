import logoGoldNTQ from "../../../../doi tac vang + bac/đốI TÁC VÀNG VÀ BẠC/VÀNG.png";
import logoCompanion3 from "../../../../logo doi tac dong hanh/ĐỐI TÁC ĐỒNG HÀNH/3.png";
import logoCompanion4 from "../../../../logo doi tac dong hanh/ĐỐI TÁC ĐỒNG HÀNH/4.png";
import logoCompanion5 from "../../../../logo doi tac dong hanh/ĐỐI TÁC ĐỒNG HÀNH/5.png";
import logoCompanion6 from "../../../../logo doi tac dong hanh/ĐỐI TÁC ĐỒNG HÀNH/6.png";
import logoCompanion7 from "../../../../logo doi tac dong hanh/ĐỐI TÁC ĐỒNG HÀNH/7.png";
import logoCompanion8 from "../../../../logo doi tac dong hanh/ĐỐI TÁC ĐỒNG HÀNH/8.png";
import logoMediaBrandsVN from "../../../assets/logos/Brands VN - BTTT.png";
import logoMediaGiaiTriVanHoa from "../../../assets/logos/Giải trí văn hóa - BTTT.png";
import logoMediaSongTre from "../../../assets/logos/Sóng trẻ - BTTT.jpg";
import logoMediaTapChi from "../../../assets/logos/Tạp chí doanh nghiệp - BTTT.jpg";
import logoMediaYbox from "../../../assets/logos/YBOX - BTTT.png";
import logoMediaYouthPlus from "../../../assets/logos/YouthPlus - BTTT.png";
import logoOrganizerCte from "../../../../Don vi to chuc logo/Đơn vị tổ chức/5.png";
import logoOrganizerDataScience from "../../../../Don vi to chuc logo/Đơn vị tổ chức/6.png";
import logoOrganizerFtu from "../../../../Don vi to chuc logo/Đơn vị tổ chức/3.png";
import logoOrganizerYouthUnion from "../../../../Don vi to chuc logo/Đơn vị tổ chức/4.png";
import logoProfessionalEztech from "../../../../Doi tac chien luoc + Bao tro chuyen mon/3.png";
import logoProfessionalFtds from "../../../../Doi tac chien luoc + Bao tro chuyen mon/2.png";
import logoProfessionalMCNA from "../../../../Doi tac chien luoc + Bao tro chuyen mon/5.png";
import logoProfessionalRed from "../../../../Doi tac chien luoc + Bao tro chuyen mon/4.png";
import logoSilverKhangPhuDat from "../../../../doi tac vang + bac/đốI TÁC VÀNG VÀ BẠC/Bản sao của mở đơn (2).png";
import logoStrategicXnoquant from "../../../../Doi tac chien luoc + Bao tro chuyen mon/doi tac chien luoc.png";

type LogoItem = {
  src: string;
  alt: string;
  className?: string;
  tileClassName?: string;
};

type PartnerGroup = {
  title: string;
  maxWidth: string;
  gap: string;
  logos: LogoItem[];
};

const logoClassName = "object-contain opacity-85 hover:opacity-100 transition-all duration-300 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.9)] hover:scale-105 cursor-pointer";
const lightTileClassName = "bg-white/90 rounded-[28px] px-[32px] py-[24px] shadow-[0_18px_60px_rgba(15,23,42,0.28)]";

const partnerGroups: PartnerGroup[] = [
  {
    title: "ĐƠN VỊ TỔ CHỨC",
    maxWidth: "max-w-[1500px]",
    gap: "gap-[70px]",
    logos: [
      { src: logoOrganizerFtu, alt: "Trường Đại học Ngoại thương", className: "h-[150px]" },
      { src: logoOrganizerYouthUnion, alt: "Đoàn Thanh niên Cộng sản Hồ Chí Minh", className: "h-[150px]" },
      { src: logoOrganizerCte, alt: "CLB Công nghệ trong Kinh tế và Kinh doanh", className: "h-[130px]", tileClassName: lightTileClassName },
      { src: logoOrganizerDataScience, alt: "Data Science", className: "h-[130px]" },
    ],
  },
  {
    title: "ĐỐI TÁC CHIẾN LƯỢC",
    maxWidth: "max-w-[1300px]",
    gap: "gap-[80px]",
    logos: [
      { src: logoStrategicXnoquant, alt: "XNOQuant", className: "h-[150px]" },
    ],
  },
  {
    title: "BẢO TRỢ CHUYÊN MÔN",
    maxWidth: "max-w-[1500px]",
    gap: "gap-[70px]",
    logos: [
      { src: logoProfessionalFtds, alt: "Faculty of Technology and Data Science", className: "h-[130px]" },
      { src: logoProfessionalEztech, alt: "EZTech", className: "h-[120px]" },
      { src: logoProfessionalRed, alt: "Bảo trợ chuyên môn", className: "h-[130px]" },
      { src: logoProfessionalMCNA, alt: "MCNA Technology School", className: "h-[130px]" },
    ],
  },
  {
    title: "ĐỐI TÁC ĐỒNG HÀNH",
    maxWidth: "max-w-[1500px]",
    gap: "gap-[80px]",
    logos: [
      { src: logoCompanion3, alt: "Đối tác đồng hành 3", className: "h-[120px]" },
      { src: logoCompanion4, alt: "Đối tác đồng hành 4", className: "h-[120px]" },
      { src: logoCompanion5, alt: "Đối tác đồng hành 5", className: "h-[120px]" },
      { src: logoCompanion6, alt: "Đối tác đồng hành 6", className: "h-[120px]" },
      { src: logoCompanion7, alt: "Đối tác đồng hành 7", className: "h-[120px]" },
      { src: logoCompanion8, alt: "Đối tác đồng hành 8", className: "h-[120px]" },
    ],
  },
  {
    title: "BẢO TRỢ TRUYỀN THÔNG",
    maxWidth: "max-w-[1600px]",
    gap: "gap-[70px]",
    logos: [
      { src: logoMediaYouthPlus, alt: "Youth+", className: "h-[105px]" },
      { src: logoMediaGiaiTriVanHoa, alt: "Giải Trí Văn Hóa", className: "h-[105px]" },
      { src: logoMediaTapChi, alt: "Tài Chính Doanh Nghiệp", className: "h-[95px]" },
      { src: logoMediaBrandsVN, alt: "Brands Vietnam", className: "h-[75px]" },
      { src: logoMediaYbox, alt: "YBOX.VN", className: "h-[75px]" },
      { src: logoMediaSongTre, alt: "Sóng Trẻ", className: "h-[100px]" },
    ],
  },
];

const goldSilverGroups: PartnerGroup[] = [
  {
    title: "ĐỐI TÁC VÀNG",
    maxWidth: "max-w-[620px]",
    gap: "gap-[80px]",
    logos: [
      { src: logoGoldNTQ, alt: "NTQ", className: "h-[150px]" },
    ],
  },
  {
    title: "ĐỐI TÁC BẠC",
    maxWidth: "max-w-[620px]",
    gap: "gap-[80px]",
    logos: [
      { src: logoSilverKhangPhuDat, alt: "Khang Phú Đạt Event", className: "h-[150px]" },
    ],
  },
];

export function SponsorsSection() {
  return (
    <section className="absolute left-0 top-[16800px] w-[1920px] flex flex-col items-center z-[10] pb-[220px]">
      {/* Title */}
      <div className="drop-shadow-[0px_4.399px_1.65px_rgba(0,0,0,0.1),0px_10.998px_4.399px_rgba(0,0,0,0.04)] flex flex-col items-center mb-[100px]">
        <h2 className="font-['Inter:Black',sans-serif] font-black text-[75px] text-center text-white">
          <span className="leading-[65.989px] text-white">{`ĐỐI TÁC VÀ `}</span>
          <span className="gradient-text-safe bg-clip-text bg-gradient-to-r from-[#4ade80] leading-[65.989px] text-[transparent] to-[#3b82f6]">NHÀ TÀI TRỢ</span>
        </h2>
      </div>

      {/* Nhà Tài Trợ */}
      {partnerGroups.slice(0, 3).map((group) => (
        <div key={group.title} className={`flex flex-col items-center w-full ${group.maxWidth} mb-[120px]`}>
          <h3 className="text-[#cbd5e1] text-[48px] font-['Inter:Extra_Bold',sans-serif] font-extrabold uppercase mb-[55px] tracking-wider text-center">
            {group.title}
          </h3>
          <div className={`flex flex-row justify-center items-center ${group.gap} flex-wrap`}>
            {group.logos.map((logo) => (
              <div key={logo.alt} className={logo.tileClassName ?? ""}>
                <img src={logo.src} alt={logo.alt} className={`${logoClassName} ${logo.className ?? ""}`} />
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="grid grid-cols-2 gap-[130px] items-start w-full max-w-[1400px] mb-[120px]">
        {goldSilverGroups.map((group) => (
          <div key={group.title} className={`flex flex-col items-center w-full ${group.maxWidth}`}>
            <h3 className="text-[#cbd5e1] text-[48px] font-['Inter:Extra_Bold',sans-serif] font-extrabold uppercase mb-[55px] tracking-wider text-center">
              {group.title}
            </h3>
            <div className={`flex flex-row justify-center items-center ${group.gap} flex-wrap`}>
              {group.logos.map((logo) => (
                <div key={logo.alt} className={logo.tileClassName ?? ""}>
                  <img src={logo.src} alt={logo.alt} className={`${logoClassName} ${logo.className ?? ""}`} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {partnerGroups.slice(3, -1).map((group) => (
        <div key={group.title} className={`flex flex-col items-center w-full ${group.maxWidth} mb-[120px]`}>
          <h3 className="text-[#cbd5e1] text-[48px] font-['Inter:Extra_Bold',sans-serif] font-extrabold uppercase mb-[55px] tracking-wider text-center">
            {group.title}
          </h3>
          <div className={`flex flex-row justify-center items-center ${group.gap} flex-wrap`}>
            {group.logos.map((logo) => (
              <div key={logo.alt} className={logo.tileClassName ?? ""}>
                <img src={logo.src} alt={logo.alt} className={`${logoClassName} ${logo.className ?? ""}`} />
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Bảo Trợ Truyền Thông */}
      <div className={`flex flex-col items-center w-full ${partnerGroups[partnerGroups.length - 1].maxWidth}`}>
        <h3 className="text-[#cbd5e1] text-[48px] font-['Inter:Extra_Bold',sans-serif] font-extrabold uppercase mb-[60px] tracking-wider">
          {partnerGroups[partnerGroups.length - 1].title}
        </h3>
        <div className={`flex flex-row justify-center items-center ${partnerGroups[partnerGroups.length - 1].gap} flex-wrap`}>
          {partnerGroups[partnerGroups.length - 1].logos.map((logo) => (
            <div key={logo.alt} className={logo.tileClassName ?? ""}>
              <img src={logo.src} alt={logo.alt} className={`${logoClassName} ${logo.className ?? ""}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
