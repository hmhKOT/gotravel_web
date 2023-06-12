import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Myhome  from './page/myhome/Myhome'
import List  from './page/list/List'
import Hotel  from './page/hotel/Hotel'
import Cart from './page/cart/cart'
import Download from './page/downapp/Down'
import Contact from './page/contacts/Contact';
import Login from './page/Login/Login';
import Register from './page/Login/Register';
import { Provider } from "react-redux";
import store from './page/store'

const App = () => {
 
  return (
    <Provider store={store}>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Myhome/>} />  
      <Route path="/hotels" element={<List/>} /> 
      <Route path="/hotels/:id" element={<Hotel/>} /> 
     <Route path="/cart" element={<Cart/>}/> 
     <Route path="/install" element={<Download/>}/>
     <Route path='/contact' element= {<Contact/>}/> 
     <Route path='/login' element={<Login/>}/> 
      <Route path='/register' element={<Register/>}/>
     </Routes>
   
   </BrowserRouter>
  </Provider>
 
  )
}

export default App