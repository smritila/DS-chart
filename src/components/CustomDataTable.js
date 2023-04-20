import React from "react";
import DataTable from "react-data-table-component";
import "tailwindcss/tailwind.css";

const columns = [
  {
    // name: "Users",
    name: "All Business Type",
    selector: (row) => row.AllBusinessType,
  },
  {
    name: "Employees",
    selector: (row) => row.employees,
  },

  {
    name: "Time Spent",
    selector: (row) => row.timeSpent,
  },

  {
    name: "Activity",
    selector: (row) => row.activity,
  },

  {
    name: "Subscription",
    selector: (row) => row.subscription,
    cell: (row) => (
      <span
        className={
          row.subscription === "paid" ? "text-green-500" : "text-red-500"
        }
      >
        {row.subscription}
      </span>
    ),
  },
];

const data = [
  {
    AllBusinessType: "MacDonalds",
    employees: 10,
    timeSpent: "02 Hrs",
    activity: 35,
    subscription: "paid",
  },

  {
    AllBusinessType: "Tesla",
    employees: 9387,
    timeSpent: "10 Hrs",
    activity: 35,
    subscription: "Trial",
  },
  {
    AllBusinessType: "GM",
    employees: 402,
    timeSpent: "48 min",
    activity: 35,
    subscription: "paid",
  },
  {
    AllBusinessType: "AARP",
    employees: 89,
    timeSpent: "90 min",
    activity: 35,
    subscription: "Trial",
  },

  {
    AllBusinessType: "Disney",
    employees: 276,
    timeSpent: "67 min",
    activity: 35,
    subscription: "paid",
  },

  {
    AllBusinessType: "Prime Theraputist",
    employees: 1098,
    timeSpent: "02 Hrs",
    activity: 35,
    subscription: "trial",
  },

  {
    AllBusinessType: "Match.com",
    employees: 4289,
    timeSpent: "10 Hrs",
    activity: 35,
    subscription: "Trial",
  },

  {
    AllBusinessType: "Chevy",
    employees: 1928,
    timeSpent: "02 Hrs",
    activity: 35,
    subscription: "paid",
  },

  {
    AllBusinessType: "GM",
    employees: 640,
    timeSpent: "02 Hrs",
    activity: 35,
    subscription: "trial",
  },
  // Add more objects as needed
];

function CustomDataTable() {
  return (
    <DataTable
      className="rounded-lg w-full p-4"
      columns={columns}
      data={data}
    ></DataTable>
  );
}

export default CustomDataTable;
