import React, { useState } from "react";
import DataTable from "react-data-table-component";
import "tailwindcss/tailwind.css";

const columns = [
  {
    name: "Title",
    selector: (row) => row.title,
  },
  {
    name: "Director",
    selector: (row) => row.director,
  },
  {
    name: "Year",
    selector: (row) => row.year,
  },
];

const data = [
  {
    id: 1,
    title: "Beetlejuice",
    year: "1988",
    director: "Christopher",
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
    director: "Iman",
  },
  {
    id: 3,
    title: "Ghostbusters",
    director: "Punam",
    year: "1987",
  },
  {
    id: 4,
    title: "city of God",
    director: "Punam",
    year: "1987",
  },
  {
    id: 5,
    title: "skg",
    director: "Punam",
    year: "1987",
  },
  {
    id: 6,
    title: "Ghostbusters",
    director: "Punam",
    year: "1987",
  },
  {
    id: 7,
    title: "Ghostbusters",
    director: "Punam",
    year: "1987",
  },
  {
    id: 8,
    title: "Ghostbusters",
    director: "Punam",
    year: "1987",
  },
  {
    id: 9,
    title: "Ghostbusters",
    director: "Punam",
    year: "1987",
  },
  {
    id: 10,
    title: "Ghostbusters",
    director: "Punam",
    year: "1987",
  },
  {
    id: 11,
    title: "Ghostbusters",
    director: "Punam",
    year: "1987",
  },
  {
    id: 12,
    title: "Ghostbusters",
    director: "Punam",
    year: "1987",
  },
  {
    id: 13,
    title: "Ghostbusters",
    director: "Punam",
    year: "1987",
  },
  {
    id: 14,
    title: "Shogun",
    director: "Punam",
    year: "1987",
  },
  {
    id: 15,
    title: "spollight",
    director: "Punam",
    year: "1987",
  },
  {
    id: 16,
    title: "Ghostbusters",
    director: "Punam",
    year: "1987",
  },
  {
    id: 17,
    title: "Ghostbusters",
    director: "Punam",
    year: "1987",
  },
  {
    id: 18,
    title: "Ghostbusters",
    director: "Punam",
    year: "1987",
  },
  {
    id: 19,
    title: "Ghostbusters",
    director: "Punam",
    year: "1987",
  },
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
      <input
        type="text"
        placeholder="Filter..."
        onChange={handleFilter}
        className="px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
      />
      <DataTable
        columns={columns}
        data={paginatedData}
        selectableRows
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
