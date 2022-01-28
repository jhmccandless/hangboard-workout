import React from "react";

function CounterUI({ currentCount, name }) {
  return (
    <>
      <div>
        this is a {name} counter: {currentCount}
      </div>
    </>
  );
}

export default CounterUI;
