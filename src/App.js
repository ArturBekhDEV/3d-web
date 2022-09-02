import "./App.css";
import NavBarMenu from "./components/navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./components/Banner";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
import Nftcomponent from "./components/nftcomponent/Nftcomponent";
import Contact from "./components/formcomponent/Contact";
function App() {
  return (
    <div className="App">
      <NavBarMenu />
      <Banner />
      <Skills />
      <Nftcomponent />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
