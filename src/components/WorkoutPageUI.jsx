import React from "react";
import HangUp from "../containers/HangUp";
import SetTimer from "../containers/SetTimer";
import RestTimer from "../containers/RestTimer";

function WorkoutPageUI() {
  return (
    <>
      <div>This is the workout page</div>
      <div>
        This is the Reps Box
        <SetTimer />
        <HangUp />
      </div>
      <div>
        Rest Box
        <RestTimer />
      </div>
    </>
  );
}

export default WorkoutPageUI;
