
import './App.css';
import NavBar from './components/HeaderMain/NavBar/NavBar';
import Logo from './components/HeaderMain/Logo/Logo';
import Header from './components/HeaderMain/Header/Header';
import Scroll from "./components/HeaderMain/Scroll/Scroll";
import Social from "./components/HeaderMain/Social/Social";
import WeAre from "./components/WeAreMain/WeAre/WeAre";

const App = () => {
  return (
    <div className = "mom">
      <div className = "container">
        <div className = "header-container">
            <NavBar />
            <Social />
            <Logo />
            <Header />
            <Scroll />
        </div>
      </div>
        <div className="we-are-container">
            <WeAre />
        </div>
    </div>
  );
}

export default App;
