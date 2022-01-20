import React, { useEffect, useState } from "react";

function RestTimerUI({
  restTime,
  isRestActive,
  setsTotal,
  resetRestTimer,
  stopCircuit,
}) {
  const [restingTime, setRestingTime] = useState(restTime);
  useEffect(() => {
    if (setsTotal <= 0) {
      stopCircuit();
    } else if (restingTime <= 0) {
      setRestingTime(restTime);
      resetRestTimer();
    } else if (isRestActive) {
      setTimeout(() => {
        setRestingTime((restingTime) => {
          return restingTime - 1;
        });
      }, 1000);
    }
  }, [
    restingTime,
    restTime,
    isRestActive,
    resetRestTimer,
    setsTotal,
    stopCircuit,
  ]);
  return (
    <>
      <h2>this is the rest timer</h2>
      <div>this is the rest timer: {restingTime} </div>
      <div>number of sets left: {setsTotal} </div>
    </>
  );
}

export default RestTimerUI;
