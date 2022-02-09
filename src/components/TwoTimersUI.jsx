import React, { useState, useEffect } from "react";

function TwoTimersUI({ whichTimer1, whichTimer2, timerStop }) {
  const [timer1, setTimer1] = useState(whichTimer1);
  const [isTimer1Active, setIsTimer1Active] = useState(true);
  const [timer2, setTimer2] = useState(whichTimer2);
  const [isTimer2Active, setIsTimer2Active] = useState(false);
  useEffect(() => {
    if (timerStop) {
      if (timer2 <= 0) {
        setIsTimer2Active(false);
        setIsTimer1Active(true);
        setTimer2(whichTimer2);
      } else if (timer1 <= 0) {
        setIsTimer1Active(false);
        setIsTimer2Active(true);
        setTimer1(whichTimer1);
      } else if (isTimer2Active) {
        const timer1 = setTimeout(() => {
          setTimer2((timer2) => timer2 - 1);
        }, 1000);
        return () => window.clearTimeout(timer1);
      } else if (isTimer1Active) {
        const timer2 = setTimeout(() => {
          setTimer1((timer1) => timer1 - 1);
        }, 1000);
        return () => window.clearTimeout(timer2);
      }
    } else if (!timerStop) {
      setIsTimer1Active(true);
      setIsTimer2Active(false);
      setTimer2(whichTimer2);
      setTimer1(whichTimer1);
    }
  }, [
    timer1,
    isTimer1Active,
    timer2,
    isTimer2Active,
    whichTimer1,
    whichTimer2,
    timerStop,
  ]);

  return (
    <>
      <div>this is the Hang on timer: {timer1}</div>
      <div>this is the down timer: {timer2}</div>
    </>
  );
}

export default TwoTimersUI;
