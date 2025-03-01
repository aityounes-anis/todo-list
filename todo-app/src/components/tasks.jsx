import { useContext } from "react";

import { tasksContext } from "../App";
import Task from "./task";

const Tasks = () => {
  const tasks = useContext(tasksContext);

  console.log(tasks);

  return (
    <>
      {tasks?.map((task) => (
        <Task key={Math.random()} task={task} />
      ))}
    </>
  );
};

export default Tasks;
