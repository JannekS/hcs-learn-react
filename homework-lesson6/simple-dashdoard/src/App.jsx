import { useState, useEffect } from "react";
import AppHeader from "./AppHeader";
import TodoList from "./TodoList";

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
        <TodoList todos={todos} />
      </main>
    </>
  );
}

export default App;
