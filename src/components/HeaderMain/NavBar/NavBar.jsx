import logo from '../../../img/logo.svg';
import './NavBar.scss';
import { Link, Element } from "react-scroll";
import * as Scroll from "react-scroll";


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
            </nav>
)}

export default NavBar;