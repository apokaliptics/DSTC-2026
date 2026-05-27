import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../../../app/components/ui/accordion";
import { svgPaths } from "../constants/assets";
import { faqItems } from "../constants/data";

function FaqSvgIcon() {
  return (
    <div className="relative shrink-0 size-[50.518px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50.5179 50.5179">
        <g id="SVG">
          <path d={svgPaths.pb8db280} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="4.20982" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return <div className="h-[59px] relative shrink-0 w-full" data-name="Container" />;
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[101.036px] text-center text-white whitespace-nowrap">
        <p className="leading-[101.036px]">FAQ</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[33.679px] items-start relative shrink-0 w-full" data-name="Container">
      <Container9 />
      <Heading />
    </div>
  );
}

export function FAQSection() {
  return (
    <section id="faq" className="absolute content-stretch flex flex-col gap-[134.714px] h-[1307px] items-start left-[8px] max-w-[1885.9998779296875px] px-[33.679px] top-[16600px] w-[1886px]" data-name="Section - 7. FAQ (Bento Accordions Concept)">
      <Container8 />
      <Accordion type="multiple" className="content-stretch flex flex-col gap-[27px] items-start relative shrink-0 w-[1821px]">
        {faqItems.map((item) => (
          <AccordionItem key={item.id} value={item.id} className="border-none bg-[rgba(6,19,58,0.3)] relative rounded-[33.679px] shrink-0 w-full overflow-hidden" data-name={`Details - Item ${item.id.split('-')[1]}`}>
            <AccordionTrigger className="hover:no-underline [&[data-state=open]>svg]:rotate-180 p-0 m-0 w-full">
              <div className="content-stretch flex flex-col items-start overflow-clip p-[2.105px] relative rounded-[inherit] size-full">
                <div className="h-[126px] relative shrink-0 w-full" data-name="Slot → Summary">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between p-[67.357px] relative size-full">
                      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[50.518px] text-left text-white whitespace-nowrap">
                        <p className="leading-[67.357px]">{item.question}</p>
                      </div>
                      <div className="content-stretch cursor-pointer flex flex-col items-start relative shrink-0" role="button" tabIndex={0} data-name="Container">
                        <FaqSvgIcon />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-white px-[67.357px] pb-[67.357px] text-[30px] font-['Space_Grotesk:Regular',sans-serif] opacity-80 leading-relaxed">
              {item.answer}
            </AccordionContent>
            <div aria-hidden="true" className="absolute border-[2.105px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[33.679px]" />
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
