import "./App.css";
import NavBarMenu from "./components/navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./components/Banner";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <NavBarMenu />
      <Banner />
      <Skills />
    </div>
  );
}

export default App;
