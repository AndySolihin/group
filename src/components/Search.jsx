
import { FiSearch } from "react-icons/fi";

function Search({ state, setState }) {

  return (
    <div className="">
      <div className="flex items-center px-3 py-2 rounded-md border my-5">
        <FiSearch size={25} className="cursor-pointer" />
        <input
          type="search"
          placeholder="Search..."
          value={state}
          onChange={setState}
          className=" text-black text-start w-full focus:outline-none py-0.5 px-2"
        />
      </div>
    </div>
  );
}

export default Search;
