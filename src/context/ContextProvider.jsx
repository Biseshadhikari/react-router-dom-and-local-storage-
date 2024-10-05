import React, { createContext, useState } from 'react'

export const UserContext = createContext()

function ContextProvider({children}) {
  const [username,setUsername] = useState('bisesh adhikari')
  return (
    <div>
      <UserContext.Provider value = {{}}>
        {children}
      </UserContext.Provider>
    </div>
  )
}

export default ContextProvider



