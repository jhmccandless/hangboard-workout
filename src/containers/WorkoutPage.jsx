import { connect } from "react-redux";
import WorkoutPageUI from "../components/WorkoutPageUI";

function mapStateToProps(state) {
  console.log(state.setsTotal);
  return {
    setsTotal: state.setsTotal,
    repsTotal: state.repsTotal,
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
