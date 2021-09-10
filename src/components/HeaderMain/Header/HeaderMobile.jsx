import './Header.scss'
import Pic400 from "../../../imgResume/pic400px.svg";

const HeaderMobile = () => {
  return (
      <div className="header-mobile">
          <div className="header-mobile-text"> <img src={Pic400} alt="" className="header-mobile-pic"/>
              <p className="header-mobile-text-rus-two" >Меня зовут Агаси</p>
              <p className="header-mobile-text-rus_one">WEB-DEVELOPER</p>
              <p className="header-mobile-text-eng">1+ year experience in web development</p>
          </div>
      </div>
  )
}

export default HeaderMobile;