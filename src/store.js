import { createStore } from "redux";
import timers_reducer from "./reducer";

const store = createStore(timers_reducer);

export default store;
