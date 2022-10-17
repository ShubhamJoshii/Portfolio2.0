import Data from "./AllData";
import "aos/dist/aos.css"
const ContentPage2 = () => {
  // console.log(Data.Project.LanguageUse[0])
  return (
    <div className="ContentPage2">
      <h1>Projects</h1>
      <div className="ProjectSumm">
        {Data.Project.map((curr, id) => {
          return (
            <div className="ProjectSummInner" key={id}>
              <div className="ProjectImg">
                <a target="_blank" href="." rel="noopener noreferrer">
                  <img src={curr.Image} alt="" />
                  <div className="onhover">
                    <h2>{curr.text}</h2>
                    <p>{curr.para}</p>
                    <p>{curr.LanguageUse}</p>

                    <a
                      href={curr.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-solid ExtLink fa-arrow-up-right-from-square"></i>
                    </a>
                  </div>
                </a>
              </div>
              <h2>{curr.text}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContentPage2;
