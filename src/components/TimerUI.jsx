import React, { useState, useEffect } from "react";

function SetTimerUI({
  totalTime,
  isHangActive,
  resetHangTimer,
  timer1,
  timer2,
  repsTotal,
}) {
  const repsTimer = (timer1 + timer2) * repsTotal;
  const [setTime, setSetTime] = useState(repsTimer);
  useEffect(() => {
    if (setTime <= 0) {
      setSetTime(repsTimer);
      resetHangTimer();
    } else if (isHangActive) {
      const timer1 = setTimeout(() => {
        setSetTime((setTime) => {
          return setTime - 1;
        });
      }, 1000);
      return () => window.clearTimeout(timer1);
    }
  }, [setTime, isHangActive, resetHangTimer, repsTimer]);
  return (
    <>
      {/* <h2>This is the set timer</h2> */}
      <div>this is the timer: {setTime}</div>
    </>
  );
}

export default SetTimerUI;
