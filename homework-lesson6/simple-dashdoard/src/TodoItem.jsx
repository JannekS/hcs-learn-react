import { useState } from "react";

function TodoItem({ todo }) {
  const [completed, setCompleted] = useState(todo.completed);
  let doneClass = completed ? "line-through text-gray-400" : "text-blue-900";
  return (
    <li
      className={`flex flex-row space-x-4 items-center w-80 bg-blue-50 rounded-sm py-1 px-2 ${doneClass}`}
    >
      <input
        type="checkbox"
        className="accent-blue-300"
        checked={completed}
        onChange={() => setCompleted(!completed)}
      />
      <p>{todo.title}</p>
    </li>
  );
}

export default TodoItem;
