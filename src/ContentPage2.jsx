import Portfolio from "./Images/ProjectPortfolio.png"
import Quotes from "./Images/ProjectQuotes.png"
import Password from "./Images/ProjectPassword.png"
import Hotstar from "./Images/ProjectHotstar.png"
import DigitalClock from "./Images/ProjectDigital.png"
import formore from "./Images/Click.png"
const Projects = [
    {
        text:"Portfolio",
        Image : Portfolio,
        link:"https://shubhamjoshii.github.io/Portfolio2.0/"
      },
      {
        text:"Hotstar Clone",
        Image : Hotstar,
        link:"https://shubhamjoshii.github.io/Hotstar-Clone/"
      },
      {
        text:"Quotes Generator",
        Image : Quotes,
        link:"https://shubhamjoshii.github.io/quotesGenerator/"
      },
      {
        text:"Digital Clock",
        Image : DigitalClock,
        link:"https://shubhamjoshii.github.io/Digital-Clock/"
      },
      {
        text:"Password Generator",
        Image : Password,
        link:"https://shubhamjoshii.github.io/PasswordGenerator/"
      },
      {
        text:"For more Click Here!",
        Image : formore,
        link:"https://github.com/ShubhamJoshii"
      }
]
const ContentPage2 =() =>{
    return(
        <div className="ContentPage2">
            <h1>Projects</h1>
            <div className="ProjectSumm">
                {
                    Projects.map((curr)=>{
                        return(<div className="ProjectSummInner">
                            <div className="ProjectImg">
                                <a href={curr.link} target="_blank"><img src={curr.Image} alt="" /></a>
                            </div>
                            <h2>{curr.text}</h2>
                        </div>)
                    })
                }
            </div>
        </div>
    )
}

export default ContentPage2;