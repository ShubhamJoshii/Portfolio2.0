import Data from "./AllData";
import { useState } from "react";
const Footer = () => {
  let TimeAndDate = new Date();
  let dates = TimeAndDate.toLocaleTimeString();
  // let i = TimeAndDate.getDay();
  // let Day = ["SUN", "MON", "TUES", "WED", "THUR", "FRI", "SAT"];


  const [timing, setTiming] = useState(dates);
  setInterval(() => {
    dates = new Date().toLocaleTimeString();
    setTiming(dates);
  }, 1000);
  return (
    <>
      <footer>
        <div className="footer_First">sj</div>
        <div id="LineOuter">
          <div className="lines"></div>
        </div>
        <div className="footer_Second">Shubham</div>
        <div id="LineOuter">
          <div className="lines"></div>
        </div>
        <div className="footer_Third">
          {Data.SocialLogo.map((curr, id) => {
            return (
              <a
                href={curr.link}
                key={id}
                target="_blank"
                rel="noopener noreferrer"
                id="SocialImg"
              >
                <img src={curr.logo} alt="SocialImg" width="40px" />
              </a>
            );
          })}
        </div>
      </footer>
      <div className="DateFooter">
        <p>All right reserved 2022 - www.shubhamJoshi {timing}</p>
      </div>

    </>
  );
};
export default Footer;
