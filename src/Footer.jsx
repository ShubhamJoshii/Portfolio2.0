import Data from "./AllData";

const Footer = () => {
  return (
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
        {Data.SocialLogo.map((curr) => {
          return (
            <a href={curr.link} target="_blank" id="SocialImg">
              <img src={curr.logo} alt="SocialImg" width="40px" />
            </a>
          );
        })}
      </div>
    </footer>
  );
};
export default Footer;
