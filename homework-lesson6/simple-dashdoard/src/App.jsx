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
      <main className="p-4">
        <h1 className="my-2 text-lg font-bold">My Simple Dashboard</h1>
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
