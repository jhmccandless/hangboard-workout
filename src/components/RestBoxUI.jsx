import React from "react";
import TimerUI from "./TimerUI";

function RestBoxUI({ restTime, isRestActive, resetRestTimer }) {
  return (
    <>
      <h3>Rest Box</h3>
      <TimerUI
        timerTotal={restTime}
        timerActivator={isRestActive}
        whichTimerReset={resetRestTimer}
      />
    </>
  );
}

export default RestBoxUI;
