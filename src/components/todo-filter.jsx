import React from "react";
import { useContext } from "react";
import { ToDoContext } from "../todo-context";

export const ToDoFilter = () => {
  const { filters, currentFilter, onFilter } = useContext(ToDoContext);

  const fixedFilters = ["all", "active", "completed"];
  const categories = filters.filter((filter) => !fixedFilters.includes(filter));

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4 my-4 bg-gray-800 dark:bg-gradient-to-br dark:from-purple-400 dark:to-pink-600 rounded-lg shadow-lg">
      <p className="text-gray-400 dark:text-violet-200">
        Current Filter:{" "}
        <strong className="text-violet-200">{currentFilter}</strong>
      </p>

      <div className="flex gap-4">
        {fixedFilters.map((filter) => (
          <label
            key={filter}
            className="flex items-center space-x-2 text-gray-300 dark:text-violet-100"
          >
            <input
              value={filter}
              checked={filter === currentFilter}
              onChange={(e) => onFilter(e.target.value)}
              type="radio"
              name="filter"
              className="text-gray-400 dark:text-violet-400 focus:ring-violet-400 focus:ring-offset-gray-900"
            />
            <span className="dark:text-violet-100">
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </span>
          </label>
        ))}
      </div>

      <div className="w-full max-w-xs">
        <select
          value={currentFilter}
          onChange={(e) => onFilter(e.target.value)}
          className="w-full p-2 text-gray-700 dark:text-violet-800 bg-gray-200 rounded-md"
        >
          <option>Select a Category</option>
          {categories.map((category) => (
            <option
              key={category}
              value={category}
              className="text-gray-800 dark:text-violet-800"
            >
              {category.replace("category-", "")}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
