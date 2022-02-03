import React from "react";
import SetTimer from "../containers/SetTimer";
import RestTimer from "../containers/RestTimer";
import RepsBox from "../containers/RepsBox";

function WorkoutPageUI({}) {
  return (
    <>
      <RepsBox />
      <br />
      <br />
      <br />
      <br />
      <div>This is the workout page</div>
      <div>
        This is the Reps Box
        <SetTimer />
      </div>
      <div>
        Rest Box
        <RestTimer />
      </div>
    </>
  );
}

export default WorkoutPageUI;
