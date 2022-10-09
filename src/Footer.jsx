import Insta from "./Images/Insta.png";
import Facebook from "./Images/facebookk.png";
import Twitter from "./Images/Twitter.png";
import Github from "./Images/github.png";
import Linkedin from "./Images/Linkedin.png";
const SocialLogo = [
  {
    Logo: Insta,
    link: "https://www.instagram.com/invites/contact/?i=1k3g7gxwflgz0&utm_content=2of27u2",
  },
  { Logo: Twitter, link: "https://twitter.com/Shubham49439428" },
  { Logo: Facebook, link: "https://www.facebook.com/shubham.joshi.733076" },
  { Logo: Github, link: "https://github.com/ShubhamJoshii" },
];
const Footer = () => {
  console.log(SocialLogo[0]);
  return (
    <footer>
      <div className="footer_First">sj</div>
      <div id="LineOuter">
        <div className="lines"></div>
      </div>
      <div className="footer_Second"></div>
      <div id="LineOuter">
        <div className="lines"></div>
      </div>
      <div className="footer_Third">
        {SocialLogo.map((curr) => {
          return (
            <a href={curr.link} target="_blank" id="SocialImg">
              <img src={curr.Logo} alt="SocialImg" width="40px" />
            </a>
          );
        })}
      </div>
    </footer>
  );
};
export default Footer;
