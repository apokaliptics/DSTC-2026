import { motion } from "motion/react";
import { imgLightFlareEffect, imgLightSang5 } from "../constants/assets";
function DivTextBase() {
  return <div className="relative shrink-0 w-[1588px]" data-name="div.text-base">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[36.657px] text-white w-full">
          <p className="mb-0">
            <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[1.5]">Sau thành công đáng ghi nhận của cuộc thi</span>
            <span className="leading-[1.5]">{` "Tìm kiếm Tài năng Khoa học Dữ liệu 2025", `}</span>
            <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[1.5]">{`mùa thứ năm chính thức khởi động với chủ đề `}</span>
            <span className="leading-[1.5]">"Tài Chính Định Lượng"</span>
            <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[1.5]">.</span>
            <span className="leading-[1.5]">{` `}</span>
            <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[1.5]">Thí sinh sẽ sử dụng bộ dữ liệu từ doanh nghiệp để:</span>
          </p>
          <ul className="leading-[1.5] list-disc">
            <li className="mb-0 ms-[54.985499999999995px]">
              {`Phân tích và khai thác ý tưởng từ dữ liệu tài chính `}
              <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal">được cung cấp</span>
            </li>
            <li className="ms-[54.985499999999995px]">
              {`Tìm ra ý tưởng và xây dựng alpha - `}
              <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal">{`mô hình tài chính định lượng có khả năng `}</span>
              {`dự đoán biến động giá `}
              <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal">và đem lại hiệu quả sinh lời cao trong tương lai.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>;
}
function DivP() {
  return <div className="absolute backdrop-blur-[6.651px] inset-[30.61%_0.06%_-13.52%_7.94%] rounded-[35.471px]" style={{
    backgroundImage: "linear-gradient(158.593deg, rgba(30, 58, 138, 0.8) 0%, rgba(22, 78, 99, 0.8) 100%)"
  }} data-name="div.p-8">
      <div className="content-stretch flex flex-col gap-[8.868px] items-start overflow-clip p-[38.249px] relative rounded-[inherit] size-full">
        <DivTextBase />
        <div className="flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal h-[200px] justify-center leading-[0] relative shrink-0 text-[36.657px] text-white w-[1580px]">
          <p className="leading-[1.5]">Chủ đề này không chỉ khuyến khích tư duy phân tích và sáng tạo, mà còn giúp thí sinh rèn luyện khả năng kết nối dữ liệu với thực tiễn tài chính - một kỹ năng cốt lõi trong kỷ nguyên số.</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-3 border-[rgba(6,182,212,0.5)] border-solid inset-0 pointer-events-none rounded-[35.471px] shadow-[0px_0px_33.254px_0px_rgba(34,211,238,0.2)]" />
    </div>;
}
export function AboutSection() {
  return <motion.section className="absolute h-[784px] left-[-17px] top-[5159px] w-[1802px]" initial={{
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
      <div className="absolute bg-clip-text bg-gradient-to-r flex flex-col font-['Inter:Bold',sans-serif] font-bold from-[#4ade80] inset-[15.18%_15.09%_75.13%_22.97%] justify-center leading-[0] not-italic text-[73.471px] text-[transparent] text-center to-[#3b82f6]">
        <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold">
          <span className="leading-[1.5] text-white">{`VỀ `}</span>
          <span className="gradient-text-safe bg-clip-text bg-gradient-to-r from-[#4ade80] leading-[1.5] text-[transparent] to-[#3b82f6]">DSTC 2026</span>
        </p>
      </div>
      <DivP />
      <div className="absolute inset-[95.41%_-3.44%_-13.52%_10.04%]" data-name="light sáng 5">
        <img loading="lazy" alt="" className="absolute block inset-0 max-w-none size-full" height="142" src={imgLightSang5} width="1683" />
      </div>
    </motion.section>;
}
export function LightFlareEffect1() {
  return <motion.div className="absolute left-[1284px] opacity-30 size-[1078.85px] top-[112px]" data-name="Light flare effect" initial={{
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
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img loading="lazy" alt="" className="absolute left-0 max-w-none size-full top-0" src={imgLightFlareEffect} />
      </div>
    </motion.div>;
}