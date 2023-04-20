import React, { useState } from "react";
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
  const [filteredData, setFilteredData] = useState(data);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  const handleFilter = (event) => {
    const value = event.target.value.toLowerCase();
    const filtered = data.filter((item) => {
      return (
        item.title.toLowerCase().includes(value) ||
        item.director.toLowerCase().includes(value) ||
        item.year.toLowerCase().includes(value)
      );
    });
    setFilteredData(filtered);
    setPage(1);
  };

  const handlePageChange = (page) => {
    setPage(page);
  };

  const handlePerPageChange = (perPage) => {
    setPerPage(perPage);
  };

  const paginatedData = filteredData.slice(
    (page - 1) * perPage,
    page * perPage
  );

  return (
    <div className="p-4 font-sans">
      <h1 className="text-md font-sans mb-4">Users</h1>

      <input
        type="text"
        placeholder="Filter..."
        onChange={handleFilter}
        className="px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
      />
      <DataTable
        columns={columns}
        data={paginatedData}
        pagination
        paginationServer
        paginationTotalRows={filteredData.length}
        paginationPerPage={perPage}
        paginationRowsPerPageOptions={[10, 25, 50, 100]}
        onChangeRowsPerPage={handlePerPageChange}
        onChangePage={handlePageChange}
        className="mt-4"
      />
    </div>
  );
}

export default CustomDataTable;
