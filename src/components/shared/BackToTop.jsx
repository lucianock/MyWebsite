import TopToBottom from "@/hooks/useTopToBottom";
import { useEffect } from "react";
import { GoMoveToTop } from "react-icons/go";

function BackToTop({ className }) {
  useEffect(() => {
    TopToBottom(".back-to-top");
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      onClick={scrollToTop}
      id="scroll-top"
      style={{ cursor: "pointer" }}
      className={`back-to-top ${className || ""}`}
    >
      <GoMoveToTop size={25} />
    </div>
  );
}

export default BackToTop;
