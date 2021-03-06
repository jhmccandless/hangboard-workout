import React, { useState, useEffect } from "react";
import RepCount from "../../containers/old_containers/RepCount";

function HangUpUI({ hangTime, downTime, isHangActive }) {
  const [onTime, setOnTime] = useState(hangTime);
  const [isOnTimeActive, setIsOnTimeActive] = useState(true);
  const [offTime, setOffTime] = useState(downTime);
  const [isOffTimeActive, setIsOffTimeActive] = useState(false);
  useEffect(() => {
    if (isHangActive) {
      if (offTime <= 0) {
        setIsOffTimeActive(false);
        setIsOnTimeActive(true);
        setOffTime(downTime);
      } else if (onTime <= 0) {
        setIsOnTimeActive(false);
        setIsOffTimeActive(true);
        setOnTime(hangTime);
      } else if (isOffTimeActive) {
        const timer1 = setTimeout(() => {
          setOffTime((offTime) => offTime - 1);
        }, 1000);
        return () => window.clearTimeout(timer1);
      } else if (isOnTimeActive) {
        const timer2 = setTimeout(() => {
          setOnTime((onTime) => onTime - 1);
        }, 1000);
        return () => window.clearTimeout(timer2);
      }
    } else if (!isHangActive) {
      setIsOnTimeActive(true);
      setIsOffTimeActive(false);
      setOffTime(downTime);
      setOnTime(hangTime);
    }
  }, [
    onTime,
    isOnTimeActive,
    offTime,
    isOffTimeActive,
    hangTime,
    downTime,
    isHangActive,
  ]);

  return (
    <>
      {/* <h2>hang on and off timers</h2> */}
      <div>this is the Hang on timer: {onTime}</div>
      <div>this is the down timer: {offTime}</div>
      <RepCount />
    </>
  );
}

export default HangUpUI;
