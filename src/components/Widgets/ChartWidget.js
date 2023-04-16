import React from "react";
import "./ChartWidget.css";

import DoughnutChart from "../DoughnutChart";

const ChartWidget = (props) => {
  // const labels = ["New", "Returning", "Inactive"];
  // const data = [62, 14, 24];

  const labels = ["Trial", "Paid"];
  const data = [40, 60];

  return (
    <div className="widget">
      <p className="label">{props.label}</p>
      <p>
        <span className="number">{props.number}</span>
        <span className="percentage">{props.percentage}</span>
      </p>
      <div>
        <DoughnutChart labels={labels} data={data} />
      </div>
    </div>
  );
};

export default ChartWidget;
