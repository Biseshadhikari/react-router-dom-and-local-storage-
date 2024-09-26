import React from 'react'

function TodoList(props) {
  return (
    <div>
     <ul className="space-y-2">
                        <li className="flex justify-between items-center p-2 border rounded-lg">
                          <span>{props.todo.title}</span>
                          <div className="flex space-x-2">
                            <button className="bg-gray-200 px-2 py-1 rounded-lg">Complete</button>
                            <button className="bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600">Delete</button>
                          </div>
                        </li>
      </ul>
    </div>
  )
}

export default TodoList
  