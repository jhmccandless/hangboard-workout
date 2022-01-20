import RestTimerUI from "../components/RestTimerUI";
import { connect } from "react-redux";
import { resetRestTimerAction, stopCircuitAction } from "../action";

function mapStateToProps(state) {
  return {
    restTime: state.restTime,
    totalTime: state.totalTime,
    isRestActive: state.isRestActive,
    isHangActive: state.isHangActive,
    setsTotal: state.setsTotal,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    resetRestTimer: function (data) {
      dispatch(resetRestTimerAction(data));
    },
    stopCircuit: function (data) {
      dispatch(stopCircuitAction(data));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RestTimerUI);
