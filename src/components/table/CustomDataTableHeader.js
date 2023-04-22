import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function CustomDataTableHeader() {
  return (
    <>
      <div className="flex flex-row items-center">
        <h3 className="font-bold text-base">Users</h3>
        <span className="text-gray-400 text-base ml-3 flex-grow">254</span>
        <div className="flex flex-row items-center">
          <FontAwesomeIcon
            icon={faSearch}
            className="text-gray-400 text-sm mr-3"
          />
          <input
            type="text"
            className="text-base focus:outline-none"
            placeholder="Search..."
          />
        </div>
      </div>
      <hr className="border-t-1 mt-2 border-gray-300" />
    </>
  );
}
