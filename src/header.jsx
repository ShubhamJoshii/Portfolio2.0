import Data from "./AllData";

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
          <a href="#AboutMe">About Us</a>
        </li>
        <li>
          Contact
          <ul className="DropDown">
            {Data.SocialLogo.map((curr) => {
              return (
                <li>
                  <a href={curr.link} target="_blank" rel="noopener noreferrer">
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
            {Data.Project.map((curr, id) => {
              return (
                <li>
                  <a href={curr.link}  key={id} target="_blank" rel="noopener noreferrer">
                    {curr.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </li>
        <li>
          <a href={Data.resume} target="_blank" rel="noopener noreferrer">
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
