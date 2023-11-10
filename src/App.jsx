import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Home'
import Register from './Register'
import Login from './Login'
function App() {
  return (
<Routes>
  <Route path='/home' element={<Home/>}/>
  <Route path='/register'element={<Register/>}/>
  <Route path='/'element={<Login/>}/>

</Routes>

  )
}

export default App