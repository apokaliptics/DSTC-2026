import { motion } from "motion/react";
import { svgPaths, imgConnector1 } from "../constants/assets";

interface TimelineCardProps {
  title: string;
  subtitle?: string;
  className: string;
  children: React.ReactNode;
}

function TimelineCard({ title, subtitle, className, children }: TimelineCardProps) {
  const listTop = subtitle ? "top-[170px]" : "top-[115px]";
  return (
    <div className={`absolute rounded-[41.331px] border-3 border-solid border-white ${className}`}>
      {/* Title & Subtitle block */}
      <div className="absolute top-[40px] left-0 right-0 flex flex-col items-center justify-center text-center px-4">
        <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold text-[44.087px] text-white tracking-wide leading-[1.2]">
          {title}
        </span>
        {subtitle && (
          <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold text-[33.065px] text-white mt-1 leading-[1.2]">
            {subtitle}
          </span>
        )}
      </div>
      {/* Content list block */}
      <div className={`absolute ${listTop} left-[50px] right-[50px] bottom-[30px] text-white flex flex-col justify-start pt-[10px]`}>
        {children}
      </div>
    </div>
  );
}

/* Timeline star decorations */
function TimelineStar({
  className,
  gradientId,
  starPath
}: {
  className: string;
  gradientId: string;
  starPath: string;
}) {
  return <div className={`absolute h-[128px] w-[131px] ${className}`}>
    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 131.047 127.991">
      <g>
        <ellipse cx="65.5237" cy="63.9955" fill={`url(#${gradientId})`} rx="65.5237" ry="63.9955" />
        <path d={starPath} fill="var(--fill-0, #D9D9D9)" id="Star 4" />
      </g>
      <defs>
        <radialGradient cx="0" cy="0" gradientTransform="translate(65.5237 63.9955) rotate(90) scale(63.9955 65.5237)" gradientUnits="userSpaceOnUse" id={gradientId} r="1">
          <stop stopColor="white" />
          <stop offset="1" stopColor="#320F85" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  </div>;
}

function Round1() {
  return (
    <TimelineCard
      title="VÒNG 1 ĐÁNH GIÁ NĂNG LỰC"
      subtitle="Cá nhân (28/05 - 27/07)"
      className="bg-[rgba(255,255,255,0.3)] left-[145px] top-[8500px] w-[730px] h-[750px]"
    >
      <ul className="leading-[1.5] list-disc font-['Space_Grotesk:Regular',sans-serif] text-[32.065px]">
        <li className="mb-[15px] ms-[30px] pl-[10px]">
          <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold">Hình thức: </span>
          <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal">Cá nhân. Bài thi được làm trên nền tảng </span>
          <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold">XNOQuant</span>
          <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal"> của cuộc thi.</span>
        </li>
        <li className="mb-[15px] ms-[30px] pl-[10px]">
          <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold">Nội dung: </span>
          <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal">Thí sinh làm quen với hệ thống, tập dữ liệu (</span>
          <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold">dataset</span>
          <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal">) và thực hiện </span>
          <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold">simulate alpha</span>
          <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal"> cá nhân trên hệ thống.</span>
        </li>
        <li className="ms-[30px] pl-[10px]">
          <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold">Top 60 cá nhân </span>
          <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal">có điểm số cao nhất trên Bảng xếp hạng sẽ giành quyền bước vào </span>
          <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold">Vòng 2: Vòng sơ khảo</span>
        </li>
      </ul>
    </TimelineCard>
  );
}

function Round2() {
  return (
    <TimelineCard
      title="VÒNG 2: SƠ KHẢO"
      subtitle="Nhóm 2 người (28/07 - 14/08)"
      className="bg-[rgba(255,255,255,0.3)] left-[1075px] top-[9385px] w-[700px] h-[610px]"
    >
      <ul className="leading-[1.5] list-disc font-['Space_Grotesk:Regular',sans-serif] text-[32.065px]">
        <li className="mb-[15px] ms-[30px] pl-[10px]">
          <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal">Thí sinh được </span>
          <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold">tự ghép đội</span>
          <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal"> thông qua nền tảng </span>
          <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold">web matching của CTE.</span>
        </li>
        <li className="mb-[15px] ms-[30px] pl-[10px]">
          <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal">Các đội thi tiếp tục sử dụng dữ liệu để tìm ra và </span>
          <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold">submit alpha</span>
          <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal"> nhưng với mức độ </span>
          <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold">yêu cầu cao hơn.</span>
        </li>
        <li className="ms-[30px] pl-[10px]">
          <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold">Top 4</span>
          <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal"> đội (8 thí sinh) vào chung kết</span>
        </li>
      </ul>
    </TimelineCard>
  );
}

function Round3() {
  return (
    <TimelineCard
      title="VÒNG 3: CHUNG KHẢO"
      subtitle="Nhóm 2 người (14/08 - 21/08)"
      className="bg-[rgba(255,255,255,0.3)] left-[145px] top-[10160px] w-[730px] h-[750px]"
    >
      <ul className="leading-[1.5] list-disc font-['Space_Grotesk:Regular',sans-serif] text-[32.065px]">
        <li className="mb-[15px] ms-[30px] pl-[10px]">
          <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal">Đội thi tiếp tục </span>
          <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold">phát triển và hoàn thiện ý tưởng alpha.</span>
        </li>
        <li className="mb-[15px] ms-[30px] pl-[10px]">
          <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal">Mỗi đội thi được hướng dẫn bởi </span>
          <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold">1 mentor</span>
          <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal"> là chuyên gia trong ngành </span>
          <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold">Tài chính định lượng</span>
          <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal">.</span>
        </li>
        <li className="mb-[15px] ms-[30px] pl-[10px]">
          <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold">Đêm Chung kết </span>
          <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal">gồm 02 phần:</span>
        </li>
        <ul className="list-disc ms-[30px]">
          <li className="mb-[10px] ms-[30px] pl-[10px]">
            <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal">Thuyết trình với BGK về ý tưởng alpha đã xây dựng.</span>
          </li>
          <li className="ms-[30px] pl-[10px]">
            <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal">Phản biện giữa các đội thi và khán giả</span>
          </li>
        </ul>
      </ul>
    </TimelineCard>
  );
}

/* Timeline milestone cards */
function InfoSessionCard() {
  return (
    <TimelineCard
      title="INFO SESSION"
      className="bg-[rgba(255,255,255,0.5)] left-[1103px] top-[8570px] w-[644px] h-[520px]"
    >
      <ul className="leading-[1.5] list-disc font-['Space_Grotesk:Regular',sans-serif] text-[33.065px]">
        <li className="mb-[15px] ms-[30px] pl-[10px]">
          <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold">Thời gian dự kiến:</span>
          <span>{` Thứ Bảy, 06/06/2026`}</span>
        </li>
        <li className="mb-[15px] ms-[30px] pl-[10px]">
          <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold">Hình thức:</span>
          <span>{` Online`}</span>
        </li>
        <li className="mb-[15px] ms-[30px] pl-[10px]">
          <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold">Nội dung:</span>
          <span>{` Hướng dẫn cách sử dụng website dự thi`}</span>
        </li>
        <li className="ms-[30px] pl-[10px]">
          <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold align-middle">Record:</span>
          <a
            href="https://www.youtube.com/watch?v=jB-hoSrUiZo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-gradient-to-r from-[#4ade80] to-[#3b82f6] hover:from-[#22c55e] hover:to-[#2563eb] text-white font-['Space_Grotesk:Bold',sans-serif] font-bold px-[20px] py-[6px] rounded-full text-[24px] transition-all duration-300 shadow-[0_0_15px_rgba(74,222,128,0.4)] hover:shadow-[0_0_20px_rgba(74,222,128,0.7)] hover:scale-105 ml-[15px] align-middle no-underline"
          >
            Xem record tại đây
          </a>
        </li>
      </ul>
    </TimelineCard>
  );
}

function IntensiveTrainingCard() {
  return (
    <TimelineCard
      title="INTENSIVE TRAINING"
      className="bg-[rgba(255,255,255,0.5)] left-[178px] top-[9495px] w-[664px] h-[360px]"
    >
      <ul className="leading-[1.5] list-disc font-['Space_Grotesk:Regular',sans-serif] text-[29px]">
        <li className="mb-[15px] ms-[30px] pl-[10px]">
          <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold">Thời gian dự kiến:</span>
          <span>{` Thứ Năm, 23/07/2026`}</span>
        </li>
        <li className="mb-[15px] ms-[30px] pl-[10px]">
          <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold">Hình thức:</span>
          <span>{` Online`}</span>
        </li>
        <li className="ms-[30px] pl-[10px]">
          <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold">Nội dung:</span>
          <span>{` Hướng dẫn làm bài vòng 2`}</span>
        </li>
      </ul>
    </TimelineCard>
  );
}

function DemChungKetCard() {
  return (
    <TimelineCard
      title="ĐÊM CHUNG KẾT"
      className="bg-[rgba(255,255,255,0.5)] left-[1103px] top-[10350px] w-[644px] h-[320px]"
    >
      <ul className="leading-[1.5] list-disc font-['Space_Grotesk:Regular',sans-serif] text-[33.065px]">
        <li className="mb-[15px] ms-[30px] pl-[10px]">
          <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold">Thời gian dự kiến:</span>
          <span>{` Thứ Sáu, 21/08/2026`}</span>
        </li>
        <li className="ms-[30px] pl-[10px]">
          <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold">Địa điểm:</span>
          <span>{` Hà Nội`}</span>
        </li>
      </ul>
    </TimelineCard>
  );
}
function Group52() {
  return <div className="absolute contents left-[779px] top-[10286.71px]"><div className="absolute flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold h-[442.424px] justify-center leading-[0] left-[779px] not-italic text-[44.087px] text-center text-white top-[10286.71px] w-[244.224px]"><p className="leading-[1.5] mb-0">​</p><p className="leading-[1.5]">​</p></div></div>;
}
function Group51() {
  return <div className="absolute contents left-[779px] top-[10286.71px]"><Group52 /></div>;
}

/* Line segments */
function Group67() {
  return <div className="absolute h-0 left-[875px] top-[10507px] w-[100.99px]"><div className="absolute inset-[-13.78px_0_0_0]"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 95.1194 13.7771"><g id="Group 1175"><line id="Line 3" stroke="var(--stroke-0, #46CF81)" strokeWidth="13.7771" x1="5.18846e-09" x2="95.1194" y1="6.88857" y2="6.88857" /></g></svg></div></div>;
}
function Group61() {
  return <div className="absolute h-0 left-[875px] top-[8792.5px] w-[100.99px]"><div className="absolute inset-[-6.89px_0]"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85.8986 13.7771"><g id="Group 29"><path d={svgPaths.pc0db500} id="Line 2" stroke="var(--stroke-0, #51659C)" strokeWidth="13.7771" /></g></svg></div></div>;
}
function Group60() {
  return <div className="absolute contents left-[875px] top-[8792.5px]"><Group61 /></div>;
}
export function TimelineSection() {
  return <motion.section className="absolute contents left-[133.5px] top-[8341px]" initial={{
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
    {/* Main vertical gradient line */}
    <div className="absolute contents left-[133.5px] top-[8536px]">
      <div className="absolute contents left-[133.5px] top-[8536px]">
        <div className="absolute contents left-[133.5px] top-[8536px]">
          <div className="absolute contents left-[133.5px] top-[8536px]">
            {/* Timeline line */}
            <div className="absolute contents left-[133.5px] top-[8536px]">
              <Round1 />
              <div className="absolute contents left-[133.5px] top-[8536px]">
                <div className="absolute flex h-[2210px] items-center justify-center left-[975.99px] top-[8536px] w-0" style={{
                  "--transform-inner-width": "1185",
                  "--transform-inner-height": "22"
                } as React.CSSProperties}>
                  <div className="flex-none rotate-90">
                    <div className="h-0 relative w-[2210px]">
                      <div className="absolute inset-[-6.89px_-0.43%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1619.78 13.7772">
                          <path d={svgPaths.p34092000} id="Line 1" stroke="url(#paint0_linear_1_2039)" strokeLinecap="round" strokeWidth="13.7771" />
                          <defs>
                            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2039" x1="6.88857" x2="1487.89" y1="7.38759" y2="7.38759">
                              <stop stopColor="#1E3A8A" />
                              <stop offset="1" stopColor="#4ADE80" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <Group51 />
                <InfoSessionCard />
                {/* Round 3 wrapper */}
                <div className="absolute contents inset-[51.26%_54.11%_45.41%_6.95%]">
                  <div className="absolute contents inset-[51.26%_54.11%_45.41%_6.95%]">
                    <Round3 />
                  </div>
                </div>
                <div className="absolute h-0 left-[975.99px] top-[9700px] w-[99.01px]">
                  <div className="absolute inset-[-6.89px_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 92.2076 13.7771">
                      <path d="M0 6.88857H92.2076" id="Line 5" stroke="var(--stroke-0, #359284)" strokeWidth="13.7771" />
                    </svg>
                  </div>
                </div>
                <Group60 />
                {/* Star at node 2 */}
                <TimelineStar className="left-[910.08px] top-[9632px]" gradientId="paint0_radial_1_2150_t" starPath={svgPaths.p3cac3500} />
              </div>
            </div>
            {/* Star at node 3 — centered on intersection of vertical line and branch to Đêm Chung Kết */}
            <TimelineStar className="left-[910.08px] top-[10443px]" gradientId="paint0_radial_1_1957_t" starPath={svgPaths.pc646100} />
          </div>
          <Group67 />
        </div>
        {/* Star at node 1 */}
        <TimelineStar className="left-[910.08px] top-[8734px]" gradientId="paint0_radial_1_2020_t" starPath={svgPaths.p3cac3500} />
      </div>
      {/* Round 2 */}
      <div className="absolute contents left-[1065px] top-[9091px]">
        <div className="absolute contents left-[1065px] top-[9091px]">
          <div className="absolute contents left-[1065px] top-[9091px]">
            <div className="absolute contents left-[1065px] top-[9091px]">
              <Round2 />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Connectors — orb centred on vertical bar (x=976) at each arm intersection */}
    <div className="absolute h-[142px] left-[862px] top-[8727px] w-[228px]" data-name="Connector 1">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img loading="lazy" alt="" className="absolute h-[213.78%] left-[-187.5%] max-w-none top-[-60.6%] w-[491.25%]" src={imgConnector1} />
      </div>
    </div>
    <div className="absolute h-[142px] left-[860px] top-[9625px] w-[233px]" data-name="Connector 2">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img loading="lazy" alt="" className="absolute h-[213.78%] left-[-187.5%] max-w-none top-[-60.6%] w-[491.25%]" src={imgConnector1} />
      </div>
    </div>
    <div className="absolute h-[142px] left-[862px] top-[10436px] w-[228px]" data-name="Connector 3">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img loading="lazy" alt="" className="absolute h-[213.78%] left-[-187.5%] max-w-none top-[-60.6%] w-[491.25%]" src={imgConnector1} />
      </div>
    </div>
    {/* Main heading */}
    <IntensiveTrainingCard />
    <DemChungKetCard />
    <div className="absolute bg-clip-text bg-gradient-to-r flex flex-col font-['Inter:Bold',sans-serif] font-bold from-[#4ade80] h-[120px] justify-center leading-[0] left-[322.94px] not-italic text-[0px] text-[transparent] text-center to-[#3b82f6] top-[8308px] w-[1281.984px]">
      <p className="text-[80px]">
        <span className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[1.5] not-italic text-white">LỘ TRÌNH</span>
        <span className="gradient-text-safe bg-clip-text bg-gradient-to-r font-['Inter:Extra_Bold',sans-serif] font-extrabold from-[#4ade80] leading-[1.5] not-italic text-[transparent] to-[#3b82f6]">{` CUỘC THI`}</span>
      </p>
    </div>
  </motion.section>;
}