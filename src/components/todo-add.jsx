import React from "react";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { ToDoContext } from "../todo-context";

export const ToDoAdd = () => {
  const { onAdd } = useContext(ToDoContext);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-900 dark:bg-gradient-to-br dark:from-purple-600 dark:to-pink-600 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-gray-200 mb-4">Add To Do</h1>
      <form onSubmit={handleSubmit(onAdd)} className="space-y-4">
        <p id="message" className="text-sm text-amber-400"></p>

        <div className="flex flex-col">
          {errors.text && (
            <p className="text-sm text-amber-400">{errors.text.message}</p>
          )}
          <label className="text-gray-400 mb-1">Text</label>
          <input
            {...register("text", { required: "please fill the field" })}
            type="text"
            className="p-2 bg-gray-800 text-gray-300 dark:bg-pink-100 dark:text-purple-800 rounded-lg focus:ring-purple-400 focus:outline-none"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-400 mb-1">Description</label>
          <input
            {...register("description")}
            type="text"
            className="p-2 bg-gray-800 text-gray-300 dark:bg-pink-200 text-purple-800 rounded-lg focus:border-purple-400 focus:outline-none"
          />
        </div>

        <button className="w-full px-4 py-2 text-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg hover:bg-gradient-to-r hover:from-pink-400 hover:to-purple-500">
          Save
        </button>
      </form>
    </div>
  );
};
