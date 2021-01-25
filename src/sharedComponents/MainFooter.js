import { Link } from "react-router-dom"
import Logo from '../assets/shared/desktop/logo-dark.png'
import facebook from '../assets/shared/desktop/icon-facebook.svg'
import instagram from '../assets/shared/desktop/icon-instagram.svg'
import twitter from '../assets/shared/desktop/icon-twitter.svg'
import pinterest from '../assets/shared/desktop/icon-pinterest.svg'
import youtube from '../assets/shared/desktop/icon-youtube.svg'
import  '../sharedStyles/Footer.css'
//import './Footer.css'
const MainFooter = () => {
    return (
        <div className="mainFooter">
            <div className="footerLogo__container">
                <img src={Logo} alt="designo landing page" className="footerLogo" />
            </div>

            <div className="footer__menu">
                <ul className="footer__menuList">
                    <li tabIndex="0"><Link to="/about">OUR COMPANY</Link></li>
                    <li tabIndex="0"><Link to="/locations">LOCATIONS</Link></li>
                    <li tabIndex="0"><Link to="/contact">CONTACT</Link></li>
                </ul>
            </div>

            <address className="address1 address">
                <p>Designo Central Office</p>
                <p>3886 Wellington Street</p>
                <p>Toronto, Ontario M9C 3J5</p>
            </address>

            <address className="address2 address">
                <p> Contact Us (Central Office)</p>
                <p> P : +1 253-863-8967</p>
                <p> M : contact@designo.co</p>
            </address>

            <div className="socials">
                <div>
                    <a href="/"> <img src={facebook} alt="facebook page" />  </a>
                </div>

                <div>
                    <a href="/"> <img src={instagram} alt="instagram page" />  </a>
                </div>

                <div>
                    <a href="/"> <img src={twitter} alt="twitter page" />  </a>
                </div>

                <div>
                    <a href="/"> <img src={pinterest} alt="pinterest page" />  </a>
                </div>

                <div>
                    <a href="/"> <img src={youtube} alt="youtube page" />  </a>
                </div>
            </div>

        </div>
    )
}
export default MainFooter