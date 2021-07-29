import logo from '../../../img/logo.svg';
import './NavBar.scss';

const NavBar = () => {
    return (
        <nav className = "nav">
            <ul className = "nav-list">
                <li className = "nav-item">
                    Home
                </li>
                <li className = "nav-item">
                    About us
                </li>
                <li className = "nav-item">
                    Skills
                </li>
                <li className = "nav-item">
                    Work
                </li>
                <li className = "nav-item">
                    Contact
                </li>
            </ul>
        </nav>
)}

export default NavBar;