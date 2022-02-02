import React, { useEffect } from "react";
import { useState } from "react";

function MinutesTimerUI({ timerTime, timerName }) {
  const [timer, setTimer] = useState(timerTime * 60);
  console.log(timer);
  // const [isTimerActive, setIsTimerActive] = useState(false);
  useEffect(() => {}, []);

  let restTimerMinutes = Math.floor(timer / 60);
  let restTimerSeconds = (
    `0` + Math.floor(timer - restTimerMinutes * 60)
  ).slice(-2);

  return (
    <>
      {/* <div>
        {timerName} Timer: {timer}
      </div> */}
      <div>
        {timerName}: {restTimerMinutes}:{restTimerSeconds}
      </div>
    </>
  );
}

export default MinutesTimerUI;
