import SetCompUI from "../components/SetCompUI";
import { connect } from "react-redux";
import { resetRestTimerAction, stopCircuitAction } from "../action";

function mapStateToProps(state) {
  return {
    restTime: state.restTime,
    totalTime: state.totalTime,
    isRestActive: state.isRestActive,
    isHangActive: state.isHangActive,
    setsTotal: state.setsTotal,
    repsTotal: state.repsTotal,
    hangTime: state.hangTime,
    downTime: state.downTime,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    resetRestTimer: function () {
      dispatch(resetRestTimerAction());
    },
    stopCircuit: function (data) {
      dispatch(stopCircuitAction(data));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SetCompUI);
