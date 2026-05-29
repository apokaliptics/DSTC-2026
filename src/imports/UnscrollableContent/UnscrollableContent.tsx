import { useState, useEffect } from "react";
import svgPaths from "./svg-cyafdyc53m";
import imgUnscrollableContent from "./imgUnscrollableContent.avif";
import imgLightFlareEffect from "./imgLightFlareEffect.avif";
import imgLightSang2 from "./imgLightSang2.avif";
import imgPhiHanhGia3 from "./imgPhiHanhGia3.avif";
import imgFrame21 from "./imgFrame21.avif";
import imgFrame23 from "./imgFrame23.avif";

import imgSlider1_1 from "../../assets/slider-images/slider1-1.avif";
import imgSlider1_2 from "../../assets/slider-images/slider1-2.avif";
import imgSlider1_3 from "../../assets/slider-images/slider1-3.avif";
import imgSlider1_4 from "../../assets/slider-images/slider1-4.avif";
import imgSlider2_1 from "../../assets/slider-images/slider2-1.avif";
import imgSlider2_2 from "../../assets/slider-images/slider2-2.avif";
import imgSlider2_3 from "../../assets/slider-images/slider2-3.avif";
import imgSlider2_4 from "../../assets/slider-images/slider2-4.avif";
import imgSlider3_1 from "../../assets/slider-images/slider3-1.avif";
import imgSlider3_2 from "../../assets/slider-images/slider3-2.avif";
import imgSlider3_3 from "../../assets/slider-images/slider3-3.avif";
import imgSlider3_4 from "../../assets/slider-images/slider3-4.avif";
import imgSlider3_5 from "../../assets/slider-images/slider3-5.avif";
import imgSlider3_6 from "../../assets/slider-images/slider3-6.avif";
import imgSlider3_7 from "../../assets/slider-images/slider3-7.avif";
import imgSlider3_8 from "../../assets/slider-images/slider3-8.avif";
import imgSlider3_9 from "../../assets/slider-images/slider3-9.avif";

// Extracted section imports
import { HeroSection } from "./sections/HeroSection";
import { AboutSection, LightFlareEffect1 } from "./sections/AboutSection";
import { FAQSection } from "./sections/FAQSection";
import { FooterSection } from "./sections/FooterSection";
import { PrizesSection, CompetitionRulesBadge, Photo, PrizeDetailsFrames } from "./sections/PhotoGalleryAndPrizes";
import { TimelineSection } from "./sections/TimelineSection";
import { Carousel } from "./components/Carousel";
import { EventTabs } from "./components/EventTabs";
import { dotsInset5, dotsInset9 } from "./constants/data";
import { Group82, DivInlineBlock, DiTngThamGia } from "./sections/ParticipantSection";
import { PTextXl1, Group94, DivGrid } from "./sections/FeaturedEventsSection";
import { DivGrid1 } from "./sections/IntroStatsSection";
import { Group95 } from "./sections/OrganizerSection";
import { H2Text5Xl2, Group96 } from "./sections/PartnerSection";
import { Group100 } from "./sections/SideEventsSection";
import { LightFlareEffect2 } from "./sections/MiscComponents";
import { SponsorsSection } from "./sections/SponsorsSection";

export default function UnscrollableContent() {
  return (
    <div className="relative size-full" data-name="unscrollable content">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none hidden">
        <div className="absolute bg-white inset-0" />
        <img loading="lazy" alt="" className="absolute backdrop-blur-[500px] max-w-none object-cover size-full" src={imgUnscrollableContent} />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
      <HeroSection />
      <LightFlareEffect1 />
      <AboutSection />
      <Photo />
      <PrizesSection />
      <PrizeDetailsFrames />
      <CompetitionRulesBadge />
      <div className="absolute top-[417px] flex items-center justify-center right-[2448px] size-[1280px]">
        <div className="flex-none rotate-180">
          <LightFlareEffect2 />
        </div>
      </div>
      <FooterSection />
      <Group82 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[49px] justify-center leading-[0] left-[675px] not-italic text-[24px] text-white top-[6952.5px] w-[601px]">
        <p className="leading-[35.803px]">Hình thức thi: Cá nhân (Vòng 1 - ĐGNL), Nhóm 2 người (Sơ Khảo + Chung Khảo)</p>
      </div>
      <DivInlineBlock />
      <DiTngThamGia />
      <PTextXl1 />
      <Group94 />
      <div id="ve-dstc">
        <DivGrid />
      </div>
      <div id="gioi-thieu-cuoc-thi" className="-translate-y-1/2 absolute bg-clip-text bg-gradient-to-r flex flex-col font-['Inter:Black',sans-serif] font-black from-[#4ade80] justify-center leading-[0] left-[106px] not-italic text-[65.288px] text-[transparent] to-[#3b82f6] top-[4459.5px] whitespace-nowrap">
        <p>
          <span className="leading-[66.508px] text-white">GIỚI THIỆU</span>
          <span className="gradient-text-safe bg-clip-text bg-gradient-to-r from-[#4ade80] leading-[66.508px] text-[transparent] to-[#3b82f6]">{' CUỘC THI'}</span>
        </p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal h-[169px] justify-center leading-[0] left-[106px] text-[26px] text-white top-[4616.5px] w-[799px]">
        <p className="leading-[34px]">Cuộc thi Tìm kiếm tài năng Khoa học dữ liệu (DSTC) là cuộc thi được tổ chức nhằm mục tiêu lan tỏa kiến thức và niềm yêu thích khoa học dữ liệu tới đông đảo các bạn sinh viên; hỗ trợ kết nối cho cộng đồng đam mê khoa học dữ liệu trên khắp cả nước với giải thưởng lên đến hàng trăm triệu đồng.</p>
      </div>
      <DivGrid1 />
      <Group95 />
      <H2Text5Xl2 />
      <Group96 />
      <div className="absolute flex h-[824px] items-center justify-center left-[-136px] top-[1423px] w-[230px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-[230px] relative w-[824px]" data-name="light sáng 2">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img loading="lazy" alt="" className="absolute h-[358.26%] left-0 max-w-none top-0 w-full" src={imgLightSang2} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[753px] items-center justify-center left-[886px] top-[3485px] w-[141px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-[141px] relative w-[753px]" data-name="light sáng 3">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img loading="lazy" alt="" className="absolute h-[534.04%] left-0 max-w-none top-[-75.18%] w-full" src={imgLightSang2} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[802px] items-center justify-center left-[-27px] top-[4382px] w-[230px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-[230px] relative w-[802px]" data-name="light sáng 4">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img loading="lazy" alt="" className="absolute h-[425.22%] left-[-14.34%] max-w-none top-[-64.35%] w-[121.95%]" src={imgLightSang2} />
            </div>
          </div>
        </div>
      </div>

      <div className="astronaut-float-slow absolute flex h-[1115.66px] items-center justify-center left-[-179.34px] top-[10342.82px] w-[1007.12px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="flex-none rotate-[-9.33deg]">
          <div className="h-[989.64px] relative w-[858.018px]" data-name="phi hành gia 3">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img loading="lazy" alt="" className="absolute h-[235.91%] left-[-14.25%] max-w-none top-[-125.65%] w-[272.1%]" src={imgPhiHanhGia3} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[171px] left-[315px] top-[10955px] w-[1312px]" data-name="light sáng 5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img loading="lazy" alt="" className="absolute h-[1011.24%] left-[-16.05%] max-w-none top-[-201.37%] w-[131.77%]" src={imgLightSang2} />
        </div>
      </div>
      <div className="absolute h-[89px] left-[1071px] top-[7595px] w-[683px]" data-name="light sáng 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img loading="lazy" alt="" className="absolute h-[1011.24%] left-[-16.05%] max-w-none top-[-201.37%] w-[131.77%]" src={imgLightSang2} />
        </div>
      </div>
      <div className="absolute h-[89px] left-[190px] top-[8143px] w-[683px]" data-name="light sáng 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img loading="lazy" alt="" className="absolute h-[1011.24%] left-[-16.05%] max-w-none top-[-201.37%] w-[131.77%]" src={imgLightSang2} />
        </div>
      </div>
      <div className="absolute h-[89px] left-[1046px] top-[8713px] w-[683px]" data-name="light sáng 4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img loading="lazy" alt="" className="absolute h-[1011.24%] left-[-16.05%] max-w-none top-[-201.37%] w-[131.77%]" src={imgLightSang2} />
        </div>
      </div>
      <div className="absolute h-[159px] left-[390px] top-[7049px] w-[1220px]" data-name="light sáng 5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img loading="lazy" alt="" className="absolute h-[1011.24%] left-[-16.05%] max-w-none top-[-201.37%] w-[131.77%]" src={imgLightSang2} />
        </div>
      </div>
      <Group100 />
      <div className="astronaut-float absolute h-[948.771px] left-[-223px] top-[6867px] w-[1006.088px]" data-name="Breathe">
        <div className="absolute flex h-[948.771px] items-center justify-center left-0 top-[-110.95px] w-[1006.088px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
          <div className="flex-none rotate-[-6.31deg]">
            <div className="h-[852.993px] relative w-[917.836px]" data-name="phi hành gia 2">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img loading="lazy" alt="" className="absolute h-[252.26%] left-0 max-w-none top-[-152.26%] w-[234.44%]" src={imgPhiHanhGia3} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="astronaut-float-slow absolute h-[1119.35px] left-[1315px] top-[5484px] w-[1133.686px]" data-name="Breathe">
        <div className="absolute flex h-[1119.35px] items-center justify-center left-[-152.6px] top-[-10px] w-[1133.686px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
          <div className="flex-none rotate-[8.99deg]">
            <div className="h-[976.053px] relative w-[993.298px]" data-name="phi hành gia 2">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img loading="lazy" alt="" className="absolute h-[202.24%] left-[-98.72%] max-w-none top-0 w-[198.72%]" src={imgPhiHanhGia3} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="astronaut-float-delay absolute flex h-[773.034px] items-center justify-center left-[1413px] top-[3089px] w-[681.845px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="-scale-y-100 flex-none rotate-[167.48deg]">
          <div className="h-[669.795px] relative w-[549.722px]" data-name="phi hành gia 5">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img loading="lazy" alt="" className="absolute h-[182.02%] left-0 max-w-none top-[-82.02%] w-[221.77%]" src={imgPhiHanhGia3} />
            </div>
          </div>
        </div>
      </div>
      <TimelineSection />
      <SponsorsSection />
      <FAQSection />
      <Carousel
          images={[imgFrame21, imgSlider2_1, imgSlider2_2, imgSlider2_3, imgSlider2_4]}
          position="absolute h-[540px] left-[68px] overflow-clip rounded-[50px] top-[3581px] w-[860px]"
          dotsInsets={dotsInset5}
        />
      <Carousel
          images={[imgSlider3_1, imgSlider3_2, imgSlider3_3, imgSlider3_4, imgSlider3_5, imgSlider3_6, imgSlider3_7, imgSlider3_8, imgSlider3_9]}
          position="absolute h-[540px] left-[960px] overflow-clip rounded-[50px] top-[4516px] w-[900px]"
          dotsInsets={dotsInset9}
        />
      <div id="intensive-training" className="absolute gap-x-[46.327972412109375px] gap-y-[46.327972412109375px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[__961.31px_minmax(0,1fr)] h-[1129px] left-[56px] pt-[121.172px] right-[57px] top-[9498px]" data-name="Section - 6. SỰ KIỆN BÊN LỀ (Bento Stacks)">
        <EventTabs />
      </div>
      <Carousel
          images={[imgFrame23, imgSlider1_1, imgSlider1_2, imgSlider1_3, imgSlider1_4]}
          position="absolute h-[560px] left-[993px] overflow-clip rounded-[50px] top-[1535px] w-[860px]"
          dotsInsets={dotsInset5}
          arrowViewBox="0 0 12.813 25.1278"
          arrowPath={svgPaths.p25ad9900}
          leftArrowOuterInset="-5.07% -11.01%"
          rightArrowOuterInset="-5.07% -11.01%"
        />
      <div className="absolute h-[773.034px] left-[1554px] top-[3145px] w-[681.845px]" data-name="Breathe" />
    </div>
  );
}
