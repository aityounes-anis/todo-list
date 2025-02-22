import SearchBar from "./components/search-bar";

import { useState, createContext, useEffect } from "react";
import Tasks from "./components/tasks";

export const tasksContext = createContext();
export const setTasksContext = createContext();

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const storage = localStorage.getItem("tasks");
    if (storage) return [storage];
  });

  useEffect(() => localStorage.setItem("tasks", tasks), [tasks]);

  return (
    <section>
      <tasksContext.Provider value={tasks}>
        <setTasksContext.Provider r value={setTasks}>
          <SearchBar />
          <Tasks />
        </setTasksContext.Provider>
      </tasksContext.Provider>
    </section>
  );
};

export default App;
