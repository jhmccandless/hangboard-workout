import { connect } from "react-redux";
import WorkoutPageUI from "../components/WorkoutPageUI";

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps() {
  return {};
}

const connectedWorkoutPageUI = connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkoutPageUI);

export default connectedWorkoutPageUI;
