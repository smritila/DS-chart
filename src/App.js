import React from "react";
import BarChart from "./components/BarChart";
import DoughnutChart from "./components/DoughnutChart";
import LineChart from "./components/LineChart";
import ChartWidget from "./components/Widgets/ChartWidget";
import "./components/Widgets/widget.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <BarChart />
      <DoughnutChart />
      <LineChart /> */}
      <ChartWidget label="Users" number="4,209" percentage="+40%" />
      <ChartWidget label="Users" number="4,209" percentage="+40%" />
    </div>
  );
}

export default App;
