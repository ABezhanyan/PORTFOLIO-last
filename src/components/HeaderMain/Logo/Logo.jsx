import logo from '../../../img/logo.svg';
import './Logo.scss'

const Logo = () => {
    return <header className = 'logo'>
        <img src = {logo} className ="logo-img" />
    </header>
}

export default Logo;