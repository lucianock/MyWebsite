import { siteSettings } from "@/staticData/siteSettings";
import { createContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(siteSettings?.themeData?.mode);
  const [rtl, setRtl] = useState(
    siteSettings?.themeData?.dir === "rtl" ? true : false
  );

  return (
    <ThemeContext.Provider value={{ mode, setMode, rtl, setRtl }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
