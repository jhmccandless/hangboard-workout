import RepsBoxUI from "../components/RepsBoxUI";
import { connect } from "react-redux";
import { countdownRepsAction, resetHangTimerAction } from "../action";

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
    resetHangTimer: function (data) {
      dispatch(resetHangTimerAction(data));
    },
  };
}

const connectedRepsBoxUI = connect(
  mapStateToProps,
  mapDispatchToProps
)(RepsBoxUI);

export default connectedRepsBoxUI;
