import React from "react";
import TwoTimersUI from "./TwoTimersUI";
import RepCount from "../containers/RepCount";
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
      <h2>This is the Reps Box</h2>
      <TwoTimersUI
        whichTimer1={hangTime}
        whichTimer2={downTime}
        timerStop={isHangActive}
        whichCountdown={countdownReps}
      />
      <GetCountUI
        count={repsTotal}
        countStop={isHangActive}
        eachRepTimer={downTime + hangTime}
      />
      <TimerUI
        timerTotal={downTime + hangTime}
        count={repsTotal}
        timerActivator={isHangActive}
        whichTimerReset={resetHangTimer}
      />

      {/* 
        >>>>>>>>>timer
         */}
    </>
  );
}

export default RepsBoxUI;
