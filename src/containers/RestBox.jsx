import RestBoxUI from "../components/RestBoxUI";
import { connect } from "react-redux";
import { resetRestTimerAction } from "../action";

function mapStateToProps(state) {
  return {
    restTime: state.restTime,
    isRestActive: state.isRestActive,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    resetRestTimer: function (data) {
      dispatch(resetRestTimerAction(data));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RestBoxUI);
