import { useState } from "react";
import { useTodosContext } from "./todosContext";

export default function ReactContextTodoList() {
  const { todos, addTodo, updateTodo, deleteTodo } = useTodosContext();
  const [title, setTitle] = useState("");
  return (
    <div id="wd-context-todo-list">
      <h3>Context Todo List</h3>
      <input
        className="me-2 rounded border border-neutral-300 px-3 py-1.5"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        id="wd-context-todo-title"
      />
      <button
        type="button"
        onClick={() => {
          addTodo(title);
          setTitle("");
        }}
        id="wd-context-todo-add-click"
        className="mb-2 rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Add
      </button>
      <ul className="m-0 max-w-md list-none p-0">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="mb-1 flex items-center justify-between rounded border border-neutral-200 px-3 py-1"
          >
            <input
              className="me-2 w-full rounded border border-neutral-300 px-2 py-0.5"
              value={todo.title}
              onChange={(e) => updateTodo(todo.id, e.target.value)}
            />
            <button
              type="button"
              onClick={() => deleteTodo(todo.id)}
              id={`wd-context-todo-delete-${todo.id}-click`}
              className="rounded bg-red-600 px-2 py-0.5 text-sm font-medium text-white"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
