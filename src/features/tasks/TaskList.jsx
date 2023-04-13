import React from "react";
import { Link } from "react-router-dom";
import Search from "../../components/Search";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const TaskList = ({
  tasks,
  handleDelete,
  totalPages,
  currentPage,
  handleChangePage,
  totalData,
}) => {
  
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handleChangePage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      handleChangePage(currentPage - 1);
    }
  };
  return (
    <div className="h-[60vh]">
      <div className="w-1/3 px-10">
        <Search />
      </div>
      <div className="w-11/12 flex-1 py-3 px-10">
        <table className="w-full text-center justify-center border">
          <thead>
            <tr className="bg-blue">
              <th className="px-2 py-1 border">Name Group</th>
              <th className="px-2 py-1 border">Description</th>
              <th className="w-[8rem] px-2 py-1 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr
                key={task.id}
                className={`border text-xs font-bold ${
                  index % 2 === 0 ? "bg-white" : "bg-blue"
                }`}
              >
                <td className="px-2 py-1 ">{task.title}</td>
                <td className="px-2 py-1">{task.description}</td>
                <td className="px-2 py-1">
                  <Link
                    to={`/edit-task/${task.id}`}
                    className="bg-blue px-2 py-1 mr-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(task.id)}
                    className="bg-blue px-2 py-1"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="fixed bottom-10 right-28">
        <button
          onClick={handlePrevPage}
          className="px-2 py-1 mx-1 bg-blue rounded-md"
        >
          <RiArrowLeftSLine />
        </button>
        <button
          onClick={handleNextPage}
          className="px-2 py-1 mx-1 bg-blue rounded-md"
        >
          <RiArrowRightSLine />
        </button>
        <div className="text-sm mx-1 mt-2">
          Page {currentPage} of {totalPages} total data ({totalData})
        </div>
      </div>
    </div>
  );
};

export default TaskList;