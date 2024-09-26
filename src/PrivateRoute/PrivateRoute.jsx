import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
function PrivateRoute({Component,isAuthenticated}) {

    const navigate = useNavigate()
    useEffect(()=>{
        if (isAuthenticated == false){ 
            navigate('/login')
        }
    },[])

  return (
    <div>
      <Component/>
    </div>
  )
}

export default PrivateRoute
