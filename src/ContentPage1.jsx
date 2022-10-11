import Data from "./AllData";

const ContentPage1 = () => {
  return (
    <div className="ContentPage1" id="home">
      <div>
        <img src={Data.MainPageImg} alt="Hello" id="FrontImg" />
      </div>
      <div className="First_second">
        <h2>Hi there! I'm</h2>
        <h1>
          <span id="TextPara2">Shubham</span> Joshi{" "}
        </h1>
        <h2>
          A <span id="TextPara3">Front-End Web Developer</span> passionate about
          creating interactive application and experiences on the web{" "}
        </h2>
      </div>
    </div>
  );
};

export default ContentPage1;
