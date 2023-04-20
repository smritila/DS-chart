import React from "react";

import CustomDataTable from "../components/CustomDataTable";
import Sidebar from "../components/Sidebar";

function Report() {
  return (
    <div className="bg-gray-100 font-sans">
      <div className="flex flex-row">
        <Sidebar />
        <CustomDataTable />
      </div>
    </div>
  );
}

export default Report;
