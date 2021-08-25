import './Contact.scss'
import insta from "../../../imgResume/instagram.svg"
import Git from "../../../imgResume/github.svg"
import Telegram from "../../../imgResume/telegram.svg"
import Phone from "../../../imgResume/whatsapp.svg"
import Email from "../../../imgResume/email.svg"


const Contact = ({ id }) => {
    return (
        <section className="c-contact">
          <div className="contact-container" id={id}>
            <h2 className="contact-text">
                <a className="contact-border">Contact</a>
            </h2>
            <button className="contact-button">request</button>
            <div >
                <nav className="social-container">
                    <ul className="nav-social-contact">
                        <li className="nav-item-social-contact">
                            <img src={insta} alt="inst" className=""/>
                        </li>
                        <li className="nav-item-social-contact">
                            <img src={Git} alt="inst" className=""/>
                        </li>
                        <li className="nav-item-social-contact">
                            <img src={Telegram} alt="inst" className=""/>
                        </li>
                        <li className="nav-item-social-contact">
                            <img src={Phone} alt="inst" className=""/>
                        </li>
                        <li className="nav-item-social-contact">
                            <img src={Email} alt="inst" className=""/>
                        </li>
                    </ul>
                </nav>
            </div>
          </div>
        </section>
    );
}

export default Contact;