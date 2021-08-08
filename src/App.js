
import './App.css';
import  './index.css'
import NavBar from './components/HeaderMain/NavBar/NavBar';
import Logo from './components/HeaderMain/Logo/Logo';
import Header from './components/HeaderMain/Header/Header';
import Scroll from "./components/HeaderMain/Scroll/Scroll";
import Social from "./components/HeaderMain/Social/Social";
import WeAre from "./components/WeAreMain/WeAre/WeAre";
import WeAreText from "./components/WeAreMain/WeAreText/WeAreText";
import SkillsAre from "./components/SkillsAre/SkillsAre";
import BurgerMain from "./components/WorkMain/BurgerMain/BurgerMain";
import GoldMain from "./components/WorkMain/CarMain/CarMain";

const App = () => {
  return (
    <div className = "mom">
      <div className = "container-main">
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
            <WeAreText />
        </div>
        <div className="skills-are-container">
            <SkillsAre />
        </div>
        <div className="work-container">
            <BurgerMain />
        </div>
    </div>
  );
}

export default App;
