import SetCompUI from "../components/SetCompUI";
import { connect } from "react-redux";
import { stopCircuitAction } from "../action";

function mapStateToProps(state) {
  return {
    setsTotal: state.setsTotal,
    hangTime: state.hangTime,
    downTime: state.downTime,
    restTime: state.restTime,
    repsTotal: state.repsTotal,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    stopCircuit: function (data) {
      dispatch(stopCircuitAction(data));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SetCompUI);
