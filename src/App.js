import React from "react";
import ChartWidget from "./components/Widgets/ChartWidget";
import TableWidget from "./components/Widgets/TableWidget";

import "./App.css";

function App() {
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
    <div className="App">
      <ChartWidget
        label="Users"
        number="4,209"
        percentage="+40%"
        stat={users}
      />

      <ChartWidget
        label="Subscriptions"
        number="1302"
        percentage="+10%"
        stat={subscriptions}
      />

      <TableWidget
        label="Revenue"
        number="18,500"
        percentage="+40%"
        stat={revenues}
      />

      <TableWidget label="Language" number="9" stat={languages} split={true} />
    </div>
  );
}

export default App;
