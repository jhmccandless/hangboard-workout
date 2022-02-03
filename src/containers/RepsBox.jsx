import RepsBoxUI from "../components/RepsBoxUI";
import { connect } from "react-redux";
import { countdownRepsAction } from "../action";

function mapStateToProps(state) {
  return {
    downTime: state.downTime,
    hangTime: state.hangTime,
    isHangActive: state.isHangActive,
    repsTotal: state.repsTotal,
    totalTime: state.totalTime,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    countdownReps: function () {
      dispatch(countdownRepsAction());
    },
  };
}

const connectedRepsBoxUI = connect(
  mapStateToProps,
  mapDispatchToProps
)(RepsBoxUI);

export default connectedRepsBoxUI;
