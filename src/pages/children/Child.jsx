import React from 'react'
import GrandChild from './GrandChild'

function Child({messagetomygrandchild}) {
  return (
    <div>
      <GrandChild messagetomygrandchild = {messagetomygrandchild}/>
    </div>
  )
}

export default Child
