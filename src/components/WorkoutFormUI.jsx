import React from "react";

function WorkoutFormUI({}) {
  function handleSubmit(event) {
    event.preventDefault();
    const workoutParams = [];
    for (let i = 0; i < event.target.length; i++) {
      workoutParams.push(event.target[i].value);
    }
  }

  return (
    <>
      <div>This is an the form page</div>
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="hang-time">Hang Time</label>
        <input type="text" defaultValue="7" name="hang-time"></input>
        <br />
        <label htmlFor="down-time">Down Time</label>
        <input type="text" defaultValue="3" name="down-time"></input>
        <br />
        <label htmlFor="rest-time">Rest Time</label>
        <input type="text" defaultValue="3" name="rest-time"></input>
        <br />
        <label htmlFor="rep-number">Reps</label>
        <input type="text" defaultValue="3" name="rep-number"></input>
        <br />
        <label htmlFor="set-number">Sets</label>
        <input type="text" defaultValue="4" name="set-number"></input>
        <br />
        <button type="submit">Lets workout!</button>
      </form>
    </>
  );
}

export default WorkoutFormUI;
