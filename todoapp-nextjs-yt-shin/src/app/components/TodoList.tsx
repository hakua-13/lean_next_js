import React from 'react'

export const TodoList = () => {
  return (
    <ul className="space-y-2">
      <li className="flex justify-between p-4 bg-white  border-l-4 border-blue-500 rounded shadow">
        <span>散歩</span>
        <div>
          <button className="mr-3 text-sm text-green-500">Edit</button>
          <button className="text-sm text-red-500">Delete</button>
        </div>
      </li>
      <li className="flex justify-between p-4 bg-white  border-l-4 border-blue-500 rounded shadow">
        <span>散歩</span>
        <div>
          <button className="mr-3 text-sm text-green-500">Edit</button>
          <button className="text-sm text-red-500">Delete</button>
        </div>
      </li>
      <li className="flex justify-between p-4 bg-white  border-l-4 border-blue-500 rounded shadow">
        <span>散歩</span>
        <div>
          <button className="mr-3 text-sm text-green-500">Edit</button>
          <button className="text-sm text-red-500">Delete</button>
        </div>
      </li>
      <li className="flex justify-between p-4 bg-white  border-l-4 border-blue-500 rounded shadow">
        <span>散歩</span>
        <div>
          <button className="mr-3 text-sm text-green-500">Edit</button>
          <button className="text-sm text-red-500">Delete</button>
        </div>
      </li>
    </ul>
  )
}
 