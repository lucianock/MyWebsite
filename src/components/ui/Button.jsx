import { BsArrowRight } from "react-icons/bs";
import { useContext } from "react";
import ThemeContext from "@/context/ThemeContext";
import { trackCVDownload } from "@/components/shared/AnalyticsEvents";

const Button = ({
  text = "DESCARGAR CV",
  btnClassName = "theme-btn",
  arrow = false,
  onClick,
  type = "button",
}) => {
  const { language } = useContext(ThemeContext);

  const handleClick = () => {
    if (onClick) {
      // Si el texto contiene "CV" o "cv", usar la función de descarga con idioma
      if (text.toLowerCase().includes('cv')) {
        const { downloadPdf } = require('@/utils/downloadPdf');
        downloadPdf(language);
        // Trackear la descarga del CV
        trackCVDownload(language);
      } else {
        onClick();
      }
    } else {
      console.log("Button clicked from component!");
    }
  };
  
  return (
    <button className={btnClassName} onClick={handleClick} type={type}>
      {text}
      {arrow && <BsArrowRight className="ms-2" size={25} />}
    </button>
  );
};

export default Button;
