import DataTable from "react-data-table-component";

const columns = [
  {
    name: "Title",
    selector: (row) => row.title,
    sortable: true,
  },

  {
    name: "Director",
    selector: (row) => row.director,
    sortable: true,
  },
  {
    name: "Year",
    selector: (row) => row.year,
    sortable: true,
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
];

function CustomDataTable() {
  return <DataTable columns={columns} data={data} />;
}
export default CustomDataTable;
