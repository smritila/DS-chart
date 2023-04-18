import React from "react";
import DashBoard from "./components/DashBoard";
import Hello from "./Hello";

import "./App.css";

function App() {
  return (
    <div className="container p-4">
      {/* <DashBoard /> */}
      <TailwindCSSButton>TailwindCSS</TailwindCSSButton>
    </div>
  );
}

function TailwindCSSButton(props) {
  return (
    <button
      className="bg-blue-500 text-white font-medium px-4 py-2 rounded
    hover:bg-blue-600"
    >
      {props.children}
    </button>
  );
}

export default App;
