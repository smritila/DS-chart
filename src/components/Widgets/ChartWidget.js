import React from "react";
import "./ChartWidget.css";

import DoughnutChart from "../DoughnutChart";

const Widget = (props) => {
  return (
    <div className="widget">
      <p className="label">{props.label}</p>
      <p>
        <span className="number">{props.number}</span>
        <span className="percentage">{props.percentage}</span>
      </p>
      <div className="stat">
        <DoughnutChart />
      </div>
    </div>
  );
};

export default Widget;
