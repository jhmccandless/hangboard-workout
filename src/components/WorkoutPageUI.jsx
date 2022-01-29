import React from "react";
import HangUp from "../containers/HangUp";
import SetTimer from "../containers/SetTimer";
import RestTimer from "../containers/RestTimer";
import CounterUI from "./CounterUI";
import TimerUI from "./TimerUI";

function WorkoutPageUI({ setsTotal, repsTotal, restTime, hangTime, downTime }) {
  return (
    <>
      <div>This is the workout page</div>
      {/* <HangUp />
      <SetTimer />
      <RestTimer /> */}
      <TimerUI timerName={"Hang Timer"} timerTime={hangTime} />
      <TimerUI timerName={"Down Timer"} timerTime={downTime} />
      <TimerUI timerName={"Rest Timer"} timerTime={restTime} />
      <CounterUI name={"Sets"} currentCount={setsTotal} />
      <CounterUI name={"Reps"} currentCount={repsTotal} />
    </>
  );
}

export default WorkoutPageUI;
