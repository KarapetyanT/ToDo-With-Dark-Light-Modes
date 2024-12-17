import React from "react";
import { ToDoItem } from "./todo-item";
import { useContext } from "react";
import { ToDoContext } from "../todo-context";

export const List = () => {
  const { todos, currentFilter } = useContext(ToDoContext);
  const list =
    currentFilter === "all"
      ? todos
      : currentFilter === "active"
      ? todos.filter((todo) => !todo.completed)
      : currentFilter === "completed"
      ? todos.filter((todo) => todo.completed)
      : currentFilter.startsWith("category")
      ? todos.filter((todo) => todo.category === currentFilter.split("-")[1])
      : todos;

  return (
    <div className="space-y-4 p-4 bg-gray-800 dark:bg-gradient-to-br dark:from-purple-300 dark:to-pink-300 rounded-lg shadow-lg">
      {list.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
