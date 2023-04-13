import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "./tasksSlice";
import TaskList from "./TaskList"; 

function MainGroup() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 8; 

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const totalPages = Math.ceil(tasks.length / tasksPerPage);
  const totalData = (tasks.length);

  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

  const handleChangePage = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="">
      <div className="">
        <TaskList
          tasks={currentTasks}
          handleDelete={handleDelete}
          totalPages={totalPages}
          currentPage={currentPage}
          handleChangePage={handleChangePage}
          totalData={totalData}
        />
      </div>
    </div>
  );
}

export default MainGroup;
