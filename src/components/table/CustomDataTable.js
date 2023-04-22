import React from "react";
import DataTable from "react-data-table-component";
import "tailwindcss/tailwind.css";
import CustomDataTableHeader from "./CustomDataTableHeader";

function CustomDataTable({ columns, data }) {
  const tableHeader = <CustomDataTableHeader />;
  return <DataTable title={tableHeader} columns={columns} data={data} />;
}

export default CustomDataTable;
