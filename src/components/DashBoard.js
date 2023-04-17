import React from "react";

import ChartWidget from "./Widgets/ChartWidget";
import TableWidget from "./Widgets/TableWidget";
import "./DashBoard.css";

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
    { label: "Garments", value: 283 },
    { label: "Construction", value: 283 },
    { label: "Pharmacy", value: 283 },
    { label: "Others", value: 283 },
  ];

  const languages = [
    { label: "English", value: 283 },
    { label: "Hindi", value: 283 },
    { label: "Nepali", value: 283 },
    { label: "Odia", value: 283 },
    { label: "telegu", value: 283 },
    { label: "Bengali", value: 283 },
    { label: "Tamil", value: 283 },
    { label: "Gujrati", value: 283 },
    { label: "Kannada", value: 283 },
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
        <TableWidget
          label="Revenue"
          number="18,500"
          percentage="+40%"
          stat={revenues}
        />
      </div>
      <div class="dashboard__widget--small">
        <TableWidget
          label="Languages"
          number="9"
          stat={languages}
          split={true}
        />
      </div>

      <div class="dashboard__widget--large">
        <ChartWidget label="Total summary" stat={subscriptions} type="bar" />
      </div>

      <div class="dashboard__widget--large">Widget 6</div>
    </div>
  );
}

export default DashBoard;
