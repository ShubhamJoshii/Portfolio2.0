import Data from "./AllData";
import React, { useState } from "react";

const TopicData = {
  Skills: [
    {
      Topic: "Web Development",
      SubTopic: "Web App Development",
    },
    {
      Topic: "UI/UX",
      SubTopic: "Designing Web Interfaces",
    },
    {
      Topic: "App Development",
      SubTopic: "Buliding Android Apps ",
    },
  ],
  Experience: [
    {
      Topic: "2021 - Current",
      SubTopic: "Freelancer",
    },
    {
      Topic : "2022",
      SubTopic : "Certification On Data Structure On Python by NPTEL"
    },
    {
      Topic : "2022",
      SubTopic : "Front-End Web Development From Google Developer Student Clubs and Microsoft Learn Student Ambassadors Conducted by Devtown "
    }
  ],
  Education: [
    {
      Topic: "2021 - Current",
      SubTopic:
        "Bachelor of Computer Applications(BCA) at Vivekananda Institute of Professional Studies",
    },
    {
      Topic: "2020 - 2021",
      SubTopic: "Schooling at Kendriya Vidyalaya",
    },
    {
      Topic: "2018 - 2019",
      SubTopic: "Schooling at Kendriya Vidyalaya",
    },
  ],
};

const ContentPage3 = () => {
  // let i = TopicData.Skills;
  const [Count, setCount] = useState(0);
  let TopicArr = [TopicData.Skills, TopicData.Experience, TopicData.Education];
  return (
    <div className="ContentPage3" id="AboutMe">
      <div className="Page3First">
        <img src={Data.Shubham2} alt="ImageMain" />
      </div>
      <div className="Page3Second">
        <div className="Page3Fixed">
          <h1>About Me</h1>
          <p id="AboutPara">
            I'm a Front End Developer from Delhi,India.Currently, I enrolled in
            BCA-hons Course at Vivekananda Institute of Professional Studies of
            Guru Gobind Singh Indraprastha University. I enjoy taking complex
            problems and turning them into simple and beautiful interface
            designs. I also love the logic and structure of coding and always
          </p>
        </div>
        <div className="Page3FixedSec">
          <button
            onClick={() => {
              setCount(0);
            }}
          >
            Skills
            <div className="lineSkills lineSkillsColor"></div>
          </button>
          <button
            id="Btn2"
            onClick={() => {
              setCount(1)
              document.getElementsByClassName("lineSkillsColor")[0].style.display="none";
            }}
          >
            Experience
          </button>
          <button
            onClick={() => {
              setCount(2);
              document.getElementsByClassName("lineSkillsColor")[0].style.display="none";
            }}
          >
            Education
          </button>
          <div className="SkillsPage3">
            {TopicArr[Count].map((Curr , id) => {
              // console.log(Curr);
              return (
                <>
                  <p id="topic">{Curr.Topic} </p>
                  <p>{Curr.SubTopic}</p>
                  {/* <p id="topic">{}</p>
                <p></p>
                <p id="topic">{}</p>
                <p></p> */}
                </>
              );
            })}
          </div>

          {/* <p id="topic">{TopicData.Topic[i]}</p>
          <p>Designing Web Interfaces</p>
          <p id="topic">{TopicData.Topic[i+1]}</p>
          <p>Web App Development</p>
          <p id="topic">{TopicData.Topic[i+2]}</p> */}
          {/* <p>Buliding Android Apps</p> */}
        </div>
      </div>
      <a href="#home" id="ToTopBtn"><i class="fa-solid fa-arrow-up"></i></a>
    </div>
  );
};

export default ContentPage3;
