import DataTable from "react-data-table-component";

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
];

function CustomDataTable() {
  return <DataTable columns={columns} data={data} selectableRows />;
}
export default CustomDataTable;
