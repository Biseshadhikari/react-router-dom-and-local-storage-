import React, { useState } from 'react'

function TodoList(props) {
  const [data,setData] = useState(props.todo.title)
  return (
    <div>
     {props.todo.isUpdatable == true?( 
        <form onSubmit = {()=>{ 
          props.update(data,props.todo.id)
        }} class="flex items-center space-x-2">
        <input value = {data} onChange = {(e)=>{ 
          setData(e.target.value)

        }} type="text" placeholder="Enter your update" class="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        <button class="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Update
        </button>
      </form>
     ):(
      <ul className="space-y-2">
                        <li className="flex justify-between items-center p-2 border rounded-lg">
                          <span>{props.todo.title}</span>
                          <div className="flex space-x-2">
                            <button className="bg-gray-200 px-2 py-1 rounded-lg" onClick={()=>{ 
                              props.changeUpdatable(props.todo.id)
                            }} >update</button>
                            <button className="bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600" onClick={()=>{ 
                              props.deleteTodo(props.todo.id)
                            }}>Delete</button>
                          </div>
                        </li>
      </ul>
     )}
      
     
    </div>
  )
}

export default TodoList
