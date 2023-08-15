import React from 'react'

export const AddTask = () => {
  return (
    <form className="mb-4 space-y-3">
      <input type="text" className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500"/>
      <button className="w-full px-4 py-2 border-b-4 border-blue-900/50  text-white bg-blue-500 rounded-lg hover:translate-y-1 hover:border-white duration-75">Add Task</button>
    </form>
  )
}