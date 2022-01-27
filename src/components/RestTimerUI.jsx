import React, { useEffect, useState } from "react";

function RestTimerUI({
  restTime,
  isRestActive,
  setsTotal,
  resetRestTimer,
  stopCircuit,
}) {
  const [restingTime, setRestingTime] = useState(restTime * 60);

  useEffect(() => {
    if (setsTotal <= 0) {
      stopCircuit();
    } else if (restingTime <= 0) {
      setRestingTime(restTime);
      resetRestTimer();
    } else if (isRestActive) {
      const timer1 = setTimeout(() => {
        setRestingTime((restingTime) => {
          return restingTime - 1;
        });
        return () => window.clearTimeout(timer1);
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

  let restTimerMinutes = Math.floor(restingTime / 60);
  let restTimerSeconds = (
    `0` + Math.floor(restingTime - restTimerMinutes * 60)
  ).slice(-2);

  return (
    <>
      <h2>this is the rest timer</h2>
      <div>
        this is the rest timer: {`${restTimerMinutes}:${restTimerSeconds}`}{" "}
      </div>
      {/* <div>this is the TRIAL Minutes: {restTimerMinutes} </div>
      <div>this is the TRIAL seconds: {restTimerSeconds} </div> */}
      <div>number of sets left: {setsTotal} </div>
    </>
  );
}

export default RestTimerUI;
