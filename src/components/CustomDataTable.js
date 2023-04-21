import React from "react";
import DataTable from "react-data-table-component";
import "tailwindcss/tailwind.css";

function CustomDataTable({ columns, data }) {
  return <DataTable columns={columns} data={data} />;
}

export default CustomDataTable;
