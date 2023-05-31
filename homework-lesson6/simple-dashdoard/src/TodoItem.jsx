function TodoItem(todo) {
  let doneClass = todo.completed ? "line-through text-gray-300" : "";
  return <li className={`${doneClass} w-76`}>{todo.title}</li>;
}

export default TodoItem;
