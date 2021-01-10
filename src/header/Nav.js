import HeaderPrimary from "./HeaderPrimary"
import Logo1 from '../assets/shared/desktop/logo-light.png'
import Logo from '../assets/shared/desktop/logo-dark.png'
import Hamburger from '../assets/shared/mobile/icon-hamburger.svg'
import CloseMenu from '../assets/shared/mobile/icon-close.svg'
import './Header.css'

const Navigation = () => {
    return (
        <div className="nav__container">
            <div className="nav">
                <div className="nav__controls">
                    <div className="logoContainer" aria-label="designo design">
                        <a href="">
                            <img src={Logo} alt="designo landing page" className="logo" tabIndex="0" />
                        </a>
                    </div>
                </div>
                <div className="menu__ctrls">
                    <button className="menu__ctrls--btn btn--open"><img src={Hamburger} alt="open modal menu" tabIndex="0" /></button>
                    <button className="menu__ctrls--btn btn--close"><img src={CloseMenu} alt="close modal menu" tabIndex="0" /> </button>
                </div>
            </div>
            
            <div className="modal">
                <ul className="modal__menuList">
                    <li tabIndex="0"><a href="">OUR COMPANY</a></li>
                    <li tabIndex="0"><a href="">LOCATIONS</a></li>
                    <li tabIndex="0"><a href="">CONTACT</a></li>
                </ul>

            </div>
        </div>
    )
}
export default Navigation