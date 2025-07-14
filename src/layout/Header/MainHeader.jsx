import { useState } from "react";
import Header from "./Header";
import MobileHeader from "./MobileHeader";
import HeaderDrawer from "./HeaderDrawer";
import useMenuActive from "@/hooks/useMenuActive";

const MainHeader = ({ rightContainerRef = null }) => {
  const [isOpen, setIsOpen] = useState(false);

  const activeMenuItem = useMenuActive(
    rightContainerRef,
    ".list-unstyled li a"
  );

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <Header activeMenuItem={activeMenuItem} />
      <MobileHeader toggleDrawer={toggleDrawer} />
      <HeaderDrawer isOpen={isOpen} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default MainHeader;
