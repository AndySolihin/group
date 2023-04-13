import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="relative bg-gray border-b">
      <h1 className="text-3xl font-bold py-6 px-10">
        Group Management
      </h1>
      <Link to="/" className="text-black mr-2">
        Group
      </Link>
      <Link to="/create-task" className="text-black">
        Add Group
      </Link>
    </header>
  );
}

export default Header;
