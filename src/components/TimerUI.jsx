import React, { useState, useEffect } from "react";

function TimerUI({
  timerActivator,
  whichTimerReset,
  timerTotal,
  count,
  stopCircuit,
  overallTimer,
}) {
  // finding out the fulltime: if there is a count, means there are reps/sets therefore fulltime = timertotal*those reps. If there is no count, then the timer input is in minutes and the minutes need to be multiplied by 60 to get the seconds.
  const ifCount = count ? count : 60;
  const fullTime = timerTotal * ifCount;
  // using the setState for local state adjusting of time
  const [time, setTime] = useState(fullTime);
  useEffect(() => {
    if (overallTimer && time <= 0) {
      // edge scenerio, overall timer for the workout AND the local timer is at 0, stop circiut
      stopCircuit();
    } else if (time <= 0) {
      // if just the local timer is 0, rest of the timers can go on in other components
      setTime(fullTime);
      // reset the times on the timer if there are more sets/reps to go
      whichTimerReset();
    } else if (timerActivator) {
      // now the timer can be implememnted
      const timer1 = setTimeout(() => {
        setTime((time) => {
          return time - 1;
        });
      }, 1000);
      // if the timer is interrupted
      return () => window.clearTimeout(timer1);
    }
  }, [
    time,
    fullTime,
    overallTimer,
    timerActivator,
    whichTimerReset,
    stopCircuit,
  ]);

  // makes longer timers into minutes
  function secondsToMinutesTimer(totalSeconds) {
    let timerMinutes = Math.floor(totalSeconds / 60);
    let timerSeconds = (
      `0` + Math.floor(totalSeconds - timerMinutes * 60)
    ).slice(-2);
    return timerMinutes + ":" + timerSeconds;
  }

  return (
    <>
      <div>this is the timer: {secondsToMinutesTimer(time)}</div>
    </>
  );
}

export default TimerUI;
