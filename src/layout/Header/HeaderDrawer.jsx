import useMediaQuery from "@/hooks/useMediaQuery";
import { siteSettings } from "@/staticData/siteSettings";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Drawer from "react-modern-drawer";

const HeaderDrawer = ({ isOpen, toggleDrawer }) => {
  const isMobile = useMediaQuery("(max-width: 1199px)");
  const [currentText, setCurrentText] = useState(0);

  const texts = [
    "Full Stack Developer",
    "I Help Businesses Grow By Developing Websites, Web Apps & Software That Drive Success|"
  ];

  useEffect(() => {
    // Detectar si hay problemas con el DOM (Google Translate)
    const checkDOMIntegrity = () => {
      try {
        const testElement = document.createElement('div');
        document.body.appendChild(testElement);
        document.body.removeChild(testElement);
        return true;
      } catch (error) {
        console.warn('DOM manipulation error detected:', error);
        return false;
      }
    };

    // Solo activar rotación si el DOM está estable
    if (checkDOMIntegrity()) {
      const interval = setInterval(() => {
        setCurrentText((prev) => (prev + 1) % texts.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [texts.length]);

  const router = useRouter();

  let pathSegments = "";
  let firstSegment = "";

  if (router?.pathname.includes("[slug]")) {
    pathSegments = router?.pathname.split("/");
    firstSegment = `/${pathSegments[1]}`;
  }

  let filteredMenus = [];

  if (router?.pathname.includes("[slug]")) {
    filteredMenus = siteSettings?.headerMenus?.filter(
      (item) => !item?.notVisibleRoutes?.includes(firstSegment)
    );
  } else {
    filteredMenus = siteSettings?.headerMenus?.filter(
      (item) => !item?.notVisibleRoutes?.includes(router?.pathname)
    );
  }

  const isHomepage =
    router?.asPath === "/" || router?.asPath.startsWith("/#") ? true : false;

  useEffect(() => {
    if (!isMobile && isOpen) {
      toggleDrawer();
    }
  }, [isMobile]);

  return (
    <div>
      <Drawer
        inst
        customIdSuffix
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className="mobile-drawer"
      >
        <div className="mobile-menu">
          <div className="menu-header">
            <div className="hero-img">
              {/* Imagen removida para evitar errores */}
            </div>
            <h3>I'm Luciano</h3>
            <div className="ah-headline clip">
              <div className="ah-words-wrapper">
                <span>{texts[currentText]}</span>
              </div>
            </div>
            <div onClick={toggleDrawer} className="close-menu"></div>
          </div>
          <div className="menu nav" data-simplebar>
            <ul className="list-unstyled" id="nav-drawer">
              {filteredMenus?.map((menu) => (
                <li key={menu?.id}>
                  <Link
                    onClick={toggleDrawer}
                    href={isHomepage ? menu?.selector : `${menu?.url}`}
                    className="nav-link active"
                    data-section={menu.selector}
                  >
                    {menu?.Icon}
                    {menu?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default HeaderDrawer;
