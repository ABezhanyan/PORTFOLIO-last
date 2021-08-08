import './BurgerMain.scss'
import '../CarMain/CarMain.scss'
import '../GoldMain/GoldMain.scss'
import '../GameMain/GameMain.scss'
import Burger from '../../../imgResume/burger.png';
import Car from "../../../imgResume/car.png";
import Gold from "../../../imgResume/Gold.png";
import Game from "../../../imgResume/game.png";
import W from "../../../imgResume/w.svg";
import O from "../../../imgResume/o.svg";
import R from "../../../imgResume/r.svg";
import K from "../../../imgResume/k.svg";

const BurgerMain = () => {
    return (
        <div className="grid">
            <div className="burger-container">
                <div className="burger-header">
                    <div className="burger_one">
                        <div className="burger_two">
                            <img src={Burger} alt="burger" className="burger"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="car-container">
                <div className="car-header">
                    <div className="car_one">
                        <div className="car_two">
                            <img src={Car} alt="car" className="car"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="gold-container">
                <div className="gold-header">
                    <div className="gold_one">
                        <div className="gold_two">
                            <img src={Gold} alt="gold" className="gold"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="game-container">
                <div className="game-header">
                    <div className="game_one">
                        <div className="game_two">
                            <img src={Game} alt="game" className="game"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="W">
                <img src={W} className="W-icon" alt="W"/>
            </div>
            <div className="O">
                <img src={O} className="O-icon" alt="O"/>
            </div>
            <div className="R">
                <img src={R} className="R-icon" alt="R"/>
            </div>
            <div className="K">
                <img src={K} className="K-icon" alt="K"/>
            </div>
            <div className="work-text">
                <p>Work</p>
            </div>
        </div>
    );
}

export default BurgerMain;