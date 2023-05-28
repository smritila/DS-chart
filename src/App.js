import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import "./App.css";
import Reports from "./features/Reports";
import Purchases from "./features/Purchases";
import Sidebar from "./components/Sidebar";

// import ApiTest from "./features/ApiTest";

function App() {
  return (
    <Router>
      <div className="bg-gray-100 flex flex-row">
        <Sidebar />
        <main className="flex-1 h-screen p-4 overflow-y-auto ml-sidebar">
          <h1 className="text-xl font-bold">Loreum Ipsum</h1>
          <hr className="border-t-1 my-5 border-gray-300" />
          <Routes>
            <Route path="/reports" element={<Reports />} />
            <Route path="/purchases" element={<Purchases />} />

            {/* <Route path="/" element={<DashBoard />} /> */}
            {/* <Route path="/api-test" element={<ApiTest />} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
