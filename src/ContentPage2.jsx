import Data from "./AllData";

const ContentPage2 = () => {
  return (
    <div className="ContentPage2">
      <h1>Projects</h1>
      <div className="ProjectSumm">
        {Data.Project.map((curr) => {
          return (
            <div className="ProjectSummInner">
              <div className="ProjectImg">
                <a target="_blank" href="." rel="noopener noreferrer" >
                  <img src={curr.Image} alt="" />
                  <div className="onhover">
                    <h2>{curr.text}</h2>
                    <p>{curr.para}</p>
                    <a href={curr.link} target="_blank" rel="noopener noreferrer" >
                      <i class="fa-solid ExtLink fa-arrow-up-right-from-square"></i>
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
