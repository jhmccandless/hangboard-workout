import React from "react";
import TwoTimersUI from "./TwoTimersUI";
import RepCount from "../containers/RepCount";
import GetCountUI from "./GetCountUI";

function RepsBoxUI({
  downTime,
  hangTime,
  isHangActive,
  repsTotal,
  totalTime,
  countdownReps,
}) {
  console.log(downTime);
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

      {/* 
        >>>>>>>>>timer
         */}
    </>
  );
}

export default RepsBoxUI;
