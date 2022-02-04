import React from "react";
import GetCountUI from "./GetCountUI";
import TimerUI from "./TimerUI";

function RestBoxUI({
  restTime,
  totalTime,
  isRestActive,
  isHangActive,
  setsTotal,
  resetRestTimer,
}) {
  return (
    <>
      <h3>Rest Box</h3>
      <TimerUI
        timerTotal={restTime}
        // count={setsTotal}
        timerActivator={isRestActive}
        whichTimerReset={resetRestTimer}
      />
      {/* <GetCountUI
        count={setsTotal}
        //   countStop={}
        //   timerTotal={}
      /> */}
    </>
  );
}

export default RestBoxUI;
