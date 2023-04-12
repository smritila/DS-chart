import React from "react";
import BarChart from "./components/BarChart";
import DoughnutChart from "./components/DoughnutChart";
import Widget from "./components/Cards/Widget";
import "./components/Cards/widget.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BarChart />
      <DoughnutChart />
      <Widget
        title="Users"
        content="4209 +40%"
        desc="62% New"
        desc1="23% Inactive"
        desc2="13% Returning"
      />
    </div>
  );
}

export default App;
