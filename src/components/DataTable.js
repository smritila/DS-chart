import React from "react";
import "./DataTable.css";

const DataTable = ({ data }) => {
  console.log(data);
  const itemList = data.map((item, index) => {
    return (
      <>
        <div className="grid-item-label">{item.label}</div>
        <div className="grid-item-value">{item.value}</div>
      </>
    );
  });

  return <div className="grid-container">{itemList}</div>;
};

export default DataTable;
