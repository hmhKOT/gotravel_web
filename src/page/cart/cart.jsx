import React from 'react';
import Navbar from '../../Componets/Navbar/Navbar';
import Footer from '../../Componets/Footer/Footer';
import './cart.css';
import img1 from '../../Assets/img(1).jpg'
import img2 from '../../Assets/img(2).jpg'
import img3 from '../../Assets/img(3).jpg'
import img4 from '../../Assets/img(4).jpg'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {BsFillPencilFill} from 'react-icons/bs'
import {AiOutlineUser} from 'react-icons/ai'
import {HiOutlineClipboardList} from 'react-icons/hi'
import {AiTwotoneBell} from 'react-icons/ai'
import {FaWarehouse} from 'react-icons/fa'
import {BiFirstPage} from 'react-icons/bi'
import {BiLastPage} from 'react-icons/bi'

import img5 from '../../Assets/img(5).jpg'

const cart = () => {
    const items = [
        {
          id: 1,
          name: 'Paris',
          img: img1,
          room: 2,
          people: 4,
          money: '$50',
          date: '2023-05-04T10:30:00',
          description: 'Paris is the capital city of France and is known for its iconic landmarks such as the Eiffel Tower, the Louvre Museum, and Notre-Dame Cathedral.'
        },
        {
          id: 2,
          name: 'New York',
          img: img2,
          room: 1,
          people: 2,
          money: '$20',
          date: '2023-05-05T11:00:00',
          description: 'New York City is the most populous city in the United States and is known for its iconic landmarks such as the Statue of Liberty, the Empire State Building, and Central Park.'
        },
        {
          id: 3,
          name: 'Tokyo',
          img: img3,
          room: 3,
          people: 6,
          money: '$100',
          date: '2023-05-06T12:30:00',
          description: 'Tokyo is the capital city of Japan and is known for its bustling streets, neon lights, and unique culture.'
        },
        {
          id: 4,
          name: 'Rome',
          img: img4,
          room: 1,
          people: 3,
          money: '$30',
          date: '2023-05-07T13:00:00',
          description: 'Rome is the capital city of Italy and is known for its ancient architecture, including the Colosseum and the Roman Forum, as well as its delicious cuisine.'
        },
        {
          id: 5,
          name: 'Sydney',
          img: img5,
          room: 2,
          people: 4,
          money: '$75',
          date: '2023-05-08T14:30:00',
          description: 'Sydney is the largest city in Australia and is known for its beautiful harbour, iconic Opera House, and stunning beaches.'
        }
       
      ];
  return (
    <>
       <Navbar/>
        <div className="cartContainer">
            <div className="option">
                 <div className="userFace">
                  <div className="logo">
                    <h1>H</h1>
                  </div>
                  <div className="detailUser">
                    <h3 className="userName">hoangminhho...</h3>
                    <a href="#" > 
                       <BsFillPencilFill className="icon"/>
                       <span>Sửa hồ sơ </span>
                    </a>
                  </div>
                 </div>
                 <div className="onptionItem">
                  <AiOutlineUser className="icon"/>
                  <span>Tài Khoản Của Tôi</span>
                 </div>
                 <div className="onptionItem">
                  <HiOutlineClipboardList className="icon"/>
                  <span>Đơn Mua</span>
                 </div>
                 <div className="onptionItem">
                  <AiTwotoneBell className="icon"/>
                  <span>Thông Báo</span>
                 </div>
                 <div className="onptionItem">
                  <FaWarehouse className="icon"/>
                  <span>Kho</span>
                 </div>

            </div>
            <div className="cartWapper flex">
               {
                items.map(({id,name,img,room,people,money,date,description})=>{
                   return(
                    <div key={id} className="itemCart">
                    <div className="cartTile ">
                        <h3 className="nameTitle flex">
                           <HiOutlineLocationMarker className="icon"/> {name}
                        </h3>
                        <span className="dateTitle">
                            {date}
                        </span>
                    </div>
                    <div className="cartInfo">
                        <img src = {img} alt="#"/>
                        <div className="placeInfo">
                           <span>Description:</span>
                           <p> {description}</p>
                        </div>
                        <div className="numnerInfo">
                        <div className="roomInfo">
                            <span>Room :</span>
                            <span>{room}</span>
                        </div>
                        <div className="roomInfo">
                            <span>People :</span>
                            <span>{people}</span>
                        </div>
                        <div className="roomInfo">
                            <span>Price :</span>
                            <span>{money}</span>
                        </div>
                        </div>
                    </div>
                    <div className="button">
                    <button className="btn">Detail</button>
                        <button className="btn">Pay</button>
                        <button className="btn">Remove</button>
                    </div>
                    </div>

                   )
                })
               }
               <div className="pageChange">
               <button className="btn"><BiFirstPage className='icon'/> </button>
               <button className="btn"><BiLastPage className='icon'/> </button>
              
               </div>
            </div>
        </div>
       <Footer/> 
    </>
  )
}

export default cart
