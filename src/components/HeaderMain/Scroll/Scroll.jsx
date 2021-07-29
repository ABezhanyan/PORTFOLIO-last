import './Scroll.scss';
import scroll from '../../../imgResume/chevron.svg'

const Scroll = () => {
    return (
        <div className="scroll">
            <img src={scroll} className="scroll-img"/>
        </div>
    );
}

export default Scroll;