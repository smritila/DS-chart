import React from "react";

function Sidebar() {
  return (
    <div className="h-screen bg-white flex flex-col justify-start items-center w-1/8 p-4">
      <h1 className="text-2xl font-bold text-black mb-4">Vidhi</h1>
      <button className="bg-blue-100 text-blue-700 py-2 px-2 rounded-md  top-4 left-4">
        Business Specific
      </button>
    </div>
  );
}

export default Sidebar;
