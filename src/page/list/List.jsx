import React, { useEffect } from "react";
import "./list.css";
import Navbar from "../../Componets/Navbar/Navbar";
import Footer from "../../Componets/Footer/Footer";

import { HiOutlineClipboardCheck } from "react-icons/hi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaHotel } from "react-icons/fa";
import { MdOutlineAirplaneTicket } from "react-icons/md";
import { AiFillCar } from "react-icons/ai";
import { MdShareLocation } from "react-icons/md";
import { BsCalendarDate } from "react-icons/bs";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { BsArrowCounterclockwise } from "react-icons/bs";
import {FcCheckmark} from "react-icons/fc";
import img1 from "../../Assets/img(1).jpg";
import img2 from "../../Assets/img(2).jpg";
import img3 from "../../Assets/img(3).jpg";
import img4 from "../../Assets/img(4).jpg";
import img5 from "../../Assets/img(5).jpg";
import img6 from "../../Assets/img(6).jpg";
import img7 from "../../Assets/img(7).jpg";
import img8 from "../../Assets/img(8).jpg";
import img9 from "../../Assets/img(9).jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useState } from "react";
import { DateRange } from "react-date-range";
import { format, set } from "date-fns";
import { Link } from "react-router-dom";

const List = (props) => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  const Data = [
    {
      id: 1,
      img: img1,
      name: "Paris",
      location: "France",
      grade: 4.5,
      fees: "$100",
      description:
        "The Eiffel Tower, the Louvre Museum, and Notre-Dame Cathedral are just a few of the many iconic landmarks that draw millions of visitors to Paris each year.",
    },
    {
      id: 2,
      img: img2,
      name: "New York City",
      location: "United States",
      grade: 4.8,
      fees: "$150",
      description:
        "New York City is a bustling metropolis that offers something for everyone, from the bright lights of Times Square to the scenic beauty of Central Park.",
    },
    {
      id: 3,
      img: img3,
      name: "Tokyo",
      location: "Japan",
      grade: 4.6,
      fees: "$120",
      description:
        "Tokyo is a fascinating city that blends modern technology with ancient traditions, with attractions like the Tokyo Skytree, Tsukiji Fish Market, and Meiji Shrine.",
    },
    {
      id: 4,
      img: img4,
      name: "Rio de Janeiro",
      location: "Brazil",
      grade: 4.7,
      fees: "$110",
      description:
        "Rio de Janeiro is a vibrant city known for its beaches, mountains, and lively culture, with attractions like Copacabana Beach, Sugarloaf Mountain, and the Christ the Redeemer statue.",
    },
    {
      id: 5,
      img: img5,
      name: "Barcelona",
      location: "Spain",
      grade: 4.4,
      fees: "$90",
      description:
        "Barcelona is a beautiful city on the Mediterranean coast, known for its art, architecture, and vibrant culture, with attractions like the Park Guell, Sagrada Familia, and Gothic Quarter.",
    },
    {
      id: 6,
      img: img6,
      name: "Sydney",
      location: "Australia",
      grade: 4.9,
      fees: "$180",
      description:
        "Sydney is a cosmopolitan city with a stunning harbor, beaches, and world-renowned landmarks like the Sydney Opera House and the Harbour Bridge.",
    },
    {
      id: 7,
      img: img7,
      name: "Bali",
      location: "Indonesia",
      grade: 4.5,
      fees: "$80",
      description:
        "Bali is a tropical paradise with beautiful beaches, rice terraces, and ancient temples, with attractions like Ubud Monkey Forest, Tanah Lot Temple, and Mount Batur.",
    },
    {
      id: 8,
      img: img8,
      name: "Dubai",
      location: "United Arab Emirates",
      grade: 4.7,
      fees: "$200",
      description:
        "Dubai is a modern city known for its towering skyscrapers, luxury shopping, and desert adventures, with attractions like the Burj Khalifa, Dubai Mall, and Dubai Miracle Garden.",
    },
    {
      id: 9,
      img: img9,
      name: "Cape Town",
      location: "South Africa",
      grade: 4.6,
      fees: "$130",
      description:
        "Cape Town is a vibrant city with stunning natural beauty, with attractions like Table Mountain, Robben Island, and the Victoria and Alfred Waterfront.",
    },
  ];
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOption, setOpenOption] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  const [activeIndex, setActiveIndex] = useState(0);

  const handleOptionTitleClick = (index) => {
    setActiveIndex(index);
  };
  const [destination, setDestination] = useState("");
  const handleDestination = (event) => {
    setDestination(event.target.value);
  };
  // For Flight booking
  const [flightStart, setFlightStart] = useState();
  const [flightEnd, setFlightEnd] = useState();
  const reservePlace = () => {
    let t = flightStart;
    setFlightStart(flightEnd);
    setFlightEnd(t);
  };
  const [dateFlight, setDateFlight] = useState();
  const handleDateFlight = (event) => {
    setDateFlight(event.target.value);
  };
    // For Booking car Rental;
    const [carName,setCarName] = useState();
    const handleCarName = (event) => {
      setCarName(event.target.value);
      
    }
    const [autoDriver,setAutoDriver] = useState(true);
   const [seats,setSeats] = useState(4);

  const [openResultHotels, setopenResultHotelsHotels] = useState(false);

  return (
    <>
      <Navbar />
      <div className="listContainer">
        <div className="listWapper ">
          <div className="findBooking">
            <div className="option">
              <div
                className={`optionTitle ${activeIndex === 0 ? "active" : ""}`}
                onClick={() => handleOptionTitleClick(0)}
              >
                <FaHotel className="icon" />
                <p>Hotel</p>
              </div>
              <div
                className={`optionTitle ${activeIndex === 1 ? "active" : ""}`}
                onClick={() => handleOptionTitleClick(1)}
              >
                <MdOutlineAirplaneTicket className="icon" />
                <p>Plane</p>
              </div>
              <div
                className={`optionTitle ${activeIndex === 2 ? "active" : ""}`}
                onClick={() => handleOptionTitleClick(2)}
              >
                <AiFillCar className="icon" />
                <p>Car</p>
              </div>
            </div>
            <div className="detailBooking">
              <div className="titleBook">Booking Now !</div>
              {activeIndex === 0 && (
                <div className="hotelDetail">
                  <div className="destination">
                    <MdShareLocation className="icon" />
                    <input
                      type="text"
                      onChange={handleDestination}
                      placeholder="Enter your destination ..."
                    />
                  </div>
                  <div className="detailCont">
                    <div className="date">
                      <BsCalendarDate className="icon" />
                      <span
                        onClick={() => setOpenDate(!openDate)}
                        className="textDate"
                      >
                        {`${format(date[0].startDate, "MM/dd/yy")}`}_to_
                        {`${format(date[0].endDate, "MM/dd/yy")}`}
                      </span>
                      {openDate && (
                        <DateRange
                          editableDateInputs={true}
                          onChange={(item) => setDate([item.selection])}
                          moveRangeOnFirstSelection={false}
                          ranges={date}
                          className="dateInput"
                        />
                      )}
                    </div>
                    <div className="detailRoom">
                      <MdOutlineFamilyRestroom className="icon" />
                      <span
                        className="detail"
                        onClick={() => setOpenOption(!openOption)}
                      >
                        {`${options.adult} adult - ${options.children} children - ${options.room} room`}
                      </span>
                      {openOption && (
                        <div className="optionRoom">
                          <div className="optionItem">
                            <div className="optionText">Adult :</div>
                            <div className="buttonCounter">
                              <button
                                disabled={options.adult <= 1}
                                className="optionCounterButton"
                                onClick={() => handleOption("adult", "d")}
                              >
                                -
                              </button>
                              <span className="optionCounterNumber">
                                {options.adult}
                              </span>
                              <button
                                className="optionCounterButton"
                                onClick={() => handleOption("adult", "i")}
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <div className="optionItem">
                            <div className="optionText">Children :</div>
                            <div className="buttonCounter">
                              <button
                                disabled={options.children <= 0}
                                className="optionCounterButton"
                                onClick={() => handleOption("children", "d")}
                              >
                                -
                              </button>
                              <span className="optionCounterNumber">
                                {options.children}
                              </span>
                              <button
                                className="optionCounterButton"
                                onClick={() => handleOption("children", "i")}
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <div className="optionItem">
                            <div className="optionText">Rooms :</div>
                            <div className="buttonCounter">
                              <button
                                disabled={options.room <= 1}
                                className="optionCounterButton"
                                onClick={() => handleOption("room", "d")}
                              >
                                -
                              </button>
                              <span className="optionCounterNumber">
                                {options.room}
                              </span>
                              <button
                                className="optionCounterButton"
                                onClick={() => handleOption("room", "i")}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <p>!Book early to get discount!</p>
                  <button
                    className="button"
                    onClick={() => setopenResultHotelsHotels(!openResultHotels)}
                  >
                    <FiSearch className="icon" />
                    <span>Search</span>
                  </button>
                </div>
              )}
              {activeIndex === 1 && (
                <div className="planeDetail">
                  <div className="flightPlace">
                    <div className="Place">
                    <label>To:</label>
                      <input
                        type="text"
                        value={flightStart}
                        onChange={(event) => setFlightStart(event.target.value)}
                        placeholder="Enter your place ...."
                      />
                    </div>
                    <button onClick={() => reservePlace()}>
                      <BsArrowCounterclockwise className="icon" />
                    </button>
                    <div className="Place">
                    <label>From:</label>
                      <input
                        type="text"
                        value={flightEnd}
                        onChange={(event) => setFlightEnd(event.target.value)}
                        placeholder="Enter your place ...."
                      />
                    </div>
                  </div>
                  <div className="selectType">
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Open this select menu</option>
                      <option value="1">Economy class</option>
                      <option value="2">Business class</option>
                      <option value="3">First class</option>

                    </select>
                  </div>
                
                  <div className="detailPlane">
                    <MdOutlineFamilyRestroom className="icon" />
                    <span
                      className="detail"
                      onClick={() => setOpenOption(!openOption)}
                    >
                      {`${options.adult} adult - ${options.children} children - ${options.room} Baby`}
                    </span>
                    {openOption && (
                      <div className="optionRoom">
                        <div className="optionItem">
                          <div className="optionText">Adult :</div>
                          <div className="buttonCounter">
                            <button
                              disabled={options.adult <= 1}
                              className="optionCounterButton"
                              onClick={() => handleOption("adult", "d")}
                            >
                              -
                            </button>
                            <span className="optionCounterNumber">
                              {options.adult}
                            </span>
                            <button
                              className="optionCounterButton"
                              onClick={() => handleOption("adult", "i")}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="optionItem">
                          <div className="optionText">Children :</div>
                          <div className="buttonCounter">
                            <button
                              disabled={options.children <= 0}
                              className="optionCounterButton"
                              onClick={() => handleOption("children", "d")}
                            >
                              -
                            </button>
                            <span className="optionCounterNumber">
                              {options.children}
                            </span>
                            <button
                              className="optionCounterButton"
                              onClick={() => handleOption("children", "i")}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="optionItem">
                          <div className="optionText">Bayby :</div>
                          <div className="buttonCounter">
                            <button
                              disabled={options.room <= 0}
                              className="optionCounterButton"
                              onClick={() => handleOption("room", "d")}
                            >
                              -
                            </button>
                            <span className="optionCounterNumber">
                              {options.room}
                            </span>
                            <button
                              className="optionCounterButton"
                              onClick={() => handleOption("room", "i")}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="dateFlight">
                  <BsCalendarDate className="icon"/>
                    <input
                      type="date"
                      className="DateFlight"
                      value={dateFlight}
                      onChange={handleDateFlight}
                    />
                  </div>
                 
                  <div className="btnFlight">
                    <FiSearch className="icon"/>
                    <span>Search</span>
                  </div>
                </div>
              )}
              {activeIndex === 2 && 
              <div className="carDetail">
                <div className="Cartilte">
                  <label>Name : </label>
                   <input type="text"  onChange={handleCarName}
                   value={carName} placeholder="Enter your car name" />
                 
                </div>
                 <div className="dateRental">
                 <div className="date Car">
                    <label >Date :</label>
                      <span
                        onClick={() => setOpenDate(!openDate)}
                        className="textDate"
                      >
                        {`${format(date[0].startDate, "MM/dd/yy")}`}_to_
                        {`${format(date[0].endDate, "MM/dd/yy")}`}
                      </span>
                      {openDate && (
                        <DateRange
                          editableDateInputs={true}
                          onChange={(item) => setDate([item.selection])}
                          moveRangeOnFirstSelection={false}
                          ranges={date}
                          className="dateInput"
                        />
                      )}
                    </div>
                 </div>
                 <div className="seatsConuter">
                 <label > Number of Seats :</label>
                     <div className="btnCoun" onClick={() => setSeats(seats+1)  } >+</div>
                     <div className="seatNu">{seats}</div>
                     <div className="btnCoun" onClick={() => setSeats(Math.max(4,seats-1))} >-</div>
                 </div>
                 <div className="autoDriver">
                  <h6 onClick={() =>setAutoDriver(true)}>Self-driving
                  <FcCheckmark 
                  className={` ${autoDriver === false ? "icon" : ""}`}/></h6>
                  <h6 onClick={() =>setAutoDriver(false)}>have a driver <FcCheckmark className={` ${autoDriver === true ? "icon" : ""}`}/></h6>
                 </div>
                     <div className="searchCar">
                      <FiSearch  className="icon"/>
                      <span>Search</span>
                     </div>  

              </div>
              }
            </div>
          </div>
          <div>
            <h3>Result :</h3>
          </div>
          <div className="listResult">
            <div className="secContent grid">
              {openResultHotels &&
                Data.map(
                  ({ id, img, name, location, grade, fees, description }) => {
                    if (name.toLowerCase() === destination.toLowerCase()) {
                      return (
                        <div key={id} className="singleDestination">
                          <div className="imageDiv">
                            <img src={img} alt={name} />
                          </div>
                          <div className="cardInfo">
                            <h4 className="name">{name}</h4>
                            <span className="continent  flex">
                              <HiOutlineLocationMarker className="icon" />
                              <span className="name">{location}</span>
                            </span>
                            <div className="fees flex">
                              <div className="grade">
                                <span>
                                  {grade}
                                  <small>+1</small>
                                </span>
                              </div>
                              <div className="price">
                                <h5>{fees}</h5>
                              </div>
                            </div>
                            <div className="desc">
                              <p>{description}</p>
                            </div>

                            <Link
                              to="/hotels/ab"
                              state={{ options: options, date: date }}
                            >
                              <button className="btn flex">
                                DETAIL
                                <HiOutlineClipboardCheck className="icon" />
                              </button>
                            </Link>
                          </div>
                        </div>
                      );
                    }
                    return null;
                  }
                )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default List;
