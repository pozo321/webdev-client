"use client";
import { useState } from "react";
import { httpServer } from "@/app/lib/httpServer";
export default function WorkingWithArrays() {
  const HTTP_SERVER = httpServer();
  const API = `${HTTP_SERVER}/lab5/todos`;
  const [todo, setTodo] = useState({
    id: "1", title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS", completed: false,
  });
  return (
    <div id="wd-working-with-arrays">
      <h3>Working with Arrays</h3>
      <h4>Retrieving Arrays</h4>
      <a id="wd-retrieve-todos" className="text-blue-700 underline" href={API}>
        Get Todos
      </a>
      <hr />
      <h4>Retrieving an Item from an Array by ID</h4>
      <a id="wd-retrieve-todo-by-id" className="mr-2 text-blue-700 underline"
        href={`${API}/${todo.id}`}>
        Get Todo by ID
      </a>
      <input id="wd-todo-id" value={todo.id}
        className="rounded border px-2 py-1"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })} />
      <hr />
      <h4>Filtering Array Items</h4>
      <a id="wd-retrieve-completed-todos" className="text-blue-700 underline"
        href={`${API}?completed=true`}>
        Get Completed Todos
      </a>
      <hr />
      <h4>Creating new Items in an Array</h4>
      <a id="wd-create-todo" className="text-blue-700 underline"
        href={`${API}/create`}>
        Create Todo
      </a>
      <hr />
      <h4>Removing from an Array</h4>
      <a id="wd-remove-todo" className="text-blue-700 underline"
        href={`${API}/${todo.id}/delete`}>
        Remove Todo with ID = {todo.id}
      </a>
      <hr />
      <h4>Updating an Item in an Array</h4>
      <a href={`${API}/${todo.id}/title/${todo.title}`} id="wd-update-todo-title"
        className="mr-2 text-blue-700 underline">
        Update Todo
      </a>
      <input value={todo.id}
        className="mr-2 rounded border px-2 py-1"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })} />
      <input value={todo.title}
        className="rounded border px-2 py-1"
        onChange={(e) => setTodo({ ...todo, title: e.target.value })} />
      <br />
      <a href={`${API}/${todo.id}/completed/${todo.completed}`} id="wd-update-todo-completed"
        className="mr-2 text-blue-700 underline">
        Complete Todo ID = {todo.id}
      </a>
      <input type="checkbox" checked={todo.completed}
        onChange={(e) => setTodo({ ...todo, completed: e.target.checked })} />
      <br />
      <a href={`${API}/${todo.id}/description/${todo.description}`} id="wd-update-todo-description"
        className="mr-2 text-blue-700 underline">
        Describe Todo ID = {todo.id}
      </a>
      <input value={todo.description}
        className="rounded border px-2 py-1"
        onChange={(e) => setTodo({ ...todo, description: e.target.value })} />
      <hr />
    </div>
  );
}
