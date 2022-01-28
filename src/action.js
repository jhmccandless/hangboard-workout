export function resetRestTimerAction(data) {
  return {
    type: "RESET_REST_TIMER",
    data,
  };
}
export function resetHangTimerAction() {
  return {
    type: "RESET_HANG_TIMER",
  };
}

export function stopCircuitAction() {
  return {
    type: "STOP_CIRCUIT",
  };
}

export function countdownRepsAction() {
  return {
    type: "COUNTDOWN_REPS",
  };
}

export function setWorkoutParamsAction(data) {
  return {
    type: "WORKOUT_PARAMS",
    data,
  };
}
