import React from "react";
import DashBoard from "./components/DashBoard";
import Hello from "./Hello";

import "./App.css";

function App() {
  return (
    // <DashBoard />
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
      <div>
        <div className="text-xl font-medium text-black">ChitChat</div>
        <p className="text-gray-500">You have a new message!</p>
      </div>
    </div>
  );
}

export default App;
