import { svgPaths, imgConnector1 } from "../constants/assets";

/* Timeline star decorations */
function TimelineStar({ inset, gradientId, starPath }: { inset: string; gradientId: string; starPath: string }) {
  return (
    <div className={`absolute inset-[${inset}]`} style={{ inset }}>
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
    </div>
  );
}

/* Round 1 Body */
function Body2() {
  return (
    <div className="-translate-x-1/2 absolute bg-[rgba(255,255,255,0.3)] bottom-[51.96%] left-[calc(50%-432.43px)] rounded-[41.331px] top-[45.08%] w-[727.954px]" data-name="Body">
      <div aria-hidden="true" className="absolute border-3 border-solid border-white inset-0 pointer-events-none rounded-[41.331px]" />
    </div>
  );
}

function Round1() {
  return (
    <div className="absolute contents left-[163.59px] top-[7563px]">
      <div className="absolute bottom-[51.87%] flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] left-[173.73px] not-italic text-[33.065px] text-white top-[45.48%] w-[696.525px]">
        <p className="leading-[1.5] mb-0">​</p>
        <ul className="leading-[1.5] list-disc">
          <li className="mb-0 ms-[49.5975px]">
            <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal">{`Các thí sinh bắt đầu làm quen nền tảng `}</span>
            <span className="font-['Space_Grotesk:Medium',sans-serif] font-medium">XNO Quant</span>
            <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal">{` và `}</span>
            <span className="font-['Space_Grotesk:Medium',sans-serif] font-medium">submit alpha.</span>
          </li>
          <li className="mb-0 ms-[49.5975px]">
            <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal">Hệ thống sẽ tính điểm alpha và hiển thị xếp hạng theo tuần trên</span>
            <span className="font-['Space_Grotesk:Medium',sans-serif] font-medium">{` leaderboard.`}</span>
          </li>
          <li className="ms-[49.5975px]">
            <span className="font-['Space_Grotesk:Medium',sans-serif] font-medium">Top 60</span>
            <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal">{` cá nhân xuất sắc nhất sẽ vào vòng tiếp theo`}</span>
          </li>
        </ul>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[508.81px] not-italic text-[0px] text-center text-white top-[7648px] w-[532.279px] whitespace-pre-wrap">
        <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[1.5] mb-0 text-[44.087px]">{`VÒNG 1 `}</p>
        <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[1.5] text-[33.065px]">{` Đánh giá năng lực (28/05-19/07) `}</p>
      </div>
      <Body2 />
    </div>
  );
}

/* Round 2 Body */
function Body5() {
  return (
    <div className="-translate-y-1/2 absolute bg-[rgba(255,255,255,0.3)] h-[492px] left-[55.47%] right-[8.33%] rounded-[41.331px] top-[calc(50%-50.5px)]" data-name="Body">
      <div aria-hidden="true" className="absolute border-3 border-solid border-white inset-0 pointer-events-none rounded-[41.331px]" />
    </div>
  );
}

function Round2() {
  return (
    <div className="absolute contents left-[1065px] top-[8091px]">
      <div className="absolute flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold inset-[48.89%_10.91%_49.03%_56.82%] justify-center leading-[0] not-italic text-[33.065px] text-white">
        <p className="leading-[1.5] mb-0">​</p>
        <ul className="leading-[1.5] list-disc">
          <li className="mb-0 ms-[49.5975px]">
            <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal">Thí sinh được</span>
            <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold">{` ghép đội`}</span>
            <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal">{` qua `}</span>
            <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold">web matching</span>
            <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal">{` với mỗi team 2 người.`}</span>
          </li>
          <li className="mb-0 ms-[49.5975px]">
            <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal">{`Các đội thi tiếp tục sử dụng dữ liệu để tìm ra và `}</span>
            <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold">submit alpha</span>
            <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal">{` nhưng với mức độ`}</span>
            <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold">{` yêu cầu cao hơn.`}</span>
          </li>
          <li className="ms-[49.5975px]">
            <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold">Top 4</span>
            <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal">{` đội (8 thí sinh) vào chung kết`}</span>
          </li>
        </ul>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[1401px] not-italic text-[0px] text-center text-white top-[8172px] w-[504px] whitespace-pre-wrap">
        <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[1.5] mb-0 text-[44.087px]">{`VÒNG 2: SƠ KHẢO `}</p>
        <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[1.5] text-[33.065px]">Nhóm 2 người (16/07 – 07/08)</p>
      </div>
      <div className="-translate-y-1/2 absolute contents left-[55.47%] right-[8.33%] top-[calc(50%-50.5px)]">
        <Body5 />
      </div>
    </div>
  );
}

/* Round 3 Body */
function Body4() {
  return (
    <div className="-translate-y-1/2 absolute bg-[rgba(255,255,255,0.3)] h-[559px] left-[6.98%] right-[54.11%] rounded-[41.331px] top-[calc(50%+491px)]" data-name="Body">
      <div aria-hidden="true" className="absolute border-3 border-solid border-white inset-0 pointer-events-none rounded-[41.331px]" />
    </div>
  );
}

function Round3() {
  return (
    <div className="absolute contents left-[133.5px] top-[8599px]">
      <Body4 />
      <div className="absolute flex flex-col font-['Special_Elite:Regular',sans-serif] inset-[51.78%_56.09%_45.45%_6.95%] justify-center leading-[0] not-italic text-[33.065px] text-white">
        <p className="leading-[1.5] mb-0">​</p>
        <ul className="list-disc">
          <li className="leading-[1.5] mb-0 ms-[49.5975px]">
            <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal">{`Đội thi tiếp tục `}</span>
            <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold">phát triển và hoàn thiện ý tưởng alpha.</span>
          </li>
          <li className="leading-[1.5] mb-0 ms-[49.5975px]">
            <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold">{`Đêm Chung kết `}</span>
            <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal">gồm 02 phần:</span>
          </li>
          <ul>
            <li className="mb-0 ms-[99.195px]">
              <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[1.5]">Thuyết trình với BGK về ý tưởng alpha đã xây dựng.</span>
            </li>
            <li className="ms-[99.195px]">
              <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[1.5]">Phản biện giữa các đội thi và khán giả</span>
            </li>
          </ul>
        </ul>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold h-[117px] justify-center leading-[0] left-[482.5px] not-italic text-[0px] text-center text-white top-[8699.5px] w-[479px]">
        <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[1.5] mb-0 text-[44.087px]">VÒNG 3: CHUNG KHẢO</p>
        <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[1.5] text-[33.065px]">Nhóm 2 người (06/08 – 15/08)</p>
      </div>
    </div>
  );
}

/* Timeline milestone bodies */
function Body() { return (<div className="absolute bg-[rgba(255,255,255,0.5)] inset-[52.52%_9.95%_46.4%_55.47%] rounded-[41.331px]" data-name="Body"><div aria-hidden="true" className="absolute border-4 border-solid border-white inset-0 pointer-events-none rounded-[41.331px]" /></div>); }
function Group45() { return (<div className="absolute contents inset-[52.52%_9.95%_46.4%_55.47%]"><Body /></div>); }
function Group44() { return (<div className="absolute contents inset-[52.52%_9.95%_46.4%_55.47%]"><Group45 /></div>); }
function Group43() { return (<div className="absolute contents inset-[52.52%_9.95%_46.4%_55.47%]"><Group44 /></div>); }
function Group42() { return (<div className="absolute contents inset-[52.52%_9.95%_46.4%_55.47%]"><Group43 /></div>); }
export function Group41() { return (<div className="absolute contents inset-[52.41%_9.95%_46.28%_55.47%]"><Group42 /><div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold inset-[52.41%_13.07%_46.28%_58.54%] justify-center leading-[0] not-italic text-[33.065px] text-center text-white"><p className="leading-[1.5]">Đêm chung kết</p></div></div>); }

function Body1() { return (<div className="absolute bg-[rgba(255,255,255,0.5)] inset-[49.07%_55.52%_49.84%_9.9%] rounded-[41.331px]" data-name="Body"><div aria-hidden="true" className="absolute border-4 border-solid border-white inset-0 pointer-events-none rounded-[41.331px]" /></div>); }
function Group50() { return (<div className="absolute contents inset-[49.07%_55.52%_49.84%_9.9%]"><Body1 /></div>); }
function Group49() { return (<div className="absolute contents inset-[49.07%_55.52%_49.84%_9.9%]"><Group50 /></div>); }
function Group48() { return (<div className="absolute contents inset-[49.07%_55.52%_49.84%_9.9%]"><Group49 /></div>); }
function Group47() { return (<div className="absolute contents inset-[49.07%_55.52%_49.84%_9.9%]"><Group48 /></div>); }
export function Group46() { return (<div className="absolute contents inset-[48.96%_55.52%_49.73%_9.9%]"><Group47 /><div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold inset-[48.96%_58.65%_49.73%_12.97%] justify-center leading-[0] not-italic text-[33.065px] text-center text-white"><p className="leading-[1.5]">Intensive training (online)</p></div></div>); }

function Body3() { return (<div className="absolute bg-[rgba(255,255,255,0.5)] inset-[45.84%_9.64%_53.08%_56.8%] rounded-[41.331px]" data-name="Body"><div aria-hidden="true" className="absolute border-4 border-solid border-white inset-0 pointer-events-none rounded-[41.331px]" /></div>); }
function Group57() { return (<div className="absolute contents inset-[45.84%_9.64%_53.08%_56.8%]"><Body3 /></div>); }
function Group56() { return (<div className="absolute contents inset-[45.84%_9.64%_53.08%_56.8%]"><Group57 /></div>); }
function Group55() { return (<div className="absolute contents inset-[45.84%_9.64%_53.08%_56.8%]"><Group56 /></div>); }
function Group54() { return (<div className="absolute contents inset-[45.84%_9.64%_53.08%_56.8%]"><Group55 /></div>); }
function Group53() { return (<div className="absolute contents inset-[45.84%_9.64%_53.08%_56.8%]"><Group54 /></div>); }
function Group52() { return (<div className="absolute contents inset-[53.62%_26.99%_43.74%_40.56%]"><div className="absolute flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold inset-[53.62%_26.99%_43.74%_40.56%] justify-center leading-[0] not-italic text-[44.087px] text-center text-white"><p className="leading-[1.5] mb-0">​</p><p className="leading-[1.5]">​</p></div></div>); }
function Group51() { return (<div className="absolute contents inset-[53.62%_26.99%_43.74%_40.56%]"><Group52 /></div>); }

/* Line segments */
function Group67() { return (<div className="absolute h-0 left-[880.87px] top-[8907px] w-[95.119px]"><div className="absolute inset-[-13.78px_0_0_0]"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 95.1194 13.7771"><g id="Group 1175"><line id="Line 3" stroke="var(--stroke-0, #46CF81)" strokeWidth="13.7771" x1="5.18846e-09" x2="95.1194" y1="6.88857" y2="6.88857" /></g></svg></div></div>); }
function Group61() { return (<div className="absolute h-0 left-[891.54px] top-[7792.5px] w-[85.899px]"><div className="absolute inset-[-6.89px_0]"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85.8986 13.7771"><g id="Group 29"><path d={svgPaths.pc0db500} id="Line 2" stroke="var(--stroke-0, #51659C)" strokeWidth="13.7771" /></g></svg></div></div>); }
function Group60() { return (<div className="absolute contents left-[891.54px] top-[7792.5px]"><Group61 /></div>); }

export function TimelineSection() {
  return (
    <section className="absolute contents left-[133.5px] top-[7341px]">
      {/* Main vertical gradient line */}
      <div className="absolute contents left-[133.5px] top-[7536px]">
        <div className="absolute contents left-[133.5px] top-[7536px]">
          <div className="absolute contents left-[133.5px] top-[7536px]">
            <div className="absolute contents left-[133.5px] top-[7536px]">
              {/* Timeline line */}
              <div className="absolute contents left-[133.5px] top-[7536px]">
                <Round1 />
                <div className="absolute contents left-[133.5px] top-[7536px]">
                  <div className="absolute flex h-[1606px] items-center justify-center left-[975.99px] top-[7536px] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
                    <div className="flex-none rotate-90">
                      <div className="h-0 relative w-[1606px]">
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
                  <Group53 />
                  {/* Round 3 wrapper */}
                  <div className="absolute contents inset-[51.26%_54.11%_45.41%_6.95%]">
                    <div className="absolute contents inset-[51.26%_54.11%_45.41%_6.95%]">
                      <Round3 />
                    </div>
                  </div>
                  <div className="absolute h-0 left-[975.99px] top-[8350px] w-[92.208px]">
                    <div className="absolute inset-[-6.89px_0]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 92.2076 13.7771">
                        <path d="M0 6.88857H92.2076" id="Line 5" stroke="var(--stroke-0, #359284)" strokeWidth="13.7771" />
                      </svg>
                    </div>
                  </div>
                  <Group60 />
                  {/* Star at node 2 */}
                  <TimelineStar inset="49.41% 45.78% 49.82% 47.4%" gradientId="paint0_radial_1_2150_t" starPath={svgPaths.p3cac3500} />
                  <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold inset-[45.72%_12.26%_52.97%_60.18%] justify-center leading-[0] not-italic text-[33.065px] text-center text-white">
                    <p>
                      <span className="leading-[1.5]">INFO SESSION (online)</span>
                      <span className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic">{` hướng dẫn sử dụng nền tảng XNOQuant`}</span>
                    </p>
                  </div>
                </div>
              </div>
              {/* Star at node 3 */}
              <TimelineStar inset="52.69% 45.78% 46.55% 47.4%" gradientId="paint0_radial_1_1957_t" starPath={svgPaths.pc646100} />
            </div>
            <Group67 />
          </div>
          {/* Star at node 1 */}
          <TimelineStar inset="46.1% 45.78% 53.14% 47.4%" gradientId="paint0_radial_1_2020_t" starPath={svgPaths.p3cac3500} />
        </div>
        {/* Round 2 */}
        <div className="absolute contents left-[1065px] top-[8091px]">
          <div className="absolute contents left-[1065px] top-[8091px]">
            <div className="absolute contents left-[1065px] top-[8091px]">
              <div className="absolute contents left-[1065px] top-[8091px]">
                <Round2 />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Connectors */}
      <div className="absolute h-[142px] left-[889px] top-[7727px] w-[210px]" data-name="Connector 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[213.78%] left-[-195.59%] max-w-none top-[-67.64%] w-[491.25%]" src={imgConnector1} />
        </div>
      </div>
      <div className="absolute h-[142px] left-[880px] top-[8275px] w-[210px]" data-name="Connector 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[213.78%] left-[-187.5%] max-w-none top-[-60.6%] w-[491.25%]" src={imgConnector1} />
        </div>
      </div>
      <div className="absolute h-[142px] left-[880px] top-[8839px] w-[210px]" data-name="Connector 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[213.78%] left-[-187.5%] max-w-none top-[-60.6%] w-[491.25%]" src={imgConnector1} />
        </div>
      </div>
      {/* Main heading */}
      <div className="absolute bg-clip-text bg-gradient-to-r flex flex-col font-['Inter:Bold',sans-serif] font-bold from-[#4ade80] inset-[43.76%_16.41%_55.83%_16.82%] justify-center leading-[0] not-italic text-[0px] text-[transparent] text-center to-[#3b82f6]">
        <p className="text-[80px]">
          <span className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[1.5] not-italic text-white">LỘ TRÌNH</span>
          <span className="gradient-text-safe bg-clip-text bg-gradient-to-r font-['Inter:Extra_Bold',sans-serif] font-extrabold from-[#4ade80] leading-[1.5] not-italic text-[transparent] to-[#3b82f6]">{` CUỘC THI`}</span>
        </p>
      </div>
    </section>
  );
}
