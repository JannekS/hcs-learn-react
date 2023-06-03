import { useState } from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos }) {
  const [todoItems, setTodoItems] = useState(todos);
  const [newTodo, setNewTodo] = useState("");
  let displayedTodos = todoItems;
  let nextId = 300;

  function addNewTodo() {
    setTodoItems([
      { id: nextId, title: newTodo, uderId: 1, completed: false },
      ...todoItems,
    ]);
    nextId++;
  }

  return (
    <div className="h-full w-1/2 ">
      <h2 className="my-4 text-md font-bold">My Todos:</h2>
      <div className="flex flex-row items-center w-80">
        <input
          className="flex-1 rounded-md bg-blue-100 text-sm my-2 mr-2 p-2"
          type="text"
          placeholder="Add new task"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button
          className="p-2  bg-blue-500 text-slate-800 text-sm rounded-md shadow-md shadow-indigo-100 hover:bg-blue-700 hover:text-blue-50 active:shadow-sm active:bg-blue-600 duration-150"
          onClick={addNewTodo}
        >
          Add task
        </button>
      </div>

      <ul className="flex flex-col space-y-2 h-96 overflow-auto mt-4">
        {displayedTodos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
