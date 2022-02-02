import React from "react";
import MinutesTimerUI from "./MinutesTimerUI";

function CounterUI({ currentCount, name, whichTimers }) {
  console.log(whichTimers);
  return (
    <>
      <div>
        this is a {name} counter: {currentCount}
      </div>
    </>
  );
}

export default CounterUI;
