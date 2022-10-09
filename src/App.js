import Header from "./header"
import ContentPage1 from "./ContentPage1"
import ContentPage2 from "./ContentPage2"
import Footer from "./Footer"
const App = () => {
  return(
    <div className="container">
      <Header />  
      <ContentPage1 />
      <ContentPage2 />
      <Footer />
    </div>
  )
}

export default App;