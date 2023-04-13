import React from "react";
import { FaLink } from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="top-0 left-0 h-full w-14 bg-blue-dark p-4 flex flex-col justify-center z-10">
      <ul className="flex flex-col items-center">
        <li className="mb-4">
          <FaLink className="text-white" size={20} />
        </li>
        <li className="mb-4">
          <FaLink className="text-white" size={20} />
        </li>
        <li className="mb-4">
          <FaLink className="text-white" size={20} />
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
