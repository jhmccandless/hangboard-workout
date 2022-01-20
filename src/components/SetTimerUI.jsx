import React, { useState, useEffect } from "react";

function SetTimerUI({
  totalTime,
  isHangActive,
  resetHangTimer,
  hangTime,
  downTime,
  repsTotal,
}) {
  const repsTimer = (hangTime + downTime) * repsTotal;
  const [setTime, setSetTime] = useState(repsTimer);
  useEffect(() => {
    if (setTime <= 0) {
      setSetTime(repsTimer);
      resetHangTimer();
    } else if (isHangActive) {
      setTimeout(() => {
        setSetTime((setTime) => {
          return setTime - 1;
        });
      }, 1000);
    }
  }, [setTime, isHangActive, resetHangTimer, repsTimer]);
  return (
    <>
      <h2>This is the set timer</h2>
      <div>this is the timer: {setTime}</div>
    </>
  );
}

export default SetTimerUI;
