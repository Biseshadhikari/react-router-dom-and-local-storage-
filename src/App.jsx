import React,{useState} from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Layout from './layout/Layout'
import PrivateRoute from './PrivateRoute/PrivateRoute'
import Login from './pages/Login'
import Todolists from './pages/Todolists'
import Parent from './pages/Parent'
import ContextProvider from './context/ContextProvider'
function App() {
  const [messagetomygrandchild,setMessageToMyGrandChild] = useState('bless you')
  return (
    <div>

      <Layout>
        <Routes>
          <Route path='/' element = {<PrivateRoute Component = {Home} isAuthenticated = {false} />} />
          <Route path='/about' element = {<About/>} />
          <Route path='/contact' element = {<Contact/>} />
          <Route path='/services' element = {<Services/>} />
          <Route path='/login' element = {<Login/>} />
          <Route path='/todo' element = {<Todolists/>} />
          <Route path='/parent' element = {<Parent />} />
        </Routes> 
      </Layout>


    
    </div>
  )
}

export default App
