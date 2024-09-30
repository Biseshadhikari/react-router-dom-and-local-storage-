import React from 'react'

function TodoList(props) {
  return (
    <div>
     {props.todo.isUpdatable == true?( 
        <div class="flex items-center space-x-2">
        <input type="text" placeholder="Enter your update" class="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        <button onClick={()=>{ 
                              props.changeUpdatable(props.todo.id)
                            }} class="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Update
        </button>
      </div>
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
