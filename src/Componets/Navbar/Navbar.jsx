import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './navbar.css' 
import '../../App.css'

import  {MdOutlineTravelExplore}  from 'react-icons/md';
import {AiFillCloseCircle} from 'react-icons/ai';
import {TbGridDots} from 'react-icons/tb'
import {FaUserCircle} from 'react-icons/fa';
const Navbar = () => {
     
     const [active,setActive] = useState('navBar');
     //Function to toggle navBar
     const showNav = ()=>{
      setActive('navBar activeNavbar');
     }
      // Funtion to remove navBar;
      const removeNav = ()=>{
        setActive('navBar');
      }
  return (
    <section className="navBarSection">
       <header className="header flex">
            <div className="logoDiv">
                    <a href='http://gooogle.com' className="logo flex" >
                      <h1><MdOutlineTravelExplore className="icon"/>GO TRAVEL</h1>
                 </a>
            </div>
            <div className={active}>
            <ul className="navLists flex">
             <li className="navItem">
              <Link to="/"  className="navLink">Home</Link>
             </li>
             <li className="navItem">
              <Link to="/install" className="navLink">Install App</Link>
             </li>
             <li className="navItem">
              <Link   to="/hotels"  className="navLink">Booking</Link>
             </li>
               
             <li className="navItem">
              <Link  to="/cart" className="navLink">Cart</Link>
             </li>
             <li className="navItem">
              <Link  to="/contact" className="navLink">Contacts</Link>
             </li>
             <Link  to="/login">
             <button className="btn">
              <FaUserCircle className="icon" />
                   <a>Login</a>
             </button></Link>

            </ul>
            <div onClick={removeNav} 
            className="closeNavbar">
                     <AiFillCloseCircle className="icon"/>
            </div>
            </div>
            <div onClick={showNav} 
            className="toggleNavbar">
              <TbGridDots className="icon"/>
            </div>
       </header>
    </section>
  )
}

export default Navbar