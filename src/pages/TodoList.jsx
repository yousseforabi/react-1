import React, { useState } from "react";
function TodoList() {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);
  
    // Add task to the list
    const addTask = () => {
      if (task.trim() !== "") {
        setTasks([...tasks, task]);
        setTask("");
      }
    };
  
    // Remove a task from the list
    const removeTask = (index) => {
      const newTasks = tasks.filter((_, i) => i !== index);
      setTasks(newTasks);
    };
  
    return (
      <div style={{ padding: "20px" }}>
        <h1>To-Do List</h1>
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={{ padding: "5px", marginRight: "10px" }}
        />
        <button onClick={addTask} style={{ padding: "5px" }}>
          Add Task
        </button>
        <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
          {tasks.map((task, index) => (
            <li
              key={index}
              style={{
                marginBottom: "10px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span style={{ flex: 1 }}>{task}</span>
              <button
                onClick={() => removeTask(index)}
                style={{
                  padding: "5px",
                  marginLeft: "10px",
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default TodoList;