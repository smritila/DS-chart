import React from "react";

function App() {
  return (
    <table className="table-fixed w-full">
      <thead>
        <tr className="bg-gray-200">
          <th className="border border-slate-300 w-1/3 p-3 text-left ">Song</th>
          <th className="border border-slate-300 w-1/3 p-3 text-left">
            Artist
          </th>
          <th className="border border-slate-300 w-1/3 p-3 text-left">Year</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-gray-600 border border-gray-400">
          <td className="border border-slate-300 w-1/3 p-3 text-blue-400">
            The Sliding Mr. Bones (Next Stop, Pottersville)
          </td>
          <td className="border border-slate-300 w-1/3 p-3  text-blue-400">
            Malcolm Lockyer
          </td>
          <td className="border border-slate-300 w-1/3 p-3 text-blue-400">
            1961
          </td>
        </tr>
        <tr className="bg-gray-100 border border-gray-400">
          <td className="border border-slate-300w-1/3 p-3">Witchy Woman</td>
          <td className="border border-slate-300w-1/3 p-3">The Eagles</td>
          <td className="border border-slate-300w-1/3 p-3">1972</td>
        </tr>
        <tr className="bg-white border border-gray-400">
          <td className="border border-slate-300w-1/3 p-3">Shining Star</td>
          <td className="border border-slate-300w-1/3 p-3">
            Earth, Wind, and Fire
          </td>
          <td className="border border-slate-300w-1/3 p-3">1975</td>
        </tr>
      </tbody>
    </table>
  );
}

export default App;
