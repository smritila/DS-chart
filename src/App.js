import React from "react";
import DashBoard from "./components/DashBoard";
import Hello from "./Hello";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        {/* <DashBoard /> */}
        <h1 className="text-6xl text-red-500 bg-purple-200">
          Hello, Tailwind css in React!
        </h1>

        <Hello />
      </div>
    </div>
  );
}

export default App;
