import React, { Fragment } from "react";
import "./DataTable.css";

const DataTable = ({ list, split }) => {
  const itemList = list.map((item, index) => {
    return (
      <Fragment key={index}>
        <div className="grid-item-label">{item.label}</div>
        <div className="grid-item-value">{item.value}</div>
      </Fragment>
    );
  });

  let classNames = ["grid-container"];
  if (split) {
    classNames.push("grid-container--split");
  }

  return <div className={classNames.join(" ")}>{itemList}</div>;
};

export default DataTable;
