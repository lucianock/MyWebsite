import AccordionComp from "@/components/ui/AccordionComp";
import { accordionData } from "@/staticData/elements/elements";

const Accordion = () => {
  return (
    <div className="col-lg-6">
      <div className="section-title">
        <h3 className="subtitle">ACCORDION</h3>
      </div>
      <div className="accordion" id="el_accordion">
        {accordionData?.map((accordion) => (
          <AccordionComp title={accordion?.headerText} key={accordion?.id}>
            {accordion?.bodyText}
          </AccordionComp>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
