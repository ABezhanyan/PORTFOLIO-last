import logo from '../../../img/logo.svg';
import './Logo.scss'

const Logo = () => {
    return (
        <div className = "logo">
            <img src = {logo} className ="logo-img" />
        </div>
    )
}

export default Logo;