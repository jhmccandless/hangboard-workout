import { connect } from "react-redux";
import WorkoutFormUI from "../components/WorkoutFormUI";
import { setWorkoutParamsAction } from "../action";

function mapStateToProps(state) {
  return {
    hangTime: state.hangTime,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setWorkoutParams: function (data) {
      dispatch(setWorkoutParamsAction(data));
    },
  };
}

const connectedWorkoutFormUI = connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkoutFormUI);

export default connectedWorkoutFormUI;
