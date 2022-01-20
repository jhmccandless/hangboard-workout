import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function RepCountUI({ repsTotal, isHangActive, eachRepTimer }) {
  const timeoutTimer = 1000 * eachRepTimer;
  const [repsCount, setRepsCount] = useState(repsTotal);
  useEffect(() => {
    if (isHangActive && repsCount > 0) {
      setTimeout(() => {
        setRepsCount((repsCount) => repsCount - 1);
      }, timeoutTimer);
    } else {
      setRepsCount(repsTotal);
    }
  }, [repsCount, timeoutTimer, isHangActive, repsTotal]);
  return (
    <>
      <div>This is the reps countdown: {repsCount}</div>
    </>
  );
}

export default RepCountUI;
