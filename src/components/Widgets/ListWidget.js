import React from "react";
import "./ChartWidget.css";

import CustomList from "../CustomList";

const TableWidget = ({ label, number, percentage, stat, split, size }) => {
  return (
    <div className="widget">
      <p className="label">{label}</p>
      <p>
        <span className="number">{number}</span>
        <span className="percentage">{percentage}</span>
      </p>
      <div className="stat">
        <CustomList list={stat} split={split} size={size} />
      </div>
    </div>
  );
};

export default TableWidget;
