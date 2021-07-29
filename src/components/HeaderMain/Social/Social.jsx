import './Social.scss'
import inst from '../../../imgResume/inst.svg'
import facebook from '../../../imgResume/facebook.svg'

const Social = () => {
  return (
      <nav className = "nav-social">
          <ul className = "nav-list-social">
              <li className = "nav-item-social">
                  <img src = {inst} className ="nav-img" />
              </li>
              <li className = "nav-item-social">
                  <img src = {facebook} className ="nav-img" />
              </li>
          </ul>
      </nav>

  );
}

export default Social;