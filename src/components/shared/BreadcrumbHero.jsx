import useThemeContext from "@/hooks/useThemeContext";
import Link from "next/link";

const BreadcrumbHero = ({ heroData = {} }) => {
  const { heading, breadcrumbs = [], lastBreadcrum } = heroData;
  const { rtl } = useThemeContext();
  return (
    <div className="page-banner">
      <div className="container">
        <div className="banner-content text-center">
          <h1>{heading}</h1>
          <ul className="breadcrumb justify-content-center">
            {breadcrumbs?.map((breadcrumb, i) => (
              <li
                key={i}
                className="breadcrumb-item"
                style={{ paddingRight: "0" }}
              >
                <Link href={breadcrumb?.url}>
                  {breadcrumb?.title} {i === 0 && !rtl && "/"}
                </Link>
              </li>
            ))}
            <li className="breadcrumb-item">{lastBreadcrum?.title}</li>
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
