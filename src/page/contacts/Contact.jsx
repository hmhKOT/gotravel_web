import React from "react";
import "./contact.css";
import Navbar from "../../Componets/Navbar/Navbar";
import Footer from "../../Componets/Footer/Footer";
import { SiCoinmarketcap } from "react-icons/si";
import { RiHotelFill } from "react-icons/ri";
import { MdOutlineFestival } from "react-icons/md";
import { BsFileEarmarkBarGraphFill } from "react-icons/bs";
import { FcInTransit } from "react-icons/fc";
import { FcBusiness } from "react-icons/fc";
import { FcPodiumWithAudience } from "react-icons/fc";
import HeroImageGrid from "../../Componets/HeroImageGrid/heroImageGrid";

const Contact = () => {
  return (
    <div>
      <>
        <Navbar />
        <div className="virtual"></div>
        <div className="contactContainer">
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner" className="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="https://2456764.fs1.hubspotusercontent-na1.net/hub/2456764/hubfs/YoungPeopleBusinessMeeting_1200x627.jpg?width=800&name=YoungPeopleBusinessMeeting_1200x627.jpg"
                  class="d-block w-100"
                  alt="img_1"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/5628ee3ee4b056cf2182763d/1594933847713-RB389SRXRHORZFLD4BFS/Professional+Construction+Contracting+Discipline.jpg"
                  class="d-block w-100"
                  alt="img_2"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://techequitycollaborative.org/wp-content/uploads/2021/06/Contracting-agencies-800x490.png"
                  class="d-block w-100"
                  alt="img_3"
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <div className="collaborate">
            <div className="detailItem">
              <div className="itemTitle">
                <div className="bigTitle">
                  <SiCoinmarketcap className="icon" />
                  <h2 className="title">Expand Your Market</h2>
                </div>

                <p className="smallTitle">
                  Register your business to our app & gain more customers.
                </p>
              </div>
              <div className="itemCard">
                <div class="card" className="card">
                  <div className="imgCard">
                    <img
                      src="https://images.squarespace-cdn.com/content/v1/5a74702ce45a7cd601df944b/5b621696-d781-4957-8a8d-3bdf40a5005e/Radisson+Blu+Hotel+%26+Spa+Nashik.jpg"
                      class="card-img-top"
                      alt="img_card"
                    />
                  </div>
                  <div class="card-body">
                    <RiHotelFill className="icon" color="#00CED1" />
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
                <div class="card" className="card">
                  <div className="imgCard">
                    <img
                      src="https://images.squarespace-cdn.com/content/v1/5a74702ce45a7cd601df944b/5b621696-d781-4957-8a8d-3bdf40a5005e/Radisson+Blu+Hotel+%26+Spa+Nashik.jpg"
                      class="card-img-top"
                      alt="img_card"
                    />
                  </div>

                  <div class="card-body">
                    <MdOutlineFestival className="icon" color="#8A2BE2" />
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
                <div class="card" className="card">
                  <div className="imgCard">
                    <img
                      src="https://images.squarespace-cdn.com/content/v1/5a74702ce45a7cd601df944b/5b621696-d781-4957-8a8d-3bdf40a5005e/Radisson+Blu+Hotel+%26+Spa+Nashik.jpg"
                      class="card-img-top"
                      alt="img_card"
                    />
                  </div>

                  <div class="card-body">
                    <BsFileEarmarkBarGraphFill
                      className="icon"
                      color="#DC143C"
                    />
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
                <div class="card" className="card">
                  <div className="imgCard">
                    <img
                      src="https://images.squarespace-cdn.com/content/v1/5a74702ce45a7cd601df944b/5b621696-d781-4957-8a8d-3bdf40a5005e/Radisson+Blu+Hotel+%26+Spa+Nashik.jpg"
                      class="card-img-top"
                      alt="img_card"
                    />
                  </div>

                  <div class="card-body">
                    <FcInTransit className="icon" color="#32CD32" />
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="detailItem">
              <div className="itemTitle">
                <div className="bigTitle">
                  <FcBusiness className="icon" />
                  <h2 className="title">Empower Your Business</h2>
                </div>

                <p className="smallTitle">
                  Create special benefits exclusively for your company.
                </p>
              </div>
              <div className="itemCard">
                <div class="card" className="card">
                  <div className="imgCard">
                    <img
                      src="https://images.squarespace-cdn.com/content/v1/5a74702ce45a7cd601df944b/5b621696-d781-4957-8a8d-3bdf40a5005e/Radisson+Blu+Hotel+%26+Spa+Nashik.jpg"
                      class="card-img-top"
                      alt="img_card"
                    />
                  </div>

                  <div class="card-body">
                    <MdOutlineFestival className="icon" color="#8A2BE2" />
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
                <div class="card" className="card">
                  <div className="imgCard">
                    <img
                      src="https://images.squarespace-cdn.com/content/v1/5a74702ce45a7cd601df944b/5b621696-d781-4957-8a8d-3bdf40a5005e/Radisson+Blu+Hotel+%26+Spa+Nashik.jpg"
                      class="card-img-top"
                      alt="img_card"
                    />
                  </div>

                  <div class="card-body">
                    <BsFileEarmarkBarGraphFill
                      className="icon"
                      color="#DC143C"
                    />
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
                <div class="card" className="card">
                  <div className="imgCard">
                    <img
                      src="https://images.squarespace-cdn.com/content/v1/5a74702ce45a7cd601df944b/5b621696-d781-4957-8a8d-3bdf40a5005e/Radisson+Blu+Hotel+%26+Spa+Nashik.jpg"
                      class="card-img-top"
                      alt="img_card"
                    />
                  </div>

                  <div class="card-body">
                    <FcInTransit className="icon" color="#32CD32" />
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="detailItem">
              <div className="itemTitle">
                <div className="bigTitle">
                  <FcPodiumWithAudience className="icon" />
                  <h2 className="title">Reach Wider Audience</h2>
                </div>

                <p className="smallTitle">
                  Engage with new audiences via our app, special programs, &
                  more.
                </p>
              </div>
              <div className="itemCard">
                <div class="card" className="card">
                  <div className="imgCard">
                    <img
                      src="https://images.squarespace-cdn.com/content/v1/5a74702ce45a7cd601df944b/5b621696-d781-4957-8a8d-3bdf40a5005e/Radisson+Blu+Hotel+%26+Spa+Nashik.jpg"
                      class="card-img-top"
                      alt="img_card"
                    />
                  </div>

                  <div class="card-body">
                    <MdOutlineFestival className="icon" color="#8A2BE2" />
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
                <div class="card" className="card">
                  <div className="imgCard">
                    <img
                      src="https://images.squarespace-cdn.com/content/v1/5a74702ce45a7cd601df944b/5b621696-d781-4957-8a8d-3bdf40a5005e/Radisson+Blu+Hotel+%26+Spa+Nashik.jpg"
                      class="card-img-top"
                      alt="img_card"
                    />
                  </div>

                  <div class="card-body">
                    <BsFileEarmarkBarGraphFill
                      className="icon"
                      color="#DC143C"
                    />
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="imgAboutContact">
          <HeroImageGrid/>
          </div>
        </div>
        <Footer />
      </>
    </div>
  );
};

export default Contact;
