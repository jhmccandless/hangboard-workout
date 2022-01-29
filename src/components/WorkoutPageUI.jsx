import React from "react";
import HangUp from "../containers/HangUp";
import SetTimer from "../containers/SetTimer";
import RestTimer from "../containers/RestTimer";
import CounterUI from "./CounterUI";
import SecondsTimerUI from "./SecondsTimerUI";
import MinutesTimerUI from "./MinutesTimerUI";

function WorkoutPageUI({ setsTotal, repsTotal, restTime, hangTime, downTime }) {
  return (
    <>
      <div>This is the workout page</div>
      {/* <HangUp />
      <SetTimer />
      <RestTimer /> */}
      <SecondsTimerUI timerName={"Hang Timer"} timerTime={hangTime} />
      <SecondsTimerUI timerName={"Down Timer"} timerTime={downTime} />
      <CounterUI name={"Reps"} currentCount={repsTotal} />
      <MinutesTimerUI timerName={"Rest Timer"} timerTime={restTime} />
      <CounterUI name={"Sets"} currentCount={setsTotal} />
    </>
  );
}

export default WorkoutPageUI;
