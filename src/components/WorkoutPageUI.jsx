import React from "react";
import HangUp from "../containers/HangUp";
import SetTimer from "../containers/SetTimer";
import RestTimer from "../containers/RestTimer";
import CounterUI from "./CounterUI";

function WorkoutPageUI({ setsTotal, repsTotal }) {
  return (
    <>
      <div>This is the workout page</div>
      {/* <HangUp />
      <SetTimer />
      <RestTimer /> */}
      <CounterUI name={"Sets"} currentCount={setsTotal} />
      <CounterUI name={"Reps"} currentCount={repsTotal} />
    </>
  );
}

export default WorkoutPageUI;
