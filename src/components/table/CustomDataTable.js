import React from "react";
import DataTable from "react-data-table-component";
import "tailwindcss/tailwind.css";
import CustomDataTableHeader from "./CustomDataTableHeader";

function CustomDataTable({ columns, data, pending }) {
  const modifiedColumns = columns.map((column) => {
    if (column.isCustomCell) {
      return {
        name: (
          <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md">
            {column.name}
          </span>
        ),
        cell: column.cell,
      };
    } else {
      return {
        name: (
          <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md">
            {column.name}
          </span>
        ),
        cell: (row) => <span className="text-gray-500">{row[column.key]}</span>,
      };
    }
  });

  const tableHeader = <CustomDataTableHeader />;
  return (
    <DataTable
      title={tableHeader}
      columns={modifiedColumns}
      data={data}
      progressPending={pending}
    />
  );
}

export default CustomDataTable;
