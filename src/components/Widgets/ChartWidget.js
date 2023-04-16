import React from "react";
import "./ChartWidget.css";

import DoughnutChart from "../DoughnutChart";

const ChartWidget = ({ label, number, percentage, stat }) => {
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

  return (
    <div className="widget">
      <p className="label">{label}</p>
      <p>
        <span className="number">{number}</span>
        <span className="percentage">{percentage}</span>
      </p>
      <div>
        <DoughnutChart labels={labels} data={data} />
      </div>
    </div>
  );
};

export default ChartWidget;
