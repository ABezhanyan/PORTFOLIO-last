import logo from '../../../img/logo.svg';
import './NavBar.scss';
import { Link, Element } from "react-scroll";
import * as Scroll from "react-scroll";
import Burger from '../../../imgResume/sandwich.svg'


const NavBar = () => {
    return (
            <nav className = "nav">
                <ul className = "nav-list">
                    <li className = "nav-item">
                        Home
                    </li>
                    <li className = "nav-item">
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={1000}
                        >
                            About us
                        </Link>
                    </li>
                    <li className = "nav-item">
                        <Link
                            activeClass="active"
                            to="skills"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={1000}
                        >
                            Skills
                        </Link>
                    </li>
                    <li className = "nav-item">
                        <Link
                            activeClass="active"
                            to="work"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={1000}
                        >
                            Work
                        </Link>
                    </li>
                    <li className = "nav-item">
                        <Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={1000}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
                <button className="burger-block">
                    <img src={Burger} alt="" className="burger-san"/>
                </button>
            </nav>
)}

export default NavBar;