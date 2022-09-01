import "./App.css";
import NavBarMenu from "./components/navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./components/Banner";
import Skills from "./components/Skills/Skills";
import Nftcomponent from "./components/nftcomponent/Nftcomponent";
function App() {
  return (
    <div className="App">
      <NavBarMenu />
      <Banner />
      <Skills />
      <Nftcomponent />
    </div>
  );
}

export default App;
