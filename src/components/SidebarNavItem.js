import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SidebarNavItem({ name, icon, isActive }) {
  const textColorClass = isActive ? "text-blue-700" : "text-black";
  const iconClasses = [textColorClass, "text-sm", "mr-3"];

  let buttonClasses = [
    "w-full",
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

  //   console.log(buttonClasses.join(" "));
  return (
    <button className={buttonClasses.join(" ")}>
      <FontAwesomeIcon icon={icon} className={iconClasses.join(" ")} />
      {name}
    </button>
  );
}

export default SidebarNavItem;
