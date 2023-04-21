import React from "react";
import DataTable from "react-data-table-component";
import "tailwindcss/tailwind.css";

const columns = [
  {
    name: (
      <span className="bg-gray-100 px-2 py-1 rounded-md">
        All Business Type
      </span>
    ),
    selector: (row) => row.AllBusinessType,
    cell: (row) => <span className="font-bold">{row.AllBusinessType}</span>,
  },
  {
    name: <span className="bg-gray-100 px-2 py-1 rounded-md">Employees</span>,
    selector: (row) => row.employees,
  },

  {
    name: <span className="bg-gray-100 px-2 py-1 rounded-md">Time Spent</span>,
    selector: (row) => row.timeSpent,
  },

  {
    name: <span className="bg-gray-100 px-2 py-1 rounded-md">Activity</span>,
    selector: (row) => row.activity,
  },

  {
    name: (
      <span className="bg-gray-100 px-2 py-1 rounded-md">Subscription</span>
    ),
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
];

function CustomDataTable() {
  return (
    <DataTable
      className="border-gray-300 m-4"
      style={{ borderRadius: "10rem" }}
      columns={columns}
      data={data}
    ></DataTable>
  );
}

export default CustomDataTable;
