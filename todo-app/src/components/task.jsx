import { useContext } from "react";
import { BiTrash } from "react-icons/bi";
import { setTasksContext, tasksContext } from "../App";

// eslint-disable-next-line react/prop-types
const Task = ({ task }) => {
  const tasks = useContext(tasksContext);
  const setTasks = useContext(setTasksContext);

  const removeTask = () => {
    const newTasks = tasks.filter((t) => t !== task);
    setTasks(newTasks);
  };

  return (
    <div className="task-item">
      <p>{task}</p>
      <div>
        <button type="button" onClick={removeTask}>
          <BiTrash />
        </button>
      </div>
    </div>
  );
};

export default Task;
