import React from "react";
import { useNavigate } from "react-router-dom";

function WorkoutFormUI({ setWorkoutParams, hangTime }) {
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    const workoutParams = {};
    for (let i = 0; i < event.target.length - 1; i++) {
      workoutParams[event.target[i].name] = Number(event.target[i].value);
    }
    setWorkoutParams(workoutParams);
    navigate("/current_workout");
  }

  return (
    <>
      <div>This is an the form page</div>
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="hangTime">Hang Time (s)</label>
        <input type="text" defaultValue="3" name="hangTime"></input>
        <br />
        <label htmlFor="downTime">Down Time (s)</label>
        <input type="text" defaultValue="2" name="downTime"></input>
        <br />
        <label htmlFor="restTime">Rest Time (min)</label>
        <input type="text" defaultValue="1" name="restTime"></input>
        <br />
        <label htmlFor="repsTotal">Reps</label>
        <input type="text" defaultValue="2" name="repsTotal"></input>
        <br />
        <label htmlFor="setsTotal">Sets</label>
        <input type="text" defaultValue="2" name="setsTotal"></input>
        <br />
        <button type="submit">Lets workout!</button>
      </form>
    </>
  );
}

export default WorkoutFormUI;
