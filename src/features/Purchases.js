import React from "react";
import CustomDataTable from "../components/table/CustomDataTable";

const columns = [
  {
    name: "Email",
    key: "email",
  },
  {
    name: "Purachase Date",
    key: "purchase date",
  },
  {
    name: "Direct Scale Customer Id",
    key: "directScaleCustomerId",
  },
  {
    name: "Last Login",
    key: "lastLogin",
  },
  {
    name: "Subscription",
    cell: (row) => (
      <span
        className={
          row.subscription === "paid" ? "text-green-500" : "text-red-500"
        }
      >
        {row.subscription}
      </span>
    ),
    isCustomCell: true,
  },
];

// Generate 20 records
const records = [];
for (let i = 0; i < 20; i++) {
  const record = {
    email: `user${i + 1}@example.com`,
    "purchase date": `2023-06-${i + 1}`,
    directScaleCustomerId: i + 1000,
    lastLogin: `2023-06-${i + 1} 10:00 AM`,
    subscription: i % 2 === 0 ? "paid" : "free",
  };
  records.push(record);
}

function Report() {
  return <CustomDataTable columns={columns} data={records} />;
}

export default Report;
