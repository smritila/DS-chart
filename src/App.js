import React from "react";
import BarChart from "./components/BarChart";
import DoughnutChart from "./components/DoughnutChart";
import LineChart from "./components/LineChart";
import Widget from "./components/Cards/Widget";
import "./components/Cards/widget.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <BarChart />
      <DoughnutChart />
      <LineChart /> */}
      <Widget label="Users" number="4,209" percentage="+40%" />
      <Widget label="Users" number="4,209" percentage="+40%" />
    </div>
  );
}

export default App;
