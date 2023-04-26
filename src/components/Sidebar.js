import React, { useState } from "react";
import SidebarNavItem from "./SidebarNavItem";

import { faBuilding, faChartLine } from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  const [isBusinessSpecific, setIsBusinessSpecific] = useState(true);

  return (
    <div className="h-screen bg-white w-sidebar p-5 overflow-y-auto fixed left-0 top-0">
      <h1 className="text-2xl font-bold text-black mb-4">Vidhi</h1>
      <SidebarNavItem name="Reports" icon={faChartLine} path="/report" />
      <SidebarNavItem
        name="Business Specific"
        icon={faBuilding}
        path="/dashboard"
      />
    </div>
  );
}

export default Sidebar;
