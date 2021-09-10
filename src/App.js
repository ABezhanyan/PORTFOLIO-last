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
import BurgerSlider from "./components/WorkMain/BurgerSlider/BurgerSlider";
import {Route} from "react-router";
import {BrowserRouter} from "react-router-dom";
import Contact from "./components/ContactMain/Contact/Contact";
import WeAreMobile from "./components/WeAreMain/WeAreMobile/WeAreMobile";
import HeaderMobile from "./components/HeaderMain/Header/HeaderMobile";

const App = () => {
    return (
        <BrowserRouter>
            <div className = "mom">
                <div className = "container-main">
                    <div className = "header-container">
                        <NavBar />
                        <Social />
                        <Logo />
                        <HeaderMobile />
                        <Header />
                        <Scroll />
                    </div>
                </div>
                <div className="we-are-container">
                    <WeAre />
                    <WeAreText />
                </div>
                <div className="WeAreMobile-container">
                    <WeAreMobile />
                </div>
                <div className="skills-are-container">
                    <SkillsAre />
                </div>
                <div className="work-container" id="work">
                    <Route path='/BurgerSlider' component={BurgerSlider} />
                    <Route exact   path='/' component={BurgerMain} />
                </div>
                <Contact id="contact"/>
            </div>
        </BrowserRouter>
    );
}

export default App;
