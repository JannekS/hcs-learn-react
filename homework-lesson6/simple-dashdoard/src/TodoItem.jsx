import { useState } from "react";

function TodoItem({ todo }) {
  const [completed, setCompleted] = useState(todo.completed);
  let doneClass = completed ? "line-through text-gray-300" : "";
  return (
    <li className={`flex flex-row space-x-4  items-center w-80 ${doneClass}`}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => setCompleted(!completed)}
      />
      <p>{todo.title}</p>
    </li>
  );
}

export default TodoItem;
