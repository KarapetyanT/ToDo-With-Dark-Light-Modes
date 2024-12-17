import React from "react";
import { useContext } from "react";
import { ToDoContext } from "../todo-context";

export const ToDoItem = ({ todo }) => {
  const { onUpdate, onDelete } = useContext(ToDoContext);

  return (
    <div
      className={`flex items-center justify-between p-4 bg-gray-800 dark:bg-gradient-to-br dark:from-purple-700 dark:to-pink-600 rounded-lg shadow-md ${
        todo.completed ? "opacity-40" : ""
      } hover:bg-gray-700 dark:hover:bg-pink-500`}
    >
      <p className="text-gray-300 text-lg font-medium">{todo.text}</p>
      <small className="text-gray-100 text-sm font-medium">
        {todo.description}
      </small>
      <div className="flex space-x-2">
        <button className="px-3 py-1 text-sm font-semibold text-gray-800 bg-pink-500 rounded-md shadow hover:bg-pink-400 dark:text-gray-100 dark:bg-pink-300 dark:hover:bg-pink-400">
          Add Subtask
        </button>
        <button
          onClick={() => onUpdate(todo.id)}
          className="px-3 py-1 text-sm font-semibold text-gray-800 bg-indigo-500 rounded-md shadow hover:bg-indigo-400 dark:text-gray-100 dark:bg-indigo-400 dark:hover:bg-indigo-500"
        >
          {todo.completed ? "Cancel" : "Complete"}
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="px-3 py-1 text-sm font-semibold text-gray-800 bg-indigo-400 rounded-md shadow hover:bg-indigo-300 dark:text-gray-100 dark:bg-indigo-300 dark:hover:bg-indigo-400"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
