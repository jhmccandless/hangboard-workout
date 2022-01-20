import { connect } from "react-redux";
import SetTimerUI from "../components/SetTimerUI";
import { resetHangTimerAction } from "../action";

function mapStateToProps(state) {
  return {
    totalTime: state.totalTime,
    isHangActive: state.isHangActive,
    hangTime: state.hangTime,
    downTime: state.downTime,
    repsTotal: state.repsTotal,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    resetHangTimer: function (data) {
      dispatch(resetHangTimerAction(data));
    },
  };
}

const connectedSetTimerUI = connect(
  mapStateToProps,
  mapDispatchToProps
)(SetTimerUI);

export default connectedSetTimerUI;
