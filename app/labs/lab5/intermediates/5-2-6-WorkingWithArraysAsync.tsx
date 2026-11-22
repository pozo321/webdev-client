"use client";
import { useEffect, useState } from "react";
import { FaPencilAlt, FaPlusCircle, FaTrash } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import axios from "axios";
import * as client from "../client";
import type { Todo } from "../client";
export default function WorkingWithArraysAsync() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const removeTodo = async (todo: Todo) => {
    const updatedTodos = await client.removeTodo(todo);
    setTodos(updatedTodos);
  };
  const createNewTodo = async () => {
    const todos = await client.createNewTodo();
    setTodos(todos);
  };
  const postNewTodo = async () => {
    const newTodo = await client.postNewTodo({
      title: "New Posted Todo",
      completed: false,
    });
    setTodos([...todos, newTodo]);
  };
  const deleteTodo = async (todo: Todo) => {
    try {
      await client.deleteTodo(todo);
      const newTodos = todos.filter((t) => t.id !== todo.id);
      setTodos(newTodos);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setErrorMessage(error.response?.data.message);
      }
    }
  };
  const editTodo = (todo: Todo) => {
    const updatedTodos = todos.map((t) =>
      t.id === todo.id ? { ...todo, editing: true } : t
    );
    setTodos(updatedTodos);
  };
  const updateTodo = async (todo: Todo) => {
    try {
      await client.updateTodo(todo);
      setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setErrorMessage(error.response?.data.message);
      }
    }
  };
  useEffect(() => {
    client.fetchTodos().then(setTodos);
  }, []);
  return (
    <div id="wd-asynchronous-arrays">
      <h3>Working with Arrays Asynchronously</h3>
      {errorMessage && (
        <p id="wd-todo-error-message"
          className="rounded bg-red-100 px-3 py-2 text-red-800">
          {errorMessage}
        </p>
      )}
      <h4>
        Todos
        <FaPlusCircle onClick={createNewTodo} id="wd-create-todo"
          className="ml-2 inline cursor-pointer text-green-600" />
        <FaPlusCircle onClick={postNewTodo} id="wd-post-todo"
          className="ml-2 inline cursor-pointer text-blue-600" />
      </h4>
      <ul className="list-none">
        {todos.map((todo) => (
          <li key={todo.id} className="mb-2">
            <input type="checkbox" checked={todo.completed}
              className="mr-2"
              onChange={(e) => updateTodo({ ...todo, completed: e.target.checked })} />
            <span className={todo.completed ? "line-through" : ""}>
              {todo.title}
            </span>
            {todo.editing && (
              <input value={todo.title}
                className="ml-2 rounded border px-2 py-1"
                onChange={(e) =>
                  setTodos(todos.map((t) =>
                    t.id === todo.id ? { ...t, title: e.target.value } : t))
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    updateTodo({ ...todo, editing: false });
                  }
                }} />
            )}
            <FaTrash onClick={() => removeTodo(todo)} id="wd-remove-todo"
              className="ml-2 inline cursor-pointer text-red-600" />
            <TiDelete onClick={() => deleteTodo(todo)} id="wd-delete-todo"
              className="ml-2 inline cursor-pointer text-red-600" />
            <FaPencilAlt onClick={() => editTodo(todo)}
              className="ml-2 inline cursor-pointer text-blue-600" />
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}
