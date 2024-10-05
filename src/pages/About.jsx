import React, { useContext } from 'react'
import { useAuthContext } from '../context/ContextProvider'

function About() {
  const {username} = useAuthContext()
  return (
    <div>
      This is about page {messagetomygrandchild}
    </div>
  )
}

export default About
