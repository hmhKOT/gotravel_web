import React from 'react'
import Navbar from '../../Componets/Navbar/Navbar'
import Footer from '../../Componets/Footer/Footer'
import './down.css'
import imgQr from '../../Assets/qr.png'
import imgCHP from '../../Assets/goolePlay.png'
import imgAPP from '../../Assets/appStore.png'
import imgBg from '../../Assets/background.jpg'

const Down = () => {
  return (
   <>
      <Navbar/>
         <div className="installContainer">
            <img className='background' src={imgBg}/>
            <div className="installWapper">
              <h1 className="installTitle">Install App</h1>
              <div className="installQr">
              <img src={imgQr}/>
              </div>
              <div className="downMarket">
              <img src={imgCHP}/>
              <img src={imgAPP}/>
              </div>
            </div>
         </div>
      <Footer/>
   </>
  )
}

export default Down
