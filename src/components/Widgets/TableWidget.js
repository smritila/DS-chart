import React from "react";
import "./ChartWidget.css";

import DataTable from "../DataTable";
const Widget = (props) => {
  return (
    <div className="widget">
      <p className="label">{props.label}</p>

      <p>
        <span className="number">{props.number}</span>
        <span className="percentage">{props.percentage}</span>
      </p>
      <div className="stat">
        <DataTable />
      </div>
    </div>
  );
};

export default Widget;
