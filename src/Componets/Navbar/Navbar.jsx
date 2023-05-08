import React,{useState}from 'react'
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
              <a href='#' className="navLink">Home</a>
             </li>
             <li className="navItem">
              <a href='#' className="navLink">Install App</a>
             </li>
             <li className="navItem">
              <a href='#' className="navLink">Shop</a>
             </li>
             <li className="navItem">
              <a href='#' className="navLink">About</a>
             </li>      
             <li className="navItem">
              <a href='#' className="navLink">Contacts</a>
             </li>
             <button className="btn">
              <FaUserCircle className="icon" />
              <a href='#'>Login</a>
             </button>

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