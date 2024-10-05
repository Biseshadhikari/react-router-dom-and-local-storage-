import React, { useContext } from 'react'
import { useAuthContext } from '../context/ContextProvider'
function Contact() {
  const {username} = useAuthContext()
  return (
    <div>
      {username}
      This is contact page
    </div>
  )
}

export default Contact
