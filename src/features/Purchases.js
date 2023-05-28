import React from "react";

import CustomDataTable from "../components/table/CustomDataTable";

const columns1 = [
  {
    name: "All Business Type",
    cell: (row) => (
      <div>
        <span className="font-bold block">{row.allBusinessType}</span>
        <span className="text-gray-400">Business Type</span>
      </div>
    ),
    isCustomCell: true,
  },
  {
    name: "Employees",
    key: "employees",
  },
  {
    name: "Time Spent",
    key: "timeSpent",
  },
  {
    name: "Activity",
    key: "activity",
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

function Report() {
  return <CustomDataTable columns={columns1} data={data1} />;
}

export default Report;
