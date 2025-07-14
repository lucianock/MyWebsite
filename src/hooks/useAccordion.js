import { useEffect, useRef, useState } from "react";

import useToggle from "./useToggle";

function useAccordion() {
  const [isOpen, toggle] = useToggle();
  const refContentBody = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    function updateHeight() {
      if (isOpen) {
        const newHeight = refContentBody.current.scrollHeight;
        if (newHeight !== height) {
          setHeight(newHeight);
        }
      }
    }
    // Add event listener
    window.addEventListener("resize", updateHeight);
    // Call handler right away so state gets updated with initial window size
    updateHeight();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  useEffect(() => {
    if (refContentBody.current) {
      setHeight(refContentBody.current.scrollHeight);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      const newHeight = refContentBody.current.scrollHeight;
      if (newHeight !== height) {
        setHeight(newHeight);
      }
    }
  }, [isOpen]);

  const computedHeight = isOpen ? height : 0;
  return [isOpen, toggle, refContentBody, computedHeight];
}

export default useAccordion;
