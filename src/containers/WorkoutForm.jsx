import { connect } from "react-redux";
import WorkoutFormUI from "../components/WorkoutFormUI.jsx";
import { setWorkoutParamsAction } from "../action";

function mapStateToProps() {
  console.log("in state");
  return {};
}

function mapDispatchToProps(dispatch) {
  console.log("in the dispatch");
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
