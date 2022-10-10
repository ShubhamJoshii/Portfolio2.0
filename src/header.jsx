import Insta from "./Images/Insta.png";
import Facebook from "./Images/facebookk.png";
import Twitter from "./Images/Twitter.png";
import Github from "./Images/github.png";
import Linkedin from "./Images/Linkedin.png";

const HeaderContact = [
  {
    text: "Instagram",
    logo: Insta,
    link: "https://www.instagram.com/invites/contact/?i=1k3g7gxwflgz0&utm_content=2of27u2",
  },
  {
    text: "Twitter",
    logo: Twitter,
    link: "https://twitter.com/Shubham49439428",
  },
  {
    text: "Facebook",
    logo: Facebook,
    link: "https://www.facebook.com/shubham.joshi.733076",
  },
  {
    text: "Github",
    logo: Github,
    link: "https://github.com/ShubhamJoshii",
  },
  {
    text: "Linkedin",
    logo: Linkedin,
    link: "https://www.linkedin.com/in/shubham-joshi-86aaa6232",
  },
];

const HeaderProjects = [
  {
    text: "Portfolio",
    link: "https://shubhamjoshii.github.io/Portfolio2.0/",
  },
  {
    text: "Hotstar Clone",
    link: "https://shubhamjoshii.github.io/Hotstar-Clone/",
  },
  {
    text: "Quotes Generator",
    link: "https://shubhamjoshii.github.io/quotesGenerator/",
  },
  {
    text: "Digital Clock",
    link: "https://shubhamjoshii.github.io/Digital-Clock/",
  },
  {
    text: "Password Generator",
    link: "https://shubhamjoshii.github.io/PasswordGenerator/",
  },
];
const Header = () => {
  return (
    <div className="Header">
      <h1>
        <a href="#home">SHUBHAM JOSHI</a>
      </h1>

      <ol className="Orderheader">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          Contact
          <ul className="DropDown">
            {HeaderContact.map((curr) => {
              return (
                <li>
                  <a href={curr.link} target="_blank">
                    <img src={curr.logo} alt="Logo" width="15px" /> {curr.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </li>
        <li>
          Projects
          <ul className="DropDown">
            {HeaderProjects.map((curr) => {
              return (
                <li>
                  <a href={curr.link} target="_blank">
                    {curr.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/170t40CWF0c0pLFkfXWJmqu7MMjPYWeO6/view?usp=sharing"
            target="_blank"
          >
            Resume
          </a>
        </li>
      </ol>
      <div className="burgerOuter">
      <div className="burger">
        <div className="BurgerLine"></div>
        <div className="BurgerLine"></div>
        <div className="BurgerLine"></div>
      </div>
      </div>
    </div>
  );
};

export default Header;
