import React, { useEffect } from "react";
import { useState } from "react";

function TimerUI({ timerTime, timerName }) {
  const [timer, setTimer] = useState(timerTime);
  useEffect(() => {}, []);

  // let restTimerMinutes = Math.floor(timer / 60);
  // let restTimerSeconds = (
  //   `0` + Math.floor(timer - restTimerMinutes * 60)
  // ).slice(-2);

  return (
    <>
      <div>
        {timerName} Timer: {timer}
      </div>
      {/* <div>
        {timerName} Timer: {restTimerMinutes}:{restTimerSeconds}
      </div> */}
    </>
  );
}

export default TimerUI;
