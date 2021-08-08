import './BurgerMain.scss'
import '../CarMain/CarMain.scss'
import '../GoldMain/GoldMain.scss'
import '../GameMain/GameMain.scss'
import Burger from '../../../imgResume/burger.png'
import Car from "../../../imgResume/car.png";
import Gold from "../../../imgResume/Gold.png"
import Game from "../../../imgResume/game.png"

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
        </div>
    );
}

export default BurgerMain;