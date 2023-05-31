import { useState, useEffect } from "react";

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
    console.log(todos);
  }, []);

  return (
    <>
      <h1>My Simple Dashboard</h1>
      <h2>{todos.length}</h2>
    </>
  );
}

export default App;
