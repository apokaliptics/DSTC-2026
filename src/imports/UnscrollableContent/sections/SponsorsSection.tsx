import logoBrandsVN from "../../../assets/logos/Brands VN - BTTT.png";
import logoEduwing from "../../../assets/logos/Eduwing Global (Edu2Review) - NTT Đồng hành.png";
import logoGiaiTriVanHoa from "../../../assets/logos/Giải trí văn hóa - BTTT.png";
import logoKosay from "../../../assets/logos/KOSAY - NTT Đồng hành.jpg";
import logoMCNA from "../../../assets/logos/MCNA - BTCM + NTT Đồng hành.png";
import logoPentel from "../../../assets/logos/Pentel - NTT Đồng hành.png";
import logoSongTre from "../../../assets/logos/Sóng trẻ - BTTT.jpg";
import logoTapChi from "../../../assets/logos/Tạp chí doanh nghiệp - BTTT.jpg";
import logoYbox from "../../../assets/logos/YBOX - BTTT.png";
import logoYouthPlus from "../../../assets/logos/YouthPlus - BTTT.png";

export function SponsorsSection() {
  return (
    <section className="absolute left-0 top-[15400px] w-[1920px] flex flex-col items-center z-[10]">
      {/* Title */}
      <div className="drop-shadow-[0px_4.399px_1.65px_rgba(0,0,0,0.1),0px_10.998px_4.399px_rgba(0,0,0,0.04)] flex flex-col items-center mb-[80px]">
        <h2 className="font-['Inter:Black',sans-serif] font-black text-[75px] text-center text-white">
          <span className="leading-[65.989px] text-white">{`ĐỐI TÁC VÀ `}</span>
          <span className="gradient-text-safe bg-clip-text bg-gradient-to-r from-[#4ade80] leading-[65.989px] text-[transparent] to-[#3b82f6]">NHÀ TÀI TRỢ</span>
        </h2>
      </div>

      {/* Nhà Tài Trợ */}
      <div className="flex flex-col items-center w-full max-w-[1400px] mb-[130px]">
        <h3 className="text-[#cbd5e1] text-[48px] font-['Inter:Extra_Bold',sans-serif] font-extrabold uppercase mb-[60px] tracking-wider">
          NHÀ TÀI TRỢ
        </h3>
        <div className="flex flex-row justify-center items-center gap-[80px] flex-wrap">
          <img src={logoMCNA} alt="MCNA" className="h-[140px] object-contain opacity-80 hover:opacity-100 transition-all duration-300 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.9)] hover:scale-105 cursor-pointer" />
          <img src={logoPentel} alt="Pentel" className="h-[120px] object-contain opacity-80 hover:opacity-100 transition-all duration-300 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.9)] hover:scale-105 cursor-pointer" />
          <img src={logoKosay} alt="Kosay" className="h-[120px] object-contain opacity-80 hover:opacity-100 transition-all duration-300 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.9)] hover:scale-105 cursor-pointer" />
          <img src={logoEduwing} alt="Eduwing Global" className="h-[110px] object-contain opacity-80 hover:opacity-100 transition-all duration-300 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.9)] hover:scale-105 cursor-pointer" />
        </div>
      </div>

      {/* Bảo Trợ Truyền Thông */}
      <div className="flex flex-col items-center w-full max-w-[1600px]">
        <h3 className="text-[#cbd5e1] text-[48px] font-['Inter:Extra_Bold',sans-serif] font-extrabold uppercase mb-[60px] tracking-wider">
          BẢO TRỢ TRUYỀN THÔNG
        </h3>
        <div className="flex flex-row justify-center items-center gap-[70px] flex-wrap">
          <img src={logoYouthPlus} alt="Youth+" className="h-[110px] object-contain opacity-80 hover:opacity-100 transition-all duration-300 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.9)] hover:scale-105 cursor-pointer" />
          <img src={logoGiaiTriVanHoa} alt="Giải Trí Văn Hóa" className="h-[110px] object-contain opacity-80 hover:opacity-100 transition-all duration-300 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.9)] hover:scale-105 cursor-pointer" />
          <img src={logoTapChi} alt="Tài Chính Doanh Nghiệp" className="h-[100px] object-contain opacity-80 hover:opacity-100 transition-all duration-300 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.9)] hover:scale-105 cursor-pointer" />
          <img src={logoBrandsVN} alt="Brands Vietnam" className="h-[80px] object-contain opacity-80 hover:opacity-100 transition-all duration-300 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.9)] hover:scale-105 cursor-pointer" />
          <img src={logoYbox} alt="YBOX.VN" className="h-[80px] object-contain opacity-80 hover:opacity-100 transition-all duration-300 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.9)] hover:scale-105 cursor-pointer" />
          <img src={logoSongTre} alt="Sóng Trẻ" className="h-[105px] object-contain opacity-80 hover:opacity-100 transition-all duration-300 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.9)] hover:scale-105 cursor-pointer" />
        </div>
      </div>
    </section>
  );
}
