import React,{useEffect} from 'react'
import './list.css'
import Navbar from "../../Componets/Navbar/Navbar";
import Footer from "../../Componets/Footer/Footer";
import {AiOutlineSearch} from 'react-icons/ai'
import {HiOutlineClipboardCheck} from 'react-icons/hi'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import img1 from '../../Assets/img(1).jpg'
import img2 from '../../Assets/img(2).jpg'
import img3 from '../../Assets/img(3).jpg'
import img4 from '../../Assets/img(4).jpg'
import img5 from '../../Assets/img(5).jpg'
import img6 from '../../Assets/img(6).jpg'
import img7 from '../../Assets/img(7).jpg'
import img8 from '../../Assets/img(8).jpg'
import img9 from '../../Assets/img(9).jpg'
import Aos from 'aos';
import 'aos/dist/aos.css'
const List = () => {
  useEffect(()=>{
    Aos.init({duration: 3000});
   },[])

  const Data = [
    {
      id: 1,
      img: img1,
      destTitle: 'Paris',
      location: 'France',
      grade: 4.5,
      fees: '$100',
      description:
        'The Eiffel Tower, the Louvre Museum, and Notre-Dame Cathedral are just a few of the many iconic landmarks that draw millions of visitors to Paris each year.',
    },
    {
      id: 2,
      img: img2,
      destTitle: 'New York City',
      location: 'United States',
      grade: 4.8,
      fees: '$150',
      description:
        'New York City is a bustling metropolis that offers something for everyone, from the bright lights of Times Square to the scenic beauty of Central Park.',
    },
    {
      id: 3,
      img: img3,
      destTitle: 'Tokyo',
      location: 'Japan',
      grade: 4.6,
      fees: '$120',
      description:
        'Tokyo is a fascinating city that blends modern technology with ancient traditions, with attractions like the Tokyo Skytree, Tsukiji Fish Market, and Meiji Shrine.',
    },
    {
      id: 4,
      img: img4,
      destTitle: 'Rio de Janeiro',
      location: 'Brazil',
      grade: 4.7,
      fees: '$110',
      description:
        'Rio de Janeiro is a vibrant city known for its beaches, mountains, and lively culture, with attractions like Copacabana Beach, Sugarloaf Mountain, and the Christ the Redeemer statue.',
    },
    {
      id: 5,
      img: img5,
      destTitle: 'Barcelona',
      location: 'Spain',
      grade: 4.4,
      fees: '$90',
      description:
        'Barcelona is a beautiful city on the Mediterranean coast, known for its art, architecture, and vibrant culture, with attractions like the Park Guell, Sagrada Familia, and Gothic Quarter.',
    },
    {
      id: 6,
      img:img6,
      destTitle: 'Sydney',
      location: 'Australia',
      grade: 4.9,
      fees: '$180',
      description:
        'Sydney is a cosmopolitan city with a stunning harbor, beaches, and world-renowned landmarks like the Sydney Opera House and the Harbour Bridge.',
    },
    {
      id: 7,
      img: img7,
      destTitle: 'Bali',
      location: 'Indonesia',
      grade: 4.5,
      fees: '$80',
      description:
        'Bali is a tropical paradise with beautiful beaches, rice terraces, and ancient temples, with attractions like Ubud Monkey Forest, Tanah Lot Temple, and Mount Batur.',
    },
    {
      id: 8,
      img: img8,
      destTitle: 'Dubai',
      location: 'United Arab Emirates',
      grade: 4.7,
      fees: '$200',
      description:
        'Dubai is a modern city known for its towering skyscrapers, luxury shopping, and desert adventures, with attractions like the Burj Khalifa, Dubai Mall, and Dubai Miracle Garden.',
    },
    {
      id: 9,
      img: img9,
      destTitle: 'Cape Town',
      location: 'South Africa',
      grade: 4.6,
      fees: '$130',
      description:
        'Cape Town is a vibrant city with stunning natural beauty, with attractions like Table Mountain, Robben Island, and the Victoria and Alfred Waterfront.',
    }
    
  ];
    
  return (
    <>
      <Navbar />
      <div className="listContainer">
        <div className="listWapper ">
          <div className="listSearch flex  " data-aos="fade-up">
            <h2 className="listTitle">Search</h2>
            <div className="listSearchItem">
              <label>Destiantion:</label>
              <input type="text" />
            </div>
            <div className="listSearchItem">
              <label>Date : </label>
              <input type="date" />
            </div>
            <div className="listSearchItem">
              <label>Number of day : </label>
              <input type="number" />
            </div>
         
             
              <div className="listSearchItem">
              <label>Min-Price :</label>
              <input type="number" />
              </div>
              <div className="listSearchItem">
              <label>Max-Price :</label>
              <input type="number" />
              </div>
              <div className="listSearchItem">
              <label>Room :</label>
              <input type="number" />
              </div>
              <div className="listSearchItem">
              <label>People :</label>
              <input type="number" />
              </div>


          

             <button className="btn flex">
             <span>Search</span>
              <AiOutlineSearch className="icon"/>
              </button>
          </div>
          <div className="listResult">
        
          <div className="secContent grid" data-aos="fade-up">
       {
       Data.map(({id,img,destTitle,location,grade,fees,description})=>{
        return (
          <div key={id} className="singleDestination">
           <div className="imageDiv">
              <img src={img} alt={destTitle}/>
           </div>
           <div className="cardInfo">
            <h4 className="destTitle">
              {destTitle}
            </h4>
            <span className="continent  flex">
              <HiOutlineLocationMarker className="icon"/>
              <span className="name">{location}</span>
            </span>
            <div className="fees flex">
              <div className="grade">
                <span>{grade}<small>+1</small></span>
              </div>
              <div className="price">
                <h5>{fees}</h5>
              </div>
            </div>
            <div className="desc">
              <p>{description}</p>
            </div>
            <button className='btn flex'>
              DETAILS 
              <HiOutlineClipboardCheck className='icon'/>
            </button>
           </div>
          </div>
        )
       })
       }
          

       </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default List;
