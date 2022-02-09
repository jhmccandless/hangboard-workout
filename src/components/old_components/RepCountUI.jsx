import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import GetCountUI from "../GetCountUI";

function RepCountUI({ repsTotal, isHangActive, eachRepTimer }) {
  const timeoutTimer = 1000 * eachRepTimer;
  const [repsCount, setRepsCount] = useState(repsTotal);
  useEffect(() => {
    if (isHangActive && repsCount > 0) {
      const timer1 = setTimeout(() => {
        setRepsCount((repsCount) => repsCount - 1);
      }, timeoutTimer);
      return () => window.clearTimeout(timer1);
    } else {
      setRepsCount(repsTotal);
    }
  }, [repsCount, timeoutTimer, isHangActive, repsTotal]);
  return (
    <>
      {/* <div>This is the reps countdown: {repsCount}</div> */}
      <GetCountUI whichCount={"Reps"} countNumber={repsCount} />
    </>
  );
}

export default RepCountUI;
