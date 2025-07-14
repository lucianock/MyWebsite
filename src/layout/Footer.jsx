import useThemeContext from "@/hooks/useThemeContext";
import { siteSettings } from "@/staticData/siteSettings";
import Link from "next/link";

const Footer = () => {
  const { rtl } = useThemeContext();

  return (
    <footer className="site-footer">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div
            className={`col-lg-6 text-center ${
              rtl ? "text-lg-start" : "text-lg-end"
            }`}
          >
            <p className="">
              Copyright &copy; {new Date().getFullYear()} All Right Reserved
            </p>
          </div>
          <div className="col-lg-6">
            <ul
              className={`social-media text-center text-lg-start mt-lg-0 ${
                rtl ? "text-lg-end" : ""
              }`}
            >
              {siteSettings?.footerItems?.map((item) => (
                <li key={item?.id} className="list-inline-item">
                  <Link
                    aria-label={"Visit social media"}
                    target="_blank"
                    title={item?.title}
                    href={item?.url}
                  >
                    {item?.Icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
