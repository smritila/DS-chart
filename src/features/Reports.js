import React from "react";

import ChartWidget from "../components/Widgets/ChartWidget";
import ListWidget from "../components/Widgets/ListWidget";
import "./DashBoard.css";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";

function DashBoard() {
  const users = [
    { label: "New", value: 62 },
    { label: "Returning", value: 13 },
    { label: "Inctive", value: 23 },
  ];

  const subscriptions = [
    { label: "Paid", value: 40 },
    { label: "Trial", value: 60 },
  ];

  const revenues = [
    {
      label: "May",
      value: "$283",
      icon: faCaretUp,
      iconClass: "text-blue-600",
    },
    {
      label: "April",
      value: "$283",
      icon: faCaretUp,
      iconClass: "text-blue-600",
    },
    {
      label: "Feb",
      value: "$283",
      icon: faCaretUp,
      iconClass: "text-blue-600",
    },
    {
      label: "Earlier",
      value: "$283",
      icon: faCaretDown,
      iconClass: "text-orange-500",
    },
  ];

  const scans = [
    {
      label: "May",
      value: "$283",
      icon: faCaretUp,
      iconClass: "text-blue-600",
    },
    {
      label: "April",
      value: "$283",
      icon: faCaretUp,
      iconClass: "text-blue-600",
    },
    {
      label: "Feb",
      value: "$283",
      icon: faCaretUp,
      iconClass: "text-blue-600",
    },
    {
      label: "Earlier",
      value: "$283",
      icon: faCaretDown,
      iconClass: "text-orange-500",
    },
  ];

  const summary = [
    { label: "Work", value: 100 },
    { label: "Document", value: 170 },
    { label: "Cash Transaction", value: 250 },
    { label: "Remainders", value: 350 },
    { label: "Broadcast", value: 425 },
  ];

  const activity = [
    { label: "Garments", value: 139 },
    { label: "Construction", value: 283 },
    { label: "Pharmacy", value: 782 },
    { label: "Others", value: 1923 },
    { label: "Garments", value: 139 },
    { label: "Construction", value: 283 },
    { label: "Pharmacy", value: 782 },
    { label: "Others", value: 1923 },
  ];
  return (
    <div className="DashBoard">
      <div class="dashboard__widget--small">
        <ChartWidget
          label="Users"
          number="4,209"
          percentage="+40%"
          stat={users}
          type="doughnut"
        />
      </div>

      <div class="dashboard__widget--small">
        <ChartWidget
          label="Subscriptions"
          number="1302"
          percentage="+10%"
          stat={subscriptions}
          type="doughnut"
        />
      </div>

      <div class="dashboard__widget--small">
        <ListWidget
          label="Revenue"
          number="$18,500"
          percentage="+40%"
          stat={revenues}
        />
      </div>
      <div class="dashboard__widget--small">
        <ListWidget
          label="Total successful scans"
          number="530"
          stat={scans}
          percentage="+40%"
        />
      </div>

      {/* <div class="dashboard__widget--large">
        <ChartWidget label="Total summary" stat={summary} type="bar" />
      </div> */}

      {/* <div class="dashboard__widget--large">
        <ListWidget label="Activity" stat={activity} split={true} size="lg" />
      </div> */}
    </div>
  );
}

export default DashBoard;
