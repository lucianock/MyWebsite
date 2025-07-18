import { useEffect, useState } from "react";

const useMenuActive = (selector) => {
  const [activeMenu, setActiveMenu] = useState("");

  useEffect(() => {
    try {
      const menuItems = document.querySelectorAll(selector);
      const sections = document.querySelectorAll("section[id]");

      const handleScroll = () => {
        let current = "";
        sections.forEach((section) => {
          try {
            const targetSection = document.querySelector(
              `a[href*=${section.getAttribute("id")}]`
            );
            if (targetSection) {
              const sectionTop = section.offsetTop;
              const sectionHeight = section.clientHeight;
              if (scrollY >= sectionTop - 200) {
                current = targetSection.getAttribute("href").slice(1);
              }
            }
          } catch (error) {
            console.warn('Error in menu scroll handler:', error);
          }
        });

        menuItems.forEach((item) => {
          try {
            item.classList.remove("active");
            if (item.getAttribute("href")?.slice(1) === current) {
              item.classList.add("active");
            }
          } catch (error) {
            console.warn('Error updating menu item:', error);
          }
        });
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } catch (error) {
      console.warn('Error setting up menu active hook:', error);
    }
  }, [selector]);

  return activeMenu;
};

export default useMenuActive;
