import { siteSettings } from "@/staticData/siteSettings";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = ({ activeMenuItem }) => {
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

  return (
    <header className="site-header navbar-collapse-toggle" id="navbar">
      <div className="nav-brand">
        <Link href="/">{siteSettings?.logo}</Link>
      </div>
      <div className="menu">
        <ul className="list-unstyled" id="nav">
          {filteredMenus?.map((menu) => (
            <li key={menu?.id}>
              <Link
                href={isHomepage ? menu?.selector : `${menu?.url}`}
                className={
                  activeMenuItem === menu.selector
                    ? "nav-link active"
                    : "nav-link"
                }
                data-section={menu.selector}
              >
                {menu?.Icon}
                {menu?.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="contact-btn">
        <Link
          href={isHomepage ? siteSettings?.headerBottom?.url : "/#contact"}
          className="stretched-link"
        >
          {siteSettings?.headerBottom?.title}
        </Link>
      </div>
    </header>
  );
};

export default Header;
