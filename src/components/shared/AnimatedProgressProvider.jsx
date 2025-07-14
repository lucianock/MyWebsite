import { useEffect, useState, useRef } from "react";
import { Animate } from "react-move";

const AnimatedProgressProvider = ({
  valueStart = 0,
  valueEnd,
  duration,
  easingFunction,
  repeat,
  children,
}) => {
  const [isAnimated, setIsAnimated] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (repeat) {
      intervalRef.current = setInterval(() => {
        setIsAnimated((prevState) => !prevState);
      }, duration * 1000);

      return () => {
        clearInterval(intervalRef.current);
      };
    } else {
      setIsAnimated(true);
    }
  }, [duration, repeat]);

  return (
    <Animate
      start={() => ({
        value: valueStart,
      })}
      update={() => ({
        value: [isAnimated ? valueEnd : valueStart],
        timing: {
          duration: duration * 1000,
          ease: easingFunction,
        },
      })}
    >
      {({ value }) => children(value)}
    </Animate>
  );
};

export default AnimatedProgressProvider;
