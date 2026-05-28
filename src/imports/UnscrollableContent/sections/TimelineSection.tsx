import { svgPaths, imgConnector1 } from "../constants/assets";

/* Timeline star decorations */
function TimelineStar({ className, gradientId, starPath }: { className: string; gradientId: string; starPath: string }) {
  return (
    <div className={`absolute h-[128px] w-[131px] ${className}`}>
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
    <div className="absolute bg-[rgba(255,255,255,0.3)] h-[496.096px] left-[163.59px] rounded-[41.331px] top-[7557.41px] w-[727.954px]" data-name="Body">
      <div aria-hidden="true" className="absolute border-3 border-solid border-white inset-0 pointer-events-none rounded-[41.331px]" />
    </div>
  );
}

function Round1() {
  return (
    <div className="absolute contents left-[163.59px] top-[7563px]">
      <div className="absolute flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold h-[444.46px] justify-center leading-[0] left-[173.73px] not-italic text-[33.065px] text-white top-[7622.45px] w-[696.525px]">
        <p className="leading-[1.5] mb-0">​</p>
        <ul className="leading-[1.5] list-disc">
          <li className="mb-0 ms-[49.5975px]">
            <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal">{`Các thí sinh bắt đầu làm quen nền tảng `}</span>
            <span className="font-['Space_Grotesk:Medium',sans-serif] font-medium">XNOQuant</span>
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
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[508.81px] not-italic text-[0px] text-center text-white top-[7648px] w-[660px] whitespace-pre-wrap">
        <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[1.5] mb-0 text-[44.087px]">{`VÒNG 1 `}</p>
        <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[1.5] text-[33.065px]">{` Đánh giá năng lực (28/05 - 13/07) `}</p>
      </div>
      <Body2 />
    </div>
  );
}

/* Round 2 Body */
function Body5() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.3)] h-[492px] left-[1065.02px] rounded-[41.331px] top-[8083.5px] w-[695.04px]" data-name="Body">
      <div aria-hidden="true" className="absolute border-3 border-solid border-white inset-0 pointer-events-none rounded-[41.331px]" />
    </div>
  );
}

function Round2() {
  return (
    <div className="absolute contents left-[1065px] top-[8091px]">
      <div className="absolute flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold h-[348.608px] justify-center leading-[0] left-[1090.94px] not-italic text-[33.065px] text-white top-[8195.96px] w-[619.584px]">
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
      <div className="absolute contents left-[1065.02px] top-[8083.5px]">
        <Body5 />
      </div>
    </div>
  );
}

/* Round 3 Body */
function Body4() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.3)] h-[720px] left-[134.02px] rounded-[41.331px] top-[8591.5px] w-[747.072px]" data-name="Body">
      <div aria-hidden="true" className="absolute border-3 border-solid border-white inset-0 pointer-events-none rounded-[41.331px]" />
    </div>
  );
}

function Round3() {
  return (
    <div className="absolute contents left-[133.5px] top-[8599px]">
      <Body4 />
      <div className="absolute flex flex-col font-['Special_Elite:Regular',sans-serif] h-[620px] justify-start leading-[0] left-[133.44px] not-italic pt-[90px] text-[33.065px] text-white top-[8635px] w-[709.632px]">
        <p className="leading-[1.5] mb-0">​</p>
        <ul className="list-disc">
          <li className="leading-[1.5] mb-0 ms-[49.5975px]">
            <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal">{`Đội thi tiếp tục `}</span>
            <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold">phát triển và hoàn thiện ý tưởng alpha.</span>
          </li>
          <li className="leading-[1.5] mb-0 ms-[49.5975px]">
            <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal">{`Mỗi đội thi được hướng dẫn bởi `}</span>
            <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold">1 mentor</span>
            <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal">{` là chuyên gia trong ngành `}</span>
            <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold">Tài chính định lượng</span>
            <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal">.</span>
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
function Body() { return (<div className="absolute bg-[rgba(255,255,255,0.5)] h-[181.008px] left-[1065.02px] rounded-[41.331px] top-[8801.55px] w-[663.936px]" data-name="Body"><div aria-hidden="true" className="absolute border-4 border-solid border-white inset-0 pointer-events-none rounded-[41.331px]" /></div>); }
function Group45() { return (<div className="absolute contents left-[1065.02px] top-[8801.55px]"><Body /></div>); }
function Group44() { return (<div className="absolute contents left-[1065.02px] top-[8801.55px]"><Group45 /></div>); }
function Group43() { return (<div className="absolute contents left-[1065.02px] top-[8801.55px]"><Group44 /></div>); }
function Group42() { return (<div className="absolute contents left-[1065.02px] top-[8801.55px]"><Group43 /></div>); }
export function Group41() { return (<div className="absolute contents left-[1065.02px] top-[8783.92px]"><Group42 /><div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[219.56px] justify-center leading-[0] left-[1123.97px] not-italic text-[33.065px] text-center text-white top-[8783.92px] w-[545.088px]"><p className="leading-[1.5]">Đêm chung kết</p></div></div>); }

function Body1() { return (<div className="absolute bg-[rgba(255,255,255,0.5)] h-[182.684px] left-[190.08px] rounded-[41.331px] top-[8224.13px] w-[663.936px]" data-name="Body"><div aria-hidden="true" className="absolute border-4 border-solid border-white inset-0 pointer-events-none rounded-[41.331px]" /></div>); }
function Group50() { return (<div className="absolute contents left-[190.08px] top-[8224.13px]"><Body1 /></div>); }
function Group49() { return (<div className="absolute contents left-[190.08px] top-[8224.13px]"><Group50 /></div>); }
function Group48() { return (<div className="absolute contents left-[190.08px] top-[8224.13px]"><Group49 /></div>); }
function Group47() { return (<div className="absolute contents left-[190.08px] top-[8224.13px]"><Group48 /></div>); }
export function Group46() { return (<div className="absolute contents left-[190.08px] top-[8205.7px]"><Group47 /><div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[219.56px] justify-center leading-[0] left-[249.02px] not-italic text-[33.065px] text-center text-white top-[8205.7px] w-[547.008px]"><p className="leading-[1.5]">Intensive training (online)</p></div></div>); }

function Body3() { return (<div className="absolute bg-[rgba(255,255,255,0.5)] h-[181.008px] left-[1090.56px] rounded-[41.331px] top-[7683.98px] w-[644.352px]" data-name="Body"><div aria-hidden="true" className="absolute border-4 border-solid border-white inset-0 pointer-events-none rounded-[41.331px]" /></div>); }
function Group57() { return (<div className="absolute contents left-[1090.56px] top-[7683.98px]"><Body3 /></div>); }
function Group56() { return (<div className="absolute contents left-[1090.56px] top-[7683.98px]"><Group57 /></div>); }
function Group55() { return (<div className="absolute contents left-[1090.56px] top-[7683.98px]"><Group56 /></div>); }
function Group54() { return (<div className="absolute contents left-[1090.56px] top-[7683.98px]"><Group55 /></div>); }
function Group53() { return (<div className="absolute contents left-[1090.56px] top-[7683.98px]"><Group54 /></div>); }
function Group52() { return (<div className="absolute contents left-[779px] top-[8986.71px]"><div className="absolute flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold h-[442.424px] justify-center leading-[0] left-[779px] not-italic text-[44.087px] text-center text-white top-[8986.71px] w-[244.224px]"><p className="leading-[1.5] mb-0">​</p><p className="leading-[1.5]">​</p></div></div>); }
function Group51() { return (<div className="absolute contents left-[779px] top-[8986.71px]"><Group52 /></div>); }

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
                  <TimelineStar className="left-[910.08px] top-[8281.12px]" gradientId="paint0_radial_1_2150_t" starPath={svgPaths.p3cac3500} />
                  <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[219.56px] justify-center leading-[0] left-[1155.46px] not-italic text-[33.065px] text-center text-white top-[7663px] w-[529.152px]">
                    <p>
                      <span className="leading-[1.5]">INFO SESSION (online)</span>
                      <span className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic">{` hướng dẫn sử dụng nền tảng XNOQuant`}</span>
                    </p>
                  </div>
                </div>
              </div>
              {/* Star at node 3 */}
              <TimelineStar className="left-[910.08px] top-[8830.84px]" gradientId="paint0_radial_1_1957_t" starPath={svgPaths.pc646100} />
            </div>
            <Group67 />
          </div>
          {/* Star at node 1 */}
          <TimelineStar className="left-[910.08px] top-[7726.36px]" gradientId="paint0_radial_1_2020_t" starPath={svgPaths.p3cac3500} />
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
      <Group46 />
      <Group41 />
      <div className="absolute bg-clip-text bg-gradient-to-r flex flex-col font-['Inter:Bold',sans-serif] font-bold from-[#4ade80] h-[120px] justify-center leading-[0] left-[322.94px] not-italic text-[0px] text-[transparent] text-center to-[#3b82f6] top-[7308px] w-[1281.984px]">
        <p className="text-[80px]">
          <span className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[1.5] not-italic text-white">LỘ TRÌNH</span>
          <span className="gradient-text-safe bg-clip-text bg-gradient-to-r font-['Inter:Extra_Bold',sans-serif] font-extrabold from-[#4ade80] leading-[1.5] not-italic text-[transparent] to-[#3b82f6]">{` CUỘC THI`}</span>
        </p>
      </div>
    </section>
  );
}
