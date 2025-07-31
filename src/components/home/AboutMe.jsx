import { aboutMe } from "@/staticData/home/home";
import { downloadPdf } from "@/utils/downloadPdf";
import Image from "next/image";
import Button from "../ui/Button";
import FunFacts from "./FunFacts";
import { useTranslation } from "@/hooks/useTranslation";

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <div className="about" data-title="About" id="about">
      <div className="container">
        <div className="section-title">
          <h2 className="title">
            <span className="bottom-border">{t('sections.about')} {t('sections.aboutMe')}</span>
          </h2>
        </div>
        <div className="row align-items-end">
          <div className="col-lg-6">
            <div className="about-thumbnail-area">
              <img
                src={aboutMe?.aboutImageDark}
                className="about-thumb dark img-fluid"
                alt="Luciano - Personal Portfolio"
                style={{ objectFit: 'cover' }}
              />
              <img
                src={aboutMe?.aboutImage}
                className="about-thumb light img-fluid"
                alt="Luciano - Personal Portfolio"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="details">
              <h3 className="name">{t(aboutMe?.name)}</h3>
              <h4 className="designation">
                {t(aboutMe?.designation)} <span className="line"></span>
              </h4>
              <p className="bio">{t(aboutMe?.desc)}</p>
              <ul className="info">
                {aboutMe?.aboutInfo?.map((item, i) => (
                  <li key={i}>
                    {item?.Icon}
                    {t(item?.title)}
                  </li>
                ))}
              </ul>
              <Button arrow text={t(aboutMe?.btnText)} onClick={downloadPdf} />
            </div>
          </div>
        </div>

        <FunFacts />
      </div>
    </div>
  );
};

export default AboutMe;
