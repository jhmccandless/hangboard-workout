const initialState = {
  isHangActive: true,
  isRestActive: false,
  totalTime: null,
  hangTime: 7,
  downTime: 3,
  restTime: 4,
  setsTotal: 4,
  repsTotal: 6,
};

function timers_reducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case "RESET_REST_TIMER":
      return {
        ...state,
        restTime: initialState.restTime,
        isHangActive: true,
        isRestActive: false,
      };
    case "RESET_HANG_TIMER":
      return {
        ...state,
        totalTime: initialState.totalTime,
        isHangActive: false,
        isRestActive: true,
        setsTotal: --state.setsTotal,
      };
    case "STOP_CIRCUIT":
      console.log("circuit stopped");
      return {
        ...state,
        isHangActive: false,
        isRestActive: false,
      };
    case "COUNTDOWN_REPS":
      return {
        ...state,
        repsTotal: --state.repsTotal,
      };
    case "WORKOUT_PARAMS":
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
}

export default timers_reducer;
