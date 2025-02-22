import { useContext, useRef, useState } from "react";
import { CgAdd } from "react-icons/cg";

import { setTasksContext, tasksContext } from "../App";
import Popup from "./pop-up";

const SearchBar = () => {
  const tasks = useContext(tasksContext);
  const setTasks = useContext(setTasksContext);
  const [showPopup, setShowPopup] = useState(false);

  const taskRef = useRef(null);

  const addTask = () => {
    if (!tasks.includes(taskRef.current.value)) {
      setTasks([...tasks, taskRef.current.value]);
    } else {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
    }
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <input type="text" placeholder="Enter a Task..." ref={taskRef} />
        <button type="button" onClick={addTask}>
          <CgAdd />
        </button>
      </div>
      {showPopup && <Popup showPopup={showPopup} />}
    </>
  );
};

export default SearchBar;
