import React from "react";

import "./App.css";

import DashBoard from "./features/DashBoard";
import Report from "./features/Report";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="bg-gray-100 flex flex-row">
      <Sidebar />
      <main className="flex-1 p-4 overflow-y-auto ml-sidebar">
        <h1 className="text-xl font-bold">Loreum Ipsum</h1>
        <hr className="border-t-1 my-5 border-gray-300" />
        <Report />
      </main>
    </div>
  );
}

export default App;
