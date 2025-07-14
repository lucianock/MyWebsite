import { siteSettings } from "@/staticData/siteSettings";
import Link from "next/link";

const MobileHeader = ({ toggleDrawer }) => {
  return (
    <div className="mob-header">
      <div className="d-flex align-items-center justify-content-between">
        <div className="nav-brand">
          <Link href="/">{siteSettings?.logo}</Link>
        </div>
        <button
          onClick={toggleDrawer}
          className="toggler-menu me-2"
          title="Toggle Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </div>
  );
};

export default MobileHeader;
