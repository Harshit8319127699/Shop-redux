import React from 'react'
import "./App.css"
import{Routes,Route}from 'react-router-dom'
import Nav from './components/Navbar/Nav'
import Allproduct from './components/Allproducts/Allproduct'
import Selectedproduct from './components/SelectedProducts/Selectedproduct'
function App() {
  return (
    <div className="main">
<Nav/>
<Routes>
  <Route path='/' element={<Allproduct/>}></Route>
  <Route path='/product/:id' element={<Selectedproduct/>}></Route>

</Routes>

      
    </div>
  )
}

export default App