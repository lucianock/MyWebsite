import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { useEffect, useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";

const FunFactItem = ({ Svg, startCount, endCount, title }) => {
  const [_change, setChange] = useState(false);
  const [counterStarted, setCounterStarted] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setChange(false);
    setCounterStarted(false);
  }, []);

  return (
    <div className="column">
      <div className="funfacts-item">
        <div className="icon">{Svg}</div>
        <CountUp start={startCount} end={endCount} duration={5} redraw={true}>
          {({ countUpRef, start }) => (
            <VisibilitySensor
              onChange={(visible) => {
                if (visible && !counterStarted) {
                  setCounterStarted(true);
                  start();
                  setChange(true);
                }
              }}
              delayedCall
            >
              <h5 className="counter" ref={countUpRef} />
            </VisibilitySensor>
          )}
        </CountUp>
        <p>{t(title)}</p>
      </div>
    </div>
  );
};

export default FunFactItem;
