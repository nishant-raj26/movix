// import React from 'react'
import "./style.scss";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import ContentWrapper from "../contentWrapper/ContentWrapper";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms of Use</li>
          <li className="menuItem">Privacy Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          repellendus repellat consectetur iure officiis commodi et voluptatum,
          sint voluptatibus? Ut perferendis animi repellat neque enim? Error
          molestiae tenetur minus et quia repudiandae, hic animi unde dolor
          dignissimos earum veritatis minima accusamus cumque saepe ipsum
          consectetur, id, fuga veniam. Provident, ipsa?
        </div>
        <div className="socialIcons">
          <span className="icon">
            {" "}
            <FaFacebookF />{" "}
          </span>
          <span className="icon">
            {" "}
            <FaTwitter />{" "}
          </span>
          <span className="icon">
            {" "}
            <FaInstagram />{" "}
          </span>
          <span className="icon">
            {" "}
            <FaLinkedin />{" "}
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
