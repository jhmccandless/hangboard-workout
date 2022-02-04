import React from "react";
import SetTimer from "../containers/SetTimer";
import RestTimer from "../containers/RestTimer";
import RepsBox from "../containers/RepsBox";
import RestBox from "../containers/RestBox";
import SetComp from "../containers/SetComp";

function WorkoutPageUI({}) {
  return (
    <>
      {/* <RepsBox />
      <RestBox />
      <br />
      <br />
      <br />
      <br /> */}
      <SetComp />
      {/* <div>
        Rest Box
        <RestTimer />
      </div> */}
    </>
  );
}

export default WorkoutPageUI;
