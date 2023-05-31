import { useState, useEffect } from "react";
import AppHeader from "./AppHeader";

function App() {
  const [todos, setTodos] = useState([]);

  async function fetchTodoData() {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/todos?userId=1"
    );
    const todoData = await res.json();
    setTodos(todoData);
  }

  useEffect(() => {
    fetchTodoData();
  }, []);

  return (
    <>
      <AppHeader />
      <main className="p-4">
        <h2 className="my-4 text-md font-bold">My Todos:</h2>
        <ul className="list-disc ml-4">
          {todos.map((todo) => (
            <li>{todo.title}</li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;
