import { connect } from "react-redux";
import WorkoutPageUI from "../components/WorkoutPageUI";

function mapStateToProps(state) {
  return {
    setsTotal: state.setsTotal,
    repsTotal: state.repsTotal,
    restTime: state.restTime,
    hangTime: state.hangTime,
    downTime: state.downTime,
  };
}

function mapDispatchToProps() {
  return {};
}

const connectedWorkoutPageUI = connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkoutPageUI);

export default connectedWorkoutPageUI;
