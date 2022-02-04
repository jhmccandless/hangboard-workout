import React from "react";
import GetCountUI from "./GetCountUI";
import TimerUI from "./TimerUI";
import RestBox from "../containers/RestBox";
import RepsBox from "../containers/RepsBox";

function SetCompUI({
  setsTotal,
  hangTime,
  downTime,
  restTime,
  repsTotal,
  stopCircuit,
}) {
  return (
    <>
      <h2>The Set Box!</h2>
      <TimerUI
        timerTotal={
          repsTotal * setsTotal * (hangTime + downTime) +
          setsTotal * 60 * restTime
        }
        overallTimer={true}
        timerActivator={true}
        count={1}
        stopCircuit={stopCircuit}
      />
      <GetCountUI count={setsTotal} />
      {/* Total time for entire workout, ending the whole workout, sets count */}
      <RepsBox />
      <RestBox />
    </>
  );
}

export default SetCompUI;
