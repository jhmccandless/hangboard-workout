import RepCountUI from "../components/RepCountUI";
import { connect } from "react-redux";

function mapStateToProps(state) {
  let time = state.hangTime + state.downTime;
  return {
    repsTotal: state.repsTotal,
    hangTime: state.hangTime,
    isHangActive: state.isHangActive,
    eachRepTimer: time,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

const connectedRepCountsUI = connect(
  mapStateToProps,
  mapDispatchToProps
)(RepCountUI);

export default connectedRepCountsUI;
