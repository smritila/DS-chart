import React from "react";

import CustomDataTable from "../components/CustomDataTable";
import Sidebar from "../components/Sidebar";

function Report() {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <CustomDataTable />
    </div>
  );
}

export default Report;
