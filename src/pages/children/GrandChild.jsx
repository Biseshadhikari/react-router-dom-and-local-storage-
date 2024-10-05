import React, { useContext } from 'react'
import { useAuthContext } from '../../context/ContextProvider'

function GrandChild({messagetomygrandchild}) {
    const {username} = useAuthContext()
  return (
    <div>
      <br />
      This is grandfather message : {username}
    </div>
  )
}

export default GrandChild
