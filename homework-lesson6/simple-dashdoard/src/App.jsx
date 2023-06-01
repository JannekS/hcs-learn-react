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
      <main className="flex flex-row justify-between p-4 h-full bg-">
        {todos.length > 0 ? <TodoList todos={todos} /> : <p>Please wait</p>}
        {/* <div className="flex flex-col justify-start w-5/12 h-full bg-red-200">
          <div className="h-1/2 w-full">
            <h2>Current weather</h2>
          </div>
          <div className="h-1/2 w-full">
            <h2>Distraction</h2>
          </div>
        </div> */}
      </main>
    </>
  );
}

export default App;
