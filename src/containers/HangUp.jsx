import HangUpUI from "../components/HangUpUI";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    downTime: state.downTime,
    hangTime: state.hangTime,
    isHangActive: state.isHangActive,
    repsTotal: state.repsTotal,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

const connectedHangUpUI = connect(
  mapStateToProps,
  mapDispatchToProps
)(HangUpUI);

export default connectedHangUpUI;
