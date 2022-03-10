import React, { useEffect, useState } from "react";

function GetCountUI({ count, countStop, timerTotal }) {
  const timeoutTimer = 1000 * timerTotal;
  const [repsCount, setRepsCount] = useState(count);
  useEffect(() => {
    if (countStop && repsCount > 0) {
      // timer is active case: countStop is a boolean attached to the which part of the workout is happening. True when this part is going on, false when not. repsCount for that total number of the sets/reps from the parent component
      const timer1 = setTimeout(() => {
        setRepsCount((repsCount) => repsCount - 1);
      }, timeoutTimer);
      return () => window.clearTimeout(timer1);
    } else {
      setRepsCount(count);
    }
  }, [repsCount, timeoutTimer, countStop, count]);
  return <>{<div>This is the reps countdown: {repsCount}</div>}</>;
}

export default GetCountUI;
