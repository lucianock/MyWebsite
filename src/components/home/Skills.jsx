import { progresses } from "@/staticData/home/home";
import { useEffect, useState } from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import VisibilitySensor from "react-visibility-sensor";
import "react-circular-progressbar/dist/styles.css";
import useThemeContext from "@/hooks/useThemeContext";
import { useTranslation } from "@/hooks/useTranslation";

const Skills = () => {
  const [change, setChange] = useState(false);
  const { mode } = useThemeContext();
  const { t } = useTranslation();

  const handleVisibilityChange = () => {
    setChange(true);
  };

  useEffect(() => {
    setChange(false);
  }, []);

  return (
    <div className="skill" data-title="Skills" id="skill">
      <div className="container">
        <div className="section-title">
          <h2 className="title">
            {t('sections.mySkills')}
          </h2>
        </div>

        <div className="skill-item-wrap">
          {progresses?.map((item) => (
            <div className="skill-item progressbar" key={item?.id}>
              <div className="circle" data-percent="60">
                <div
                  className="center-text label"
                  style={{ backgroundImage: `url(${item?.image})` }}
                >
                  <VisibilitySensor onChange={handleVisibilityChange}>
                    {({ isVisible }) => {
                      const percentage = isVisible || change ? item?.value : 0;

                      return (
                        <CircularProgressbarWithChildren
                          strokeWidth={3}
                          styles={{
                            root: {},
                            path: {
                              stroke: mode == "dark" ? "#d79d4b" : "#262626",
                              transition: change
                                ? "stroke-dashoffset 0.5s ease 0s"
                                : "none",
                              transform: "rotate(0.25turn)",
                              transformOrigin: "center center",
                            },
                            trail: {
                              stroke: "#B7B7B7",
                              strokeLinecap: "butt",
                              transform: "rotate(0.25turn)",
                              transformOrigin: "center center",
                            },
                            background: {
                              fill: "#3e98c7",
                            },
                          }}
                          value={percentage}
                        >
                          <div>
                            <span>{item?.value}</span>
                            <p>{t(item?.title)}</p>
                          </div>
                        </CircularProgressbarWithChildren>
                      );
                    }}
                  </VisibilitySensor>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
