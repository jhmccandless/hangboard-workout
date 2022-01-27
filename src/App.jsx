import React from "react";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import WorkoutPageUI from "./components/WorkoutPageUI";
import WorkoutForm from "./containers/WorkoutForm";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path="/current_workout" element={<WorkoutPageUI />} />
            <Route path="*" element={<WorkoutForm />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
