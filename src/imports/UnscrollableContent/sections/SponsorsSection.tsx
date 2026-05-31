import { motion } from "motion/react";
import logoGoldNTQ from "@/assets/logos/tier-sponsors/gold.avif";
import logoCompanion3 from "@/assets/logos/companions/3.avif";
import logoCompanion4 from "@/assets/logos/companions/4.avif";
import logoCompanion5 from "@/assets/logos/companions/5.avif";
import logoCompanion6 from "@/assets/logos/companions/6.avif";
import logoCompanion7 from "@/assets/logos/companions/7.avif";
import logoCompanion8 from "@/assets/logos/companions/8.avif";
import logoMediaBrandsVN from "@/assets/logos/brands-vn.avif";
import logoMediaGiaiTriVanHoa from "@/assets/logos/giai-tri-van-hoa.avif";
import logoMediaSongTre from "@/assets/logos/song-tre.avif";
import logoMediaTapChi from "@/assets/logos/tap-chi-doanh-nghiep.avif";
import logoMediaYbox from "@/assets/logos/ybox.avif";
import logoMediaYouthPlus from "@/assets/logos/youthplus.avif";
import logoOrganizerCte from "@/assets/logos/organizers/cte.avif";
import logoOrganizerDataScience from "@/assets/logos/organizers/data-science.avif";
import logoOrganizerFtu from "@/assets/logos/organizers/ftu.avif";
import logoOrganizerYouthUnion from "@/assets/logos/organizers/youth-union.avif";
import logoProfessionalEztech from "@/assets/logos/strategic-partners/3.avif";
import logoProfessionalFtds from "@/assets/logos/strategic-partners/2.avif";
import logoProfessionalMCNA from "@/assets/logos/strategic-partners/5.avif";
import logoProfessionalRed from "@/assets/logos/strategic-partners/4.avif";
import logoSilverKhangPhuDat from "@/assets/logos/tier-sponsors/silver.avif";
import logoStrategicXnoquant from "@/assets/logos/strategic-xnoquant.avif";
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
const logoClassName =
  "object-contain opacity-85 hover:opacity-100 transition-all duration-300 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.9)] hover:scale-105 cursor-pointer";
const lightTileClassName =
  "bg-white/90 rounded-[28px] px-[32px] py-[24px] shadow-[0_18px_60px_rgba(15,23,42,0.28)]";

const mediaTileClassName =
  "bg-white/95 rounded-[22px] px-[24px] py-[16px] shadow-[0_12px_40px_rgba(0,0,0,0.25)] flex items-center justify-center w-[230px] h-[120px]";
const companionTileClassName =
  "bg-white/95 rounded-[28px] px-[32px] py-[24px] shadow-[0_18px_50px_rgba(0,0,0,0.25)] flex items-center justify-center w-[275px] h-[150px]";

const partnerGroups: PartnerGroup[] = [
  {
    title: "ĐƠN VỊ TỔ CHỨC",
    maxWidth: "max-w-[1800px]",
    gap: "gap-[20px]",
    logos: [
      {
        src: logoOrganizerFtu,
        alt: "Trường Đại học Ngoại thương",
        className: "h-[240px]",
      },
      {
        src: logoOrganizerYouthUnion,
        alt: "Đoàn Thanh niên Cộng sản Hồ Chí Minh",
        className: "h-[240px]",
      },
      {
        src: logoOrganizerCte,
        alt: "CLB Công nghệ trong Kinh tế và Kinh doanh",
        className: "h-[195px]",
      },
      {
        src: logoOrganizerDataScience,
        alt: "Data Science",
        className: "h-[210px]",
      },
    ],
  },
  {
    title: "ĐỐI TÁC CHIẾN LƯỢC",
    maxWidth: "max-w-[1300px]",
    gap: "gap-[80px]",
    logos: [
      {
        src: logoStrategicXnoquant,
        alt: "XNOQuant",
        className: "h-[75px]",
      },
    ],
  },
  {
    title: "BẢO TRỢ CHUYÊN MÔN",
    maxWidth: "max-w-[1500px]",
    gap: "gap-[70px]",
    logos: [
      {
        src: logoProfessionalFtds,
        alt: "Faculty of Technology and Data Science",
        className: "h-[130px]",
      },
      {
        src: logoProfessionalEztech,
        alt: "EZTech",
        className: "h-[120px]",
      },
      {
        src: logoProfessionalRed,
        alt: "Bảo trợ chuyên môn",
        className: "h-[130px]",
      },
      {
        src: logoProfessionalMCNA,
        alt: "MCNA Technology School",
        className: "h-[130px]",
      },
    ],
  },
  {
    title: "ĐỐI TÁC ĐỒNG HÀNH",
    maxWidth: "max-w-[1850px]",
    gap: "gap-[25px]",
    logos: [
      {
        src: logoCompanion3,
        alt: "Đối tác đồng hành 3",
        className: "max-h-[110px] max-w-[220px]",
        tileClassName: companionTileClassName,
      },
      {
        src: logoCompanion4,
        alt: "Đối tác đồng hành 4",
        className: "max-h-[110px] max-w-[220px]",
        tileClassName: companionTileClassName,
      },
      {
        src: logoCompanion5,
        alt: "Đối tác đồng hành 5",
        className: "max-h-[110px] max-w-[220px]",
        tileClassName: companionTileClassName,
      },
      {
        src: logoCompanion6,
        alt: "Đối tác đồng hành 6",
        className: "max-h-[110px] max-w-[220px]",
        tileClassName: companionTileClassName,
      },
      {
        src: logoCompanion7,
        alt: "Đối tác đồng hành 7",
        className: "max-h-[110px] max-w-[220px]",
        tileClassName: companionTileClassName,
      },
      {
        src: logoCompanion8,
        alt: "Đối tác đồng hành 8",
        className: "max-h-[110px] max-w-[220px]",
        tileClassName: companionTileClassName,
      },
    ],
  },
  {
    title: "BẢO TRỢ TRUYỀN THÔNG",
    maxWidth: "max-w-[1600px]",
    gap: "gap-[40px]",
    logos: [
      {
        src: logoMediaYouthPlus,
        alt: "Youth+",
        className: "max-h-[75px] max-w-[170px]",
        tileClassName: mediaTileClassName,
      },
      {
        src: logoMediaGiaiTriVanHoa,
        alt: "Giải Trí Văn Hóa",
        className: "max-h-[75px] max-w-[170px]",
        tileClassName: mediaTileClassName,
      },
      {
        src: logoMediaTapChi,
        alt: "Tài Chính Doanh Nghiệp",
        className: "max-h-[70px] max-w-[170px]",
        tileClassName: mediaTileClassName,
      },
      {
        src: logoMediaBrandsVN,
        alt: "Brands Vietnam",
        className: "max-h-[60px] max-w-[170px]",
        tileClassName: mediaTileClassName,
      },
      {
        src: logoMediaYbox,
        alt: "YBOX.VN",
        className: "max-h-[55px] max-w-[170px]",
        tileClassName: mediaTileClassName,
      },
      {
        src: logoMediaSongTre,
        alt: "Sóng Trẻ",
        className: "max-h-[70px] max-w-[170px]",
        tileClassName: mediaTileClassName,
      },
    ],
  },
];
const goldSilverGroups: PartnerGroup[] = [
  {
    title: "ĐỐI TÁC VÀNG",
    maxWidth: "max-w-[620px]",
    gap: "gap-[80px]",
    logos: [
      {
        src: logoGoldNTQ,
        alt: "NTQ",
        className: "h-[150px]",
      },
    ],
  },
  {
    title: "ĐỐI TÁC BẠC",
    maxWidth: "max-w-[620px]",
    gap: "gap-[80px]",
    logos: [
      {
        src: logoSilverKhangPhuDat,
        alt: "Khang Phú Đạt Event",
        className: "h-[150px]",
      },
    ],
  },
];
export function SponsorsSection() {
  return (
    <motion.section
      className="absolute left-0 top-[16800px] w-[1920px] flex flex-col items-center z-[10] pb-[220px]"
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.1,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      {/* Title */}
      <div className="drop-shadow-[0px_4.399px_1.65px_rgba(0,0,0,0.1),0px_10.998px_4.399px_rgba(0,0,0,0.04)] flex flex-col items-center mb-[100px]">
        <h2 className="font-['Inter:Black',sans-serif] font-black text-[75px] text-center text-white">
          <span className="leading-[65.989px] text-white">{`ĐỐI TÁC VÀ `}</span>
          <span className="gradient-text-safe bg-clip-text bg-gradient-to-r from-[#4ade80] leading-[65.989px] text-[transparent] to-[#3b82f6]">
            NHÀ TÀI TRỢ
          </span>
        </h2>
      </div>

      {/* Nhà Tài Trợ */}
      {partnerGroups.slice(0, 3).map((group) => (
        <div
          key={group.title}
          className={`flex flex-col items-center w-full ${group.maxWidth} mb-[120px]`}
        >
          <h3 className="text-white text-[48px] font-['Inter:Extra_Bold',sans-serif] font-extrabold uppercase mb-[55px] tracking-wider text-center">
            {group.title}
          </h3>
          <div
            className={`flex flex-row justify-center items-center ${group.gap} ${group.title === "ĐƠN VỊ TỔ CHỨC" ? "flex-nowrap" : "flex-wrap"}`}
          >
            {group.logos.map((logo) => (
              <div key={logo.alt} className={logo.tileClassName ?? ""}>
                <img
                  loading="lazy"
                  src={logo.src}
                  alt={logo.alt}
                  className={`${logoClassName} ${logo.className ?? ""}`}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="grid grid-cols-2 gap-[130px] items-start w-full max-w-[1400px] mb-[120px]">
        {goldSilverGroups.map((group) => (
          <div
            key={group.title}
            className={`flex flex-col items-center w-full ${group.maxWidth}`}
          >
            <h3 className="text-white text-[48px] font-['Inter:Extra_Bold',sans-serif] font-extrabold uppercase mb-[55px] tracking-wider text-center">
              {group.title}
            </h3>
            <div
              className={`flex flex-row justify-center items-center ${group.gap} flex-wrap`}
            >
              {group.logos.map((logo) => (
                <div key={logo.alt} className={logo.tileClassName ?? ""}>
                  <img
                    loading="lazy"
                    src={logo.src}
                    alt={logo.alt}
                    className={`${logoClassName} ${logo.className ?? ""}`}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {partnerGroups.slice(3, -1).map((group) => (
        <div
          key={group.title}
          className={`flex flex-col items-center w-full ${group.maxWidth} mb-[120px]`}
        >
          <h3 className="text-white text-[48px] font-['Inter:Extra_Bold',sans-serif] font-extrabold uppercase mb-[55px] tracking-wider text-center">
            {group.title}
          </h3>
          <div
            className={`flex flex-row justify-center items-center ${group.gap} ${group.title === "ĐỐI TÁC ĐỒNG HÀNH" ? "flex-nowrap" : "flex-wrap"}`}
          >
            {group.logos.map((logo) => (
              <div key={logo.alt} className={logo.tileClassName ?? ""}>
                <img
                  loading="lazy"
                  src={logo.src}
                  alt={logo.alt}
                  className={`${logoClassName} ${logo.className ?? ""}`}
                />
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Bảo Trợ Truyền Thông */}
      <div
        className={`flex flex-col items-center w-full ${partnerGroups[partnerGroups.length - 1].maxWidth}`}
      >
        <h3 className="text-white text-[48px] font-['Inter:Extra_Bold',sans-serif] font-extrabold uppercase mb-[60px] tracking-wider">
          {partnerGroups[partnerGroups.length - 1].title}
        </h3>
        <div
          className={`flex flex-row justify-center items-center ${partnerGroups[partnerGroups.length - 1].gap} flex-wrap`}
        >
          {partnerGroups[partnerGroups.length - 1].logos.map((logo) => (
            <div key={logo.alt} className={logo.tileClassName ?? ""}>
              <img
                loading="lazy"
                src={logo.src}
                alt={logo.alt}
                className={`${logoClassName} ${logo.className ?? ""}`}
              />
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
