import './Header.scss'
import Pic400 from '../../../imgResume/pic400px.svg'

const Header = () => {
    return (
        <div className= "header">
            <p className="header_text-hello">Привет!</p>
            <p className="header_text">Меня зовут Агаси и я</p>
            <p className="header_text">WEB-DEVELOPER</p>
            <p className="header-text-eng">1+ year experience in web development</p>
            <img src={Pic400} alt="" className="pic400"/>
        </div>
      );
    };

export default Header;