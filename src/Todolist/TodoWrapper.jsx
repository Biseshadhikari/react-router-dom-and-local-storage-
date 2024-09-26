import React, { useEffect, useState } from 'react'
import TodoCreate from './TodoCreate';
import TodoList from './TodoList';
function TodoWrapper() {
  const [todos,setTodos] = useState([])
  const [isLoading,setIsLoading] = useState(true)

  function createTodo(title){ 
    setTodos(prev=>[...prev,{
      'id':Date.now(),
      'title':title

    }])

    
   
  }
  useEffect(()=>{ 
    const data = JSON.parse(localStorage.getItem('todos'))
    if (data && data.length >0){ 
      setTodos(data)
      setIsLoading(false)
    }
    
  },[])
 

  
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos]); 
  

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
          {isLoading?(
            <h1 className='font-bold text-xl text-center text-red-500'> loading....</h1>
          ):(
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">Todo List</h1>
    
            <TodoCreate createTodo ={createTodo} />
            {todos.map(todo=>{
              
                return (
                  <TodoList key = {todo.id} todo = {todo}/>
                )
            })}
            
          </div>
          )}
        </div>
      );
    };


export default TodoWrapper
