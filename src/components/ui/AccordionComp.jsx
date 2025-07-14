import React from "react";
import clsx from "clsx";
import useAccordion from "@/hooks/useAccordion";
import { HiOutlinePlus } from "react-icons/hi";
import useThemeContext from "@/hooks/useThemeContext";

function AccordionComp({ title, children }) {
  const [isOpen, toggle, refContentBody, height] = useAccordion();
  const { mode } = useThemeContext();

  return (
    <section className={clsx("accordion-item", isOpen ? "accordion_open" : "")}>
      <div
        style={{ cursor: "pointer" }}
        className="accordion-header d-flex align-items-center justify-content-between"
        onClick={toggle}
      >
        <div className="accordion-header">{title}</div>
        <span className="me-3 accordion__header-icon">
          <HiOutlinePlus
            color={mode == "dark" && "#D79D4B"}
            size={25}
            opacity={0.8}
          />
        </span>
      </div>
      <div className="accordion__content" style={{ height }}>
        <div ref={refContentBody} className="accordion-body">
          {children}
        </div>
      </div>
    </section>
  );
}

export default AccordionComp;
