import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    setTodoList([...todoList, newTask]);
  };

  const deleteTask = (taskName) => {
    setTodoList(todoList.filter((task) => task !== taskName));
  };

  return (
    <div className={styles.App}>
      <div className="addTask">
        <input type="text" onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task, key) => {
          return (
            <div key={key}>
              <h1>{task}</h1>
              <button
                onClick={() => {
                  deleteTask(task);
                }}
              >
                X
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
