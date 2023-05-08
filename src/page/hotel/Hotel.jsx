import React from "react";
import "./hotel.css";
import Navbar from "../../Componets/Navbar/Navbar";
import Footer from "../../Componets/Footer/Footer";
import { MdOutlineLocationOn } from "react-icons/md";
import {BsCart4} from 'react-icons/bs'
const Hotel = () => {
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="hotelContainer">
        <div className="hotelCart">
          <button className="btn">
            <BsCart4 className="icon"/>
            <span>Cart</span>
          </button>
        </div>
        <div className="hotelWapper">
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <MdOutlineLocationOn className="icon" />
            <span >Elton St 125 new Yord</span>
          </div>
          <span className="hotelDistance">
            Excellent location 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a say over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo) => (
              <div className="hotelImgWapper">
                <img src={photo.src} alt="hello" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsText">
              <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
              <p className="hotelDesc">
                Welcome to the Golden Sands Hotel, located in the heart of
                downtown Miami. Our luxury hotel offers 300 stylishly appointed
                guest rooms and suites, each with stunning views of the city
                skyline or Biscayne Bay.Our signature amenities include a
                rooftop pool and bar, a full-service spa, and a 24-hour fitness
                center. Our on-site restaurant, the Golden Grill, serves
                contemporary American cuisine in a sophisticated setting.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night day</h1>
              <span>
                Located in the real heart of Krakow, this property has an 
                excellent location scose of 9.8;
              </span>
              <h2>
                <b>$3475</b> <p>(9 ngiht)</p>
              </h2>
              <button className="btn">
              <BsCart4 className="icon"/>
              <span>Book Now</span></button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Hotel;
