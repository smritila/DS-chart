import React from "react";

function Sidebar() {
  return (
    <div className="h-screen bg-white w-sidebar p-4 overflow-y-auto fixed left-0 top-0">
      <h1 className="text-2xl font-bold text-black mb-4">Vidhi</h1>
      <button className="bg-blue-100 text-blue-700 px-2 py-2 text-sm w-25 rounded">
        Business Specific
      </button>
    </div>
  );
}

export default Sidebar;
