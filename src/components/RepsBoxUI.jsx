import React from "react";
import TwoTimersUI from "./TwoTimersUI";
import GetCountUI from "./GetCountUI";
import TimerUI from "./TimerUI";

function RepsBoxUI({
  downTime,
  hangTime,
  isHangActive,
  repsTotal,
  countdownReps,
  resetHangTimer,
}) {
  return (
    <>
      <h3>This is the Reps Box</h3>
      <TwoTimersUI
        whichTimer1={hangTime}
        whichTimer2={downTime}
        timerStop={isHangActive}
        whichCountdown={countdownReps}
      />
      <GetCountUI
        count={repsTotal}
        countStop={isHangActive}
        timerTotal={downTime + hangTime}
      />
      <TimerUI
        timerTotal={downTime + hangTime}
        count={repsTotal}
        timerActivator={isHangActive}
        whichTimerReset={resetHangTimer}
      />
    </>
  );
}

export default RepsBoxUI;
