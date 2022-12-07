import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    // const newTodoList = [...todoList, newTask];
    setTodoList([...todoList, newTask]);
  };

  return (
    <div className={styles.App}>
      <div className="addTask">
        <input type="text" onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task, key) => {
          return <h1 key={key}>{task}</h1>;
        })}
      </div>
    </div>
  );
}

export default App;
