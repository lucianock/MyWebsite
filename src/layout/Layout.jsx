import Footer from "@/layout/Footer";
import MainHeader from "@/layout/Header/MainHeader";
import NextHead from "@/components/shared/NextHead";
import LanguageToggle from "@/components/shared/LanguageToggle";
import GoogleAnalytics from "@/components/shared/GoogleAnalytics";
import { useRef } from "react";

const Layout = ({ className = "", children }) => {
  const rightContainerRef = useRef(null);

  return (
    <>
      <NextHead />
      <GoogleAnalytics />
      <LanguageToggle />
      <main>
        <MainHeader rightContainerRef={rightContainerRef} />
        <div className={`main ${className}`} ref={rightContainerRef}>
          {children}
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Layout;
