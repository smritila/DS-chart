import React from "react";
import DataTable from "react-data-table-component";
import "tailwindcss/tailwind.css";

function CustomDataTable({ columns, data }) {
  return (
    <DataTable
      className="m-4"
      style={{ borderRadius: "10rem" }}
      columns={columns}
      data={data}
    ></DataTable>
  );
}

export default CustomDataTable;
