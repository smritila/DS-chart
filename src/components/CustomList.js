import React, { Fragment } from "react";
import "./CustomList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CustomList = ({ list, split, size }) => {
  const itemList = list.map((item, index) => {
    let iconClasses = ["text-sm", "mr-2"];
    if (item.iconClass) iconClasses.push(item.iconClass);
    iconClasses = iconClasses.join(" ");

    return (
      <Fragment key={index}>
        <div className="grid-item-label">{item.label}</div>
        <div className="grid-item-value">
          <FontAwesomeIcon icon={item.icon} className={iconClasses} />
          {item.value}
        </div>
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
