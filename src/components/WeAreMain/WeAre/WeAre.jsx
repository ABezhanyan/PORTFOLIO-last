import './WeAre.scss';
import Icon from '../../../imgResume/pic.svg'
const WeAre = () => {
    return (
        <div className="we-are" >
            <div className="we-are-header" id="about">
                <h2 className="we-are-header__text">We are</h2>
            </div>
            <div className="we-are-image">
                <img src={Icon} className="we-are-icon"/>
            </div>
        </div>
    );
}

export default WeAre;