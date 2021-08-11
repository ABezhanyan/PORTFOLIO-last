import './CarMain.scss'
import Gold from '../../../imgResume/burger.png'

const GoldMain = () => {
    return (
        <div className="gold-container">
            <div className="gold-header">
                <a href="/BurgerSlider">
                    <div className="gold_one">
                        <div className="gold_two">
                                <img src={Gold} alt="gold" className="gold"/>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default GoldMain;