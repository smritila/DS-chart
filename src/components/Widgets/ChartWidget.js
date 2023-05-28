import React from "react";
import "./ChartWidget.css";

import DoughnutChart from "../charts/DoughnutChart";
import VerticalBarChart from "../charts/VerticalBarChart";

const ChartWidget = ({ label, number, percentage, stat, type }) => {
  /** 
  stat = [
    { label: "Paid", value: 40 },
    { label: "Trial", value: 60 },
  ];
  */

  // const labels = ["Trial", "Paid"];
  // const data = [40, 60];

  const labels = stat.map((item) => item.label);
  const data = stat.map((item) => item.value);

  const ChartComponent = type === "doughnut" ? DoughnutChart : VerticalBarChart;

  return (
    <div className="widget">
      <p className="label">{label}</p>
      <p>
        <span className="number mr-2">{number}</span>
        <span className="percentage">{percentage}</span>
      </p>
      <div>
        <ChartComponent labels={labels} data={data} />
      </div>
    </div>
  );
};

export default ChartWidget;
