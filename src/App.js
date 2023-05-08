import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Myhome  from './page/myhome/Myhome'
import List  from './page/list/List'
import Hotel  from './page/hotel/Hotel'
import Cart from './page/cart/cart'
import Download from './page/downapp/Down'
import Contact from './page/contacts/Contact';


const App = () => {
  return (
   <BrowserRouter>
     <Routes>
      <Route path="/" element={<Myhome/>} />  
      <Route path="/hotels" element={<List/>} /> 
      <Route path="/hotels/:id" element={<Hotel/>} /> 
     <Route path="/cart" element={<Cart/>}/> 
     <Route path="/install" element={<Download/>}/>
     <Route path='/contact' element= {<Contact/>}/> 

      
     </Routes>
   
   </BrowserRouter>
  )
}

export default App