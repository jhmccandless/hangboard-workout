import React from "react";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import WorkoutPageUI from "./components/WorkoutPageUI";
import WorkoutFormUI from "./components/WorkoutFormUI";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          {/* <header className="App-header"></header> */}
          <Routes>
            <Route exact path="/current_workout" element={<WorkoutPageUI />} />
            <Route path="*" element={<WorkoutFormUI />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
