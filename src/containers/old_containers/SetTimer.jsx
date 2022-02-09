import { connect } from "react-redux";
import SetTimerUI from "../../components/old_components/SetTimerUI";
import { resetHangTimerAction } from "../../action";

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
    resetHangTimer: function () {
      dispatch(resetHangTimerAction());
    },
  };
}

const connectedSetTimerUI = connect(
  mapStateToProps,
  mapDispatchToProps
)(SetTimerUI);

export default connectedSetTimerUI;
