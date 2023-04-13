import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addTask, editTask } from "./tasksSlice";
import { v4 as uuid } from "uuid";

function AddGroup() {
  const [task, setTask] = useState({
    name: "",
    description: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const tasks = useSelector((state) => state.tasks);

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (params.id) {
      dispatch(editTask({ ...task, id: params.id }));
    } else {
      dispatch(
        addTask({
          ...task,
          id: uuid(),
        })
      );
    }

    navigate("/");
  };

  useEffect(() => {
    if (params.id) {
      setTask(tasks.find((task) => task.id === params.id));
    }
  }, [params, tasks]);

  return (
    <form onSubmit={handleSubmit} className="bg-blue-dark max-w-sm p-4">
    <label className="block text-sm font-bold">name:</label>
    <input
      type="text"
      name="name"
      onChange={handleChange}
      value={task.name}
      className="w-full p-2 rounded-md bg-zinc-600 mb-2"
      placeholder="Write a name"
      autoFocus
    />
    <label>
      Description:
      <textarea
        type="text"
        name="description"
        onChange={handleChange}
        value={task.description}
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
        placeholder="Write a description"
      />
    </label>
      <button type="submit" className="bg-blue-dark px-2 py-1">Submit</button>
    </form>
  );
}

export default AddGroup;
