import React from 'react'
import Users from './Pages/Users'
import Planes from './Pages/Planes'
import Routs from './Pages/Routes'
import Orders from './Pages/Orders'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import NewNavbar from './Components/NewNavbar'


const App = () => {
  return (
    <Router>

      <NewNavbar />
      
      <Routes>
        <Route path='/' element={<Users />} />
        <Route path='/planes' element={<Planes />} />
        <Route path='/routes' element={<Routs />} />
        <Route path='/orders' element={<Orders />} />
      </Routes>
    </Router>
  )
}

export default App