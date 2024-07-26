import React, { useReducer, useState } from "react";

const taskreducer = (state, action) => {
  switch (action.type) {
    case "Add_task":
      return [
        ...state,
        { id: Date.now(), Text: action.payload, completed: false },
      ];
    case "Remove":
      return state.filter((task) => task.id !== action.payload);

    case "Toogle_task":
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );

    default:
      return state;
  }
};

const Question22 = () => {
  const [tasks, dispatch] = useReducer(taskreducer, []);

  const [TaskText, setTaskText] = useState("");

  const addTask = () => {
    dispatch({ type: "Add_task", payload: TaskText });
  };
  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={TaskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Add new task"
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              style={{
                textDecoration: task.completed ? "Line-through" : "none",
              }}
              onClick={() => dispatch({ type: Toogle_task, payload: task.id })}
            >
              {task.Text}
            </span>
            <button
              onClick={() => dispatch({ type: "Remove", payload: task.id })}
            >
              {" "}
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question22;
