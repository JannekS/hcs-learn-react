import { useState } from "react";
import "./App.css";

function App() {
  let nextId = 1;
  const [todoList, setTodoList] = useState([
    { id: 1, task: "Add more todos!", assignedTo: "all" },
  ]);

  const [newTodo, setNewTodo] = useState();

  return (
    <div>
      <h2>Team TODOs:</h2>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>{`${todo.task} @${todo.assignedTo}`} </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Add a new todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button
        onClick={() =>
          setTodoList([
            ...todoList,
            { id: nextId++, task: newTodo, assignedTo: "John" },
          ])
        }
      >
        Add todo
      </button>
    </div>
  );
}

export default App;
