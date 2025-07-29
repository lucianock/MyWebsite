import useThemeContext from "@/hooks/useThemeContext";
import { useTranslation } from "@/hooks/useTranslation";
import Link from "next/link";

const BreadcrumbHero = ({ heroData = {} }) => {
  const { heading, breadcrumbs = [], lastBreadcrum } = heroData;
  const { rtl } = useThemeContext();
  const { t } = useTranslation();

  return (
    <div className="page-banner">
      <div className="container">
        <div className="banner-content text-center">
          <h1>{t(heading)}</h1>
          <ul className="breadcrumb justify-content-center">
            {breadcrumbs?.map((breadcrumb, i) => (
              <li
                key={i}
                className="breadcrumb-item"
                style={{ paddingRight: "0" }}
              >
                <Link href={breadcrumb?.url}>
                  {t(breadcrumb?.title)} {i === 0 && !rtl && "/"}
                </Link>
              </li>
            ))}
            <li className="breadcrumb-item">{t(lastBreadcrum?.title)}</li>
          </ul>
        </div>
        <div className="animated-bg-line">
          {Array(5)
            .fill()
            .map((_item, i) => (
              <div key={i} className="line-item"></div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbHero;
