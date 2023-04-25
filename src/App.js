import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import "./App.css";
import Report from "./features/Report";
import Sidebar from "./components/Sidebar";
import DashBoard from "./features/DashBoard";

function App() {
  return (
    <Router>
      <div className="bg-gray-100 flex flex-row">
        <Sidebar />
        <main className="flex-1 p-4 overflow-y-auto ml-sidebar">
          <h1 className="text-xl font-bold">Loreum Ipsum</h1>
          <hr className="border-t-1 my-5 border-gray-300" />
          <Routes>
            <Route path="/Dashboard" element={<DashBoard />} />
            <Route path="/Report" element={<Report />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
