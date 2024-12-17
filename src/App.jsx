import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import { ToDoList } from "./components/todo-list";
import { ToDoContext } from "./todo-context";
import { ThemeSwitcher } from "./components/theme-switcher";

export default function App() {
  const [todos, setTodos] = useState([
    {
      id: 101,
      text: "css task",
      description: "responsiveness",
      completed: false,
      category: "frontend lessons",
      subtasks: [],
    },
    {
      id: 102,
      text: "js task",
      description: "write polyfills",
      completed: true,
      category: "frontend lessons",
      subtasks: [],
    },
    {
      id: 103,
      text: "shopping",
      description: "buy Christmas gifts",
      completed: false,
      category: "personal",
      subtasks: [],
    },
    {
      id: 104,
      text: "go to the gym",
      description: "workout",
      completed: false,
      category: "health",
      subtasks: [],
    },
  ]);

  const [currentFilter, setCurrentFilter] = useState("all");
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    const categories = Array.from(
      new Set(todos.map((todo) => `category-${todo.category}`))
    );
    setFilters(["all", "active", "completed", ...categories]);
  }, [todos]);

  const handleUpdate = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id == id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleAdd = (todo) => {
    setTodos([...todos, { ...todo, completed: false, id: Date.now() }]);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todoItem) => todoItem.id !== id));
  };

  return (
    <>
      <ToDoContext.Provider
        value={{
          todos,
          onUpdate: handleUpdate,
          filters,
          currentFilter,
          onFilter: setCurrentFilter,
          onAdd: handleAdd,
          onDelete: handleDelete,
        }}
      >
        <ToDoList />
        <ThemeSwitcher />
      </ToDoContext.Provider>
    </>
  );
}
