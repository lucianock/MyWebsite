import { expFirstCol, expSecondCol } from "@/staticData/home/home";
import EducationIcon from "../icons/home/EducationIcon";
import ExperimentIcon from "../icons/home/ExperimentIcon";
import { useTranslation } from "@/hooks/useTranslation";

function ExperienceCol({ range, title, description }) {
  const { t } = useTranslation();
  
  return (
    <div className="timeline-item">
      <div className="years-range">{range}</div>
      <h3 className="title">{t(title)}</h3>
      <p>{t(description)}</p>
    </div>
  );
}

const Resume = () => {
  const { t } = useTranslation();

  return (
    <div className="resume" data-title="Resume" id="resume">
      <div className="container">
        <div className="section-title">
          <h2 className="title">
            <span>{t('sections.resume')}</span>
          </h2>
        </div>
        <div className="row resume-content-area">
          <div className="col-sm-6">
            <div className="timeline-box odd">
              <div className="icon-box text-center">
                <EducationIcon viewBox="0 0 37 37" />
                <div className="box-title">{t('sections.education')}</div>
              </div>
              <div className="timeline">
                <div className="timeline-divider"></div>
                {expFirstCol?.map((item) => (
                  <ExperienceCol key={item?.id} {...item} />
                ))}
              </div>
            </div>
          </div>
          <div className="center-line"></div>
          <div className="col-sm-6">
            <div className="timeline-box even">
              <div className="icon-box text-center order-lg-last">
                <ExperimentIcon viewBox="0 0 31 35" />
                <div className="box-title">{t('sections.projects')}</div>
              </div>
              <div className="timeline order-lg-first">
                <div className="timeline-divider"></div>
                {expSecondCol?.map((item) => (
                  <ExperienceCol key={item?.id} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
