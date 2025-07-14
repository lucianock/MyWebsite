import useThemeContext from "@/hooks/useThemeContext";
import Image from "next/image";
import { useEffect, useState } from "react";
import { RiSettings4Fill } from "react-icons/ri";

// import darkImage from "../../../public/assets/images/home-dark.png";
// import lightImage from "../../../public/assets/images/home-light.png";
// import RTLImage from "../../../public/assets/images/home-rtl.png";

const StyleSwitcher = () => {
  const [switchActive, setSwitchActive] = useState(false);
  const { mode, setMode, rtl, setRtl } = useThemeContext();

  useEffect(() => {
    let dir = rtl == true ? "rtl" : "ltr";
    document.querySelector("html").setAttribute("dir", dir);
  }, [rtl]);

  useEffect(() => {
    let modeClass = mode == "dark" ? "dark" : "light";
    document.querySelector("body").setAttribute("class", modeClass);
  }, [mode]);

  return (
    <div
      className={`style-switcher ${switchActive ? "active" : ""}`}
      onClick={() => setSwitchActive(!switchActive)}
    >
      <div className="toggle-btn">
        <RiSettings4Fill size={27} className="fa-spin" />
      </div>
      <div className="style-back text-center">
        Dark - Light
        <div className="d-flex mt-2">
          <div className="variant" onClick={() => setMode("dark")}>
            <Image
              // src={darkImage?.src}
              width={150}
              height={150}
              className="img-fluid"
              alt="Rakibul Dark Variant"
            />
          </div>
          <div className="variant" onClick={() => setMode("light")}>
            <Image
              // src={lightImage?.src}
              width={150}
              height={150}
              className="img-fluid"
              alt="Rakibul Dark Variant"
            />
          </div>
        </div>
        <br />
        LTR - RTL
        <div className="d-flex mt-2">
          <div
            className="variant"
            onClick={() => {
              setRtl(false);
              // storage.save("rtl", false);
            }}
          >
            <Image
              // src={lightImage?.src}
              width={150}
              height={150}
              className="img-fluid"
              alt="Rakibul LTR"
            />
          </div>
          <div
            className="variant"
            onClick={() => {
              setRtl(true);
              // storage.save("rtl", true);
            }}
          >
            <Image
              // src={RTLImage?.src}
              width={150}
              height={150}
              className="img-fluid"
              alt="Rakibul RTL"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyleSwitcher;
