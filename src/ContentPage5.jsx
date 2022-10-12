import Data from "./AllData";
import Gmail from "./Images/GmailLogo.png";
import Phone from "./Images/ContactPhone.png";
const ContentPage5 = () => {
  return (
    <div className="ContentPage5" id="">
      <div className="Contact1">
        <h1>Contact Me</h1>
        <div className="Contact1Inner">
          <img src={Gmail} alt="GmailLogo" width="25px" />
          <h3>shubhamjoshii676@gmail.com</h3>
        </div>
        <div className="Contact1Inner">
          <img src={Phone} alt="PhoneLogo" width="25px" />
          <h3>880024****</h3>
        </div>
        <div className="ContactSocialLogo">
          {Data.SocialLogo.map((curr) => {
        
            return <a href={curr.link} target="_blank"><img src={curr.logo} alt="Social Logo" width="40px" /></a>;
          })}
        </div>
        <button>
          <a href="" id="CVdownload">
            Download CV
          </a>
        </button>
      </div>
      <div className="Contact2">
        <input type="text" placeholder="Your Name" />
        <br />
        <input type="text" placeholder="Your Email" />
        <br />
        {/* <input type="text" placeholder="Your "/> */}
        <textarea
          name="MessageUser"
          id="MessageUser"
          cols="30"
          rows="10"
          placeholder="Your Message"
        ></textarea><br />
        <button>Submit</button>
      </div>
    </div>
  );
};

export default ContentPage5;
