import React, { useState, useEffect } from "react";

function TimerUI({ timerActivator, whichTimerReset, timerTotal, count }) {
  // console.log(whichTimerReset);
  const repsTimer = timerTotal * count;
  const [setTime, setSetTime] = useState(repsTimer);
  useEffect(() => {
    if (setTime <= 0) {
      setSetTime(repsTimer);
      whichTimerReset();
    } else if (timerActivator) {
      const timer1 = setTimeout(() => {
        setSetTime((setTime) => {
          return setTime - 1;
        });
      }, 1000);
      return () => window.clearTimeout(timer1);
    }
  }, [setTime, timerActivator, whichTimerReset, repsTimer]);
  return (
    <>
      {/* <h2>This is the set timer</h2> */}
      <div>this is the timer: {setTime}</div>
    </>
  );
}

export default TimerUI;
