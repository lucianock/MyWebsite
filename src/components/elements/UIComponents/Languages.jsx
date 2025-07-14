import useMediaQuery from "@/hooks/useMediaQuery";
import useThemeContext from "@/hooks/useThemeContext";
import { languages } from "@/staticData/elements/elements";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import VisibilitySensor from "react-visibility-sensor";

const Languages = () => {
  const isMobile = useMediaQuery("(max-width: 692px)");
  const { mode } = useThemeContext();
  const [change, setChange] = useState(false);

  const handleVisibilityChange = () => {
    setChange(true);
  };

  useEffect(() => {
    setChange(false);
  }, []);

  return (
    <div className="row section-gap">
      <div className="col-lg-12">
        <div className="section-title">
          <h3 className="subtitle">LANGUAGES</h3>
        </div>
        <ul className="language-skill">
          {languages?.map((item) => (
            <li className="skill-item progressbar" key={item?.id}>
              <div className="circle" data-percent="60">
                <div className="center-text label">
                  <VisibilitySensor onChange={handleVisibilityChange}>
                    {({ isVisible }) => {
                      const percentage = isVisible || change ? item?.value : 0;
                      return (
                        <CircularProgressbarWithChildren
                          strokeWidth={3}
                          styles={{
                            // Customize the root svg element
                            root: {},
                            // Customize the path, i.e. the "completed progress"
                            path: {
                              stroke: mode == "dark" ? "#262626" : "black",
                              // strokeLinecap: 'butt',
                              // Customize transition animation
                              transition: change
                                ? "stroke-dashoffset 0.5s ease 0s"
                                : "none",
                              border: "none",
                              // Rotate the path
                              transform: "rotate(0.25turn)",
                              transformOrigin: "center center",
                            },
                            // Customize the circle behind the path, i.e. the "total progress"
                            trail: {
                              // Trail color
                              stroke: "#d6d6d6",
                              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                              strokeLinecap: "butt",
                              // Rotate the trail
                              transform: "rotate(0.25turn)",
                              transformOrigin: "center center",
                            },
                            text: {
                              fill: "#f88",
                              fontSize: "16px",
                            },
                            background: {
                              fill: "#3e98c7",
                            },
                          }}
                          value={percentage}
                        >
                          <div>
                            <Image
                              src={item?.image}
                              alt="Flag"
                              width={isMobile ? 150 : 220}
                              style={{
                                borderRadius: "50%",
                                padding: isMobile ? "0" : "5px",
                              }}
                              height={isMobile ? 150 : 220}
                              // className="rounded-circle"
                            />
                          </div>
                        </CircularProgressbarWithChildren>
                      );
                    }}
                  </VisibilitySensor>
                </div>
              </div>
              <div className="label">
                <p>
                  {item?.title} <span>{item?.value}</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Languages;
