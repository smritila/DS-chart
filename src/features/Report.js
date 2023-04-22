import React from "react";

import CustomDataTable from "../components/table/CustomDataTable";

const columns1 = [
  {
    name: (
      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md">
        All Business Type
      </span>
    ),
    selector: (row) => row.allBusinessType,
    cell: (row) => (
      <div>
        <span className="font-bold block">{row.allBusinessType}</span>
        <span className="text-gray-400">Business Type</span>
      </div>
    ),
  },
  {
    name: (
      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md">
        Employees
      </span>
    ),
    selector: (row) => row.employees,
    cell: (row) => <span className="text-gray-500">{row.employees}</span>,
  },

  {
    name: (
      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md">
        Time Spent
      </span>
    ),
    selector: (row) => row.timeSpent,
    cell: (row) => <span className="text-gray-500">{row.timeSpent}</span>,
  },

  {
    name: (
      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md">
        Activity
      </span>
    ),
    selector: (row) => row.activity,
    cell: (row) => <span className="text-gray-600">{row.activity}</span>,
  },

  {
    name: (
      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md">
        Subscription
      </span>
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
  // more columns as needed
];

const data1 = [
  {
    allBusinessType: "MacDonalds",
    employees: 10,
    timeSpent: "02 Hrs",
    activity: 35,
    subscription: "paid",
    // more data as needed
  },

  {
    allBusinessType: "Tesla",
    employees: 9387,
    timeSpent: "10 Hrs",
    activity: 35,
    subscription: "Trial",
  },

  {
    allBusinessType: "GM",
    employees: 402,
    timeSpent: "48 min",
    activity: 35,
    subscription: "paid",
  },
  {
    allBusinessType: "AARP",
    employees: 89,
    timeSpent: "90 min",
    activity: 35,
    subscription: "Trial",
  },

  {
    allBusinessType: "Disney",
    employees: 276,
    timeSpent: "67 min",
    activity: 35,
    subscription: "paid",
  },

  {
    allBusinessType: "Prime Theraputist",
    employees: 1098,
    timeSpent: "02 Hrs",
    activity: 35,
    subscription: "trial",
  },

  {
    allBusinessType: "Match.com",
    employees: 4289,
    timeSpent: "10 Hrs",
    activity: 35,
    subscription: "Trial",
  },

  {
    allBusinessType: "Chevy",
    employees: 1928,
    timeSpent: "02 Hrs",
    activity: 35,
    subscription: "paid",
  },

  {
    allBusinessType: "GM",
    employees: 640,
    timeSpent: "02 Hrs",
    activity: 35,
    subscription: "trial",
  },
  {
    allBusinessType: "MacDonalds",
    employees: 10,
    timeSpent: "02 Hrs",
    activity: 35,
    subscription: "paid",
    // more data as needed
  },

  {
    allBusinessType: "Tesla",
    employees: 9387,
    timeSpent: "10 Hrs",
    activity: 35,
    subscription: "Trial",
  },

  {
    allBusinessType: "GM",
    employees: 402,
    timeSpent: "48 min",
    activity: 35,
    subscription: "paid",
  },
  {
    allBusinessType: "AARP",
    employees: 89,
    timeSpent: "90 min",
    activity: 35,
    subscription: "Trial",
  },

  {
    allBusinessType: "Disney",
    employees: 276,
    timeSpent: "67 min",
    activity: 35,
    subscription: "paid",
  },

  {
    allBusinessType: "Prime Theraputist",
    employees: 1098,
    timeSpent: "02 Hrs",
    activity: 35,
    subscription: "trial",
  },

  {
    allBusinessType: "Match.com",
    employees: 4289,
    timeSpent: "10 Hrs",
    activity: 35,
    subscription: "Trial",
  },

  {
    allBusinessType: "Chevy",
    employees: 1928,
    timeSpent: "02 Hrs",
    activity: 35,
    subscription: "paid",
  },

  {
    allBusinessType: "GM",
    employees: 640,
    timeSpent: "02 Hrs",
    activity: 35,
    subscription: "trial",
  },
  // more data as needed
];

const columns2 = [
  // different columns as needed
];

const data2 = [
  // different data as needed
];

function Report() {
  return <CustomDataTable columns={columns1} data={data1} />;
}

export default Report;
