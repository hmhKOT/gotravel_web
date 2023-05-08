import React from "react";
import "./footer.css";
import video2 from "../../Assets/video2.mp4";
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { TbBrandTiktok } from "react-icons/tb";



const Footer = () => {
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>
      <div className="secContent container">
        <div className="contactDiv flex">
          <div className="text">
            <small>KEEP IN TUOCH</small>
            <h2>Travel with us</h2>
          </div>
          <div className="inputDiv flex">
            <input type="text" placeholder="Enter  email address ..." />
            <button className="btn flex" type="submit">
              SEND <FiSend className="icon" />
            </button>
          </div>
        </div>
        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <MdOutlineTravelExplore className="icon" />
                Go Travel
              </a>
            </div>
            <div className="footerParagraph">
              We hope your experience with us has been enjoyable and
              stress-free. Our team of expert travel agents is dedicated to
              providing you with the best possible service and ensuring that
              your travel plans are seamless and hassle-free. If you have any
              questions or feedback, please don't hesitate to contact us. We
              appreciate your business and look forward to helping you plan your
              next adventure. Safe travels!
            </div>
            <div className="footerSocials">
                <AiOutlineTwitter className="icon" />
                <AiFillYoutube className="icon" />
                <AiFillInstagram className="icon" />
                <TbBrandTiktok className="icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
