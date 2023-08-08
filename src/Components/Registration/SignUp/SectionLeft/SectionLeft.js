import React from "react";
import "../../../../Styles/Registration/SignUp/SectionLeft/SectionLeft.scss";
import logo from "./images/logo.svg";
import icon1 from "./images/icon1.svg";
import circleCheckFull from "./images/circleCheckFull.svg";

const SectionLeft = () => {
  return (
    <div className="sectionLeft">
      <div className="contanerLeft">
        <div className="backgroundColor"></div>
        <div className="content">
          <div className="logo">
            <img src={logo} alt="logo" />
            <span>Oasis</span>
          </div>
          <div className="bio">
            <img src={icon1} alt="icon" className="icon1" />
            <p>
              Welcome to our Sports Club, where football enthusiasts come
              together to embrace the passion for the beautiful game. As we
              delve into the history of our club, you'll discover how it has
              evolved and garnered popularity over the years, creating a
              community of sports lovers who have celebrated the thrill of
              football both on and off the field.
            </p>
            <div className="crg3">
              <span>Oasis</span>
              <img src={circleCheckFull} alt="icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionLeft;
