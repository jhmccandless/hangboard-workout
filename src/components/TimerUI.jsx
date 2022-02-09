import React, { useState, useEffect } from "react";

function TimerUI({
  timerActivator,
  whichTimerReset,
  timerTotal,
  count,
  stopCircuit,
  overallTimer,
}) {
  const ifCount = count ? count : 60;
  const fullTime = timerTotal * ifCount;
  const [time, setTime] = useState(fullTime);
  useEffect(() => {
    if (overallTimer && time <= 0) {
      stopCircuit();
    } else if (time <= 0) {
      setTime(fullTime);
      whichTimerReset();
    } else if (timerActivator) {
      const timer1 = setTimeout(() => {
        setTime((time) => {
          return time - 1;
        });
      }, 1000);
      return () => window.clearTimeout(timer1);
    }
  }, [time, timerActivator, whichTimerReset, fullTime]);
  return (
    <>
      <div>this is the timer: {time}</div>
    </>
  );
}

export default TimerUI;
