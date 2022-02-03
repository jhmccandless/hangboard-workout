import React, { useEffect, useState } from "react";

function GetCountUI({ count, countStop, eachRepTimer }) {
  const timeoutTimer = 1000 * eachRepTimer;
  const [repsCount, setRepsCount] = useState(count);
  useEffect(() => {
    if (countStop && repsCount > 0) {
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
