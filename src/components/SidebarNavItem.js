import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

function SidebarNavItem({ name, icon, path }) {
  function getButtonClasses({ isActive }) {
    const textColorClass = isActive ? "text-blue-700" : "text-black";
    let buttonClasses = [
      "block",
      "p-3",
      "mb-3",
      "font-bold",
      "text-sm",
      "text-left",
      textColorClass,
    ];
    if (isActive) {
      buttonClasses = [...buttonClasses, "bg-blue-100", "rounded"];
    }
    return buttonClasses.join(" ");
  }

  return (
    <NavLink to={path} className={getButtonClasses}>
      <FontAwesomeIcon icon={icon} className="text-sm mr-3" />
      {name}
    </NavLink>
  );
}

export default SidebarNavItem;
