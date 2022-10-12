// import { useEffect } from "react";
import Data from "./AllData";
import arrowDown from "./Images/Arrowdown.gif";
import React, { useEffect } from "react";
// import { click } from "@testing-library/user-event/dist/click";
const ContentPage1 = () => {
  let NameText = "Shubham Joshi";
  let i = 0;
  setInterval(() => {
    if (i < NameText.length) {
      document.getElementsByClassName("AutoType")[0].innerHTML += NameText[i];
      document.getElementsByClassName("AutotypeRemove")[0].style.display = "inline";
    }
    if (i == NameText.length) {
      document.getElementsByClassName("AutotypeRemove")[0].style.display = "none";
        document.getElementsByClassName("AutoType")[0].innerHTML="S";
      i = 0;
    }
    i++;
  }, 400);
  return (
    <>
      <div className="ContentPage1" id="home">
        <div>
          <img src={Data.MainPageImg} alt="Hello" id="FrontImg" />
        </div>
        <div className="First_second">
          <h2>Hi there! I'm</h2>
          <h1>
            {/* <span id="TextPara2">Shubham</span> Joshi{" "} */}
            {/* Shubham Joshi */}
            <span className="AutoType" id="TextPara2"></span>
            <span className="AutotypeRemove" id="TextPara2">
              |
            </span>
          </h1>
          <h2>
            A <span id="TextPara3">Front-End Web Developer</span> passionate
            about creating interactive application and experiences on the web{" "}
          </h2>
        </div>
        <div className="slideBtn">
          <a href="#AboutMe">
            <img src={arrowDown} alt="Arrow Down" />
          </a>
        </div>
      </div>
    </>
  );
};

export default ContentPage1;
