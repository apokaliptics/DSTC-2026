import { useState } from "react";
import { eventTabsData } from "../constants/data";
import imgKickOff from "@/assets/event-images/kick-off-img.avif";
import imgInfoSession from "@/assets/event-images/infosession-img.avif";
import imgIntensiveTraining from "@/assets/event-images/intensive-training-img.avif";

export function EventTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = eventTabsData;
  const active = tabs[activeTab];
  const eventImages = [imgKickOff, imgInfoSession, imgIntensiveTraining];
  const activeImage = eventImages[activeTab] ?? eventImages[0];
  return (
    <>
      <div
        className="col-[1/span_4] content-stretch flex flex-col h-[863px] items-start justify-self-stretch relative row-1 self-start shrink-0"
        data-name="Left menu"
      >
        {tabs.map((tab, idx) => {
          const isActive = activeTab === idx;
          return (
            <div
              key={idx}
              className={`content-stretch flex flex-col items-start ${idx > 0 ? "pt-[23.164px]" : ""} relative shrink-0 w-full`}
              data-name={`Button-wrapper-${idx}`}
            >
              <button
                onClick={() => setActiveTab(idx)}
                className={`group ${isActive ? "bg-[rgba(34,95,55,0.8)] scale-100" : "bg-[rgba(74,222,128,0.2)] hover:bg-[rgba(74,222,128,0.3)] hover:scale-[1.02]"} w-[568px] content-stretch cursor-pointer flex flex-col gap-[10.858px] items-start px-[47px] py-[35px] relative rounded-[34.746px] shrink-0 transition-all duration-300 ease-out text-left overflow-hidden`}
                data-name={`Button-${idx}`}
              >
                <div
                  aria-hidden="true"
                  className={`absolute border-solid inset-0 pointer-events-none rounded-[34.746px] transition-all duration-300 ${isActive ? "border-[rgba(74,222,128,0.5)] border-[2px]" : "border-[rgba(255,255,255,0.05)] border-[1.448px] group-hover:border-[rgba(74,222,128,0.3)]"}`}
                />
                <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[34.746px] text-white whitespace-nowrap">
                  <p className="leading-[46.328px]">{tab.num}</p>
                </div>
                <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[34.746px] text-white uppercase whitespace-nowrap">
                  <p className="leading-[46.328px]">{tab.title}</p>
                </div>
                <div
                  className={`flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[23.164px] whitespace-nowrap transition-colors duration-300 ${isActive ? "text-white" : "text-[rgba(255,255,255,0.7)]"}`}
                >
                  <p className="leading-[34.746px]">{tab.subtitle}</p>
                </div>
              </button>
            </div>
          );
        })}
      </div>
      <div
        className="bg-[rgba(69,235,130,0.33)] col-[5/span_7] min-h-[868.6494750976562px] relative rounded-[34.746px] row-1 self-start shrink-0 w-[1189.224px] transition-all duration-500 ease-in-out"
        data-name="b1"
      >
        <div className="content-stretch flex flex-col isolate items-start min-h-[inherit] overflow-clip p-[1.448px] relative rounded-[inherit] size-full">
          <div
            className="h-[452.591px] relative shrink-0 w-full z-[1]"
            data-name="Container"
          >
            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
              <div
                className="absolute h-[93.409px] left-[80.88px] right-[81.27px] top-[53.37px]"
                data-name="Heading 3:margin"
              >
                <div
                  className="absolute content-stretch flex flex-col items-start left-0 right-0 top-0 transition-opacity duration-500 starting:opacity-0 opacity-100"
                  key={`heading-${activeTab}`}
                  data-name="Heading 3"
                >
                  <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[52.119px] text-white w-full">
                    <p className="leading-[57.91px]">{active.heading}</p>
                  </div>
                </div>
              </div>
              <div className="absolute h-[550.082px] left-[43.37px] overflow-clip top-[274.39px] w-[1113.627px]">
                <div
                  className="absolute bottom-[452.95px] h-[94.245px] left-[37.7px] right-[51.75px]"
                  data-name="Container"
                />
              </div>
              <div
                className="absolute bg-[rgba(255,255,255,0.3)] h-[547.197px] left-[29.91px] overflow-hidden rounded-[39.748px] top-[277.27px] w-[1127.091px]"
                data-name="Body"
              >
                <img
                  loading="lazy"
                  alt=""
                  className="absolute inset-0 size-full object-cover"
                  src={activeImage}
                />
                <div
                  aria-hidden="true"
                  className="absolute border-3 border-solid border-white inset-0 pointer-events-none rounded-[39.748px]"
                />
              </div>
              <div
                key={`body-${activeTab}`}
                className="-translate-y-1/2 absolute flex flex-col font-['Inter:Light',sans-serif] font-light justify-center leading-[0] left-[80.88px] not-italic text-[28.955px] text-white top-[182.61px] w-[1024.181px] transition-opacity duration-500 starting:opacity-0 opacity-100 delay-100"
              >
                {active.body.map((line, i) => {
                  const isLastLine = i === active.body.length - 1;
                  return (
                    <p
                      key={i}
                      className={`leading-[47.052px] ${!isLastLine ? "mb-0" : ""}`}
                    >
                      {line}
                      {isLastLine && activeTab === 1 && (
                        <>
                          {" "}
                          <a
                            href="https://www.youtube.com/watch?v=jB-hoSrUiZo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center bg-gradient-to-r from-[#4ade80] to-[#3b82f6] hover:from-[#22c55e] hover:to-[#2563eb] text-white font-['Space_Grotesk:Bold',sans-serif] font-bold px-[18px] py-[4px] rounded-full text-[20px] transition-all duration-300 shadow-[0_0_12px_rgba(74,222,128,0.4)] hover:scale-105 ml-3 align-middle no-underline"
                          >
                            Xem record tại đây
                          </a>
                        </>
                      )}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute border-[1.448px] border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[34.746px] shadow-[0px_36.194px_72.387px_-17.373px_rgba(0,0,0,0.25)]"
        />
      </div>
    </>
  );
}
