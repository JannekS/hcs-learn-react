import TodoItem from "./TodoItem";

function TodoList({ todos }) {
  let displayedTodos = todos;
  console.log(displayedTodos);
  return (
    <div className="h-full w-1/2 ">
      <h2 className="my-4 text-md font-bold">My Todos:</h2>
      <ul className="flex flex-col space-y-4 list-disc ml-4">
        {displayedTodos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
