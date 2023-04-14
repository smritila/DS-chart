import React from "react";
import BarChart from "./components/BarChart";
import DoughnutChart from "./components/DoughnutChart";
import LineChart from "./components/LineChart";
import ChartWidget from "./components/Widgets/ChartWidget";
import TableWidget from "./components/Widgets/TableWidget";

import "./App.css";

function App() {
  const data = [
    { label: "Garments", value: 283 },
    { label: "Construction", value: 283 },
    { label: "Pharmacy", value: 283 },

    { label: "Others", value: 283 },
  ];

  return (
    <div className="App">
      {/* <BarChart />
      <DoughnutChart />
      <LineChart /> */}

      {/* <ChartWidget label="Users" number="4,209" percentage="+40%" /> */}
      <ChartWidget label="Users" number="4,209" percentage="+40%" />
      <TableWidget
        label="Revenue"
        number="18,500"
        percentage="+40%"
        stat={data}
      />
    </div>
  );
}

export default App;
