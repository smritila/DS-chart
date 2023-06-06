import React from "react";
import DataTable from "react-data-table-component";
import "tailwindcss/tailwind.css";
import CustomDataTableHeader from "./CustomDataTableHeader";

function CustomDataTable({ columns, data, pending }) {
  const getColumnJSX = (name) => (
    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md">
      {name}
    </span>
  );

  const modifiedColumns = columns.map((column) => {
    const nameJSX = getColumnJSX(column.name);

    if (column.isCustomCell) {
      return {
        name: nameJSX,
        cell: column.cell,
      };
    } else {
      return {
        name: nameJSX,
        cell: (row) => {
          const cellValue = row[column.key];
          if (cellValue === "") return "-";
          if (typeof cellValue === "string" && column.type === "date") {
            const formattedDate = formatDate(cellValue);
            return <span className="text-gray-500">{formattedDate}</span>;
          } else {
            return <span className="text-gray-500">{cellValue}</span>;
          }
        },
      };
    }
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

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
