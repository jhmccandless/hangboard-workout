import React, { useEffect } from "react";
import { useState } from "react";

function SecondsTimerUI({ timerTime, timerName }) {
  const [timer, setTimer] = useState(timerTime);
  useEffect(() => {}, []);

  return (
    <>
      <div>
        {timerName}: {timer}
      </div>
      {/* <div>
        {timerName} Timer: {(`0` + Math.floor(timer)).slice(-2)}
      </div> */}
      {/* <div>
        {timerName} Timer: {restTimerMinutes}:{restTimerSeconds}
      </div> */}
    </>
  );
}

export default SecondsTimerUI;
