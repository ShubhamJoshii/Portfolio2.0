import Header from "./header"
import ContentPage1 from "./ContentPage1"
import ContentPage2 from "./ContentPage2"
import ContentPage3 from "./ContentPage3"
import ContentPage4 from "./ContentPage4"
import ContentPage5 from "./ContentPage5"
import Footer from "./Footer"
const App = () => {
  // if()
  return(
    <div className="container">
      <Header />
      <ContentPage1 />
      <ContentPage3 />
      <ContentPage2 />
      <ContentPage4 />

      <ContentPage5 />
      <Footer />
    </div>
  )
}

export default App;