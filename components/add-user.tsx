"use client";

import { addUser } from "@/app/add-user";

export default function AddUser() {
  return (
    <div className="bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full my-8">
      <form action={addUser}>
        <button
          type="submit"
          className="bg-indigo-500 py-2 px-4 text-white rounded-md"
        >
          Add a user
        </button>
      </form>
    </div>
  );
}
