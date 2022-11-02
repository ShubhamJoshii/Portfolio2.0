import Data from "./AllData";
import Gmail from "./Images/GmailLogo.png";
import Phone from "./Images/ContactPhone.png";
import { useState } from "react";
import axios from "axios";

  const ContentPage5 = () => {
    const [Name,setName] = useState("")
    const [Email,setEmail] = useState("")
    const [Message,setMessage] = useState("")


    const handleSubmit = (e) =>{
      e.preventDefault();
      // console.log(Name,Email, Message)
      const data = {
        Name,
        Email,
        Message
      }
      axios.post('https://sheet.best/api/sheets/549a3b0c-0dab-4328-9799-35053581e522',data).then((response)=>{
        // console.log(response)
        setName('');
        setEmail('')
        setMessage('');
      })
    }


  return (
    <div className="ContentPage5" id="">
      <div className="Contact1">
        <h1>Contact Me</h1>
        <div className="Contact1Inner">
          <img src={Gmail} alt="GmailLogo" className="LogoColorChange" width="25px" />
          <h3>shubhamjoshii676@gmail.com</h3>
        </div>
        <div className="Contact1Inner">
          <img src={Phone} alt="PhoneLogo" className="LogoColorChange" width="25px" />
          <h3>880024****</h3>
        </div>
        <div className="ContactSocialLogo LogoColorChange">
          {Data.SocialLogo.map((curr, id) => {
            return (
              <a href={curr.link} key={id} target="_blank" rel="noopener noreferrer">
                <img src={curr.logo} alt="Social Logo" width="40px" />
              </a>
            );
          })}
        </div>
        <button>
          <a href={Data.resume} id="CVdownload" rel="noopener noreferrer">
            Download CV
          </a>
        </button>
      </div>
      <div className="Contact2">
        <form action="" method="post" name="google-sheet" onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" name="Name" onChange={(e)=>{setName(e.target.value)}} value={Name}/>
          <br />
          <input type="text" placeholder="Your Email" name="Email" onChange={(e)=>{setEmail(e.target.value)}} value={Email}/>
          <br />
          {/* <input type="text" placeholder="Your Message" onChange={(e)=>{setMessage(e.target.value)}} value={Message}/> <br/> */}

          <textarea
            name="MessageUser"
            id="MessageUser"
            cols="30"
            rows="10"
            placeholder="Your Message"
            onChange={(e)=>{setMessage(e.target.value)}} value={Message}
          ></textarea>
          <br />
          <button type="submit" onClick={(()=>alert("Your Respose Has been Submit"))} name="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContentPage5;
