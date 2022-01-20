import React from "react";
import HangUp from "../containers/HangUp";
import SetTimer from "../containers/SetTimer";
import RestTimer from "../containers/RestTimer";

function WorkoutPageUI() {
  return (
    <>
      <div>This is the workout page</div>
      <HangUp />
      <SetTimer />
      <RestTimer />
    </>
  );
}

export default WorkoutPageUI;
