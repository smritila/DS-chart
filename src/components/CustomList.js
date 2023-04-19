import React, { Fragment } from "react";
import "./CustomList.css";

const CustomList = ({ list, split, size }) => {
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
  if (size == "lg") {
    classNames.push("grid-container--lg");
  }

  return <div className={classNames.join(" ")}>{itemList}</div>;
};

export default CustomList;
