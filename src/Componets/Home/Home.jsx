import React, { useEffect } from 'react';
import './home.css'
import video from '../../../src/Assets/video1.mp4'
import {GrLocation} from 'react-icons/gr'
import {HiFilter} from  'react-icons/hi'
import {FiFacebook} from  'react-icons/fi'
import {AiFillInstagram} from  'react-icons/ai'
import {FaTiktok} from  'react-icons/fa'
import {BsListTask} from  'react-icons/bs'
import {TbApps} from  'react-icons/tb'
import Aos from 'aos';
import 'aos/dist/aos.css'
const Home = () => {
 useEffect(()=>{
  Aos.init({duration: 3000});
 },[])



  return (
         <section className="home">
         <div className="overlay"> </div>
         <video src={video} muted autoPlay loop type="video/mp4" ></video>
         <div className="homeContent container">

         <div className="textDiv">


         <sapn data-aos="fade-up" className="smallText">
          Our Packages  
         </sapn>


         <h1 className="homeTitle" data-aos="fade-up">
         Search your holiday
         </h1>

         </div>
         <div data-aos="fade-up" className="cardDiv grid">
           <div className="destinationInput">
           <label htmlFor='city' >
           Search your destination :
           </label>
           <div className="input flex">
           <input type='text' placeholder='Enter name here...'/>
           <GrLocation className='icon'/>

           </div>

           </div>
           <div className="dateInput">
           <label htmlFor='date' >
           Select Your date :
           </label>
           <div className="input flex">
           <input type='date' />
           </div>

           </div>
           <div className="priceInput">
             <div className='label_total flex'>
               <label htmlFor='price' >Max price : </label>
               <h3 className='total'>$50000</h3>
             </div>
             <div className='input flex'>
               <input type='range' max='50000'
                min="1000" />
             </div>
           </div>
             <div className='searchOptions flex'>
                   <HiFilter className='icon'/>
                   <span>MORE FILTER</span>
             </div>

         </div>
         <div data-aos="fade-up" className='homeFooterIcons flex'>
           <div className='rightIcons'>
             <FiFacebook className='icon'/>
             <AiFillInstagram className='icon'/>
             <FaTiktok className='icon'/>
           </div>
           <div className='leftIcons'>
           <BsListTask className='icon'/>
           <TbApps className='icon'/>
           </div>

         </div>
         </div>
         </section>
  )
}

export default Home