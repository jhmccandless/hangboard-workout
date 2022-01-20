const initialState = {
  isHangActive: true,
  isRestActive: false,
  totalTime: null,
  hangTime: 1,
  downTime: 2,
  restTime: 10,
  setsTotal: 3,
  repsTotal: 7,
};

function timers_reducer(state = initialState, action) {
  console.log(action);
  //   console.table(state);
  switch (action.type) {
    case "RESET_REST_TIMER":
      return {
        ...state,
        restTime: initialState.restTime,
        isHangActive: true,
        isRestActive: false,
      };
    case "RESET_HANG_TIMER":
      let setsMinus = state.setsTotal--;
      return {
        ...state,
        totalTime: initialState.totalTime,
        isHangActive: false,
        isRestActive: true,
        setsTotal: state.setsTotal--,
      };
    case "STOP_CIRCUIT":
      console.log("circuit stopped");
      return {
        ...state,
        isHangActive: false,
        isRestActive: false,
      };
    case "COUNTDOWN_REPS":
      let repMinus = state.repsTotal--;
      return {
        ...state,
        repsTotal: state.repsTotal--,
      };
    case "WORKOUT_PARAMS":
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default timers_reducer;
