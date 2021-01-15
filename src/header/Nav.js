import { useState } from 'react'
//import HeaderPrimary from "./HeaderPrimary"
//import Logo1 from '../assets/shared/desktop/logo-light.png'
import Logo from '../assets/shared/desktop/logo-dark.png'
import Hamburger from '../assets/shared/mobile/icon-hamburger.svg'
import CloseMenu from '../assets/shared/mobile/icon-close.svg'
import './Header.css'

const Navigation = () => {
    const [ShowModal, setShowModal] = useState(true)

    const displayModal = () => {
        console.log("Menu close button clicked")
        setShowModal(!ShowModal)
        //const modal = document.querySelector('.modal')
        //const openBtn = document.querySelector('.btn--open')
       // const closeBtn = document.querySelector('.btn--close')
        //modal.classList.toggle("modalShow")
        //openBtn.classList.toggle("openBtn")
        //closeBtn.classList.toggle("closeBtn")

    }

    return (
        <div className="nav__container">
            <div className="nav">
                <div className="nav__controls">
                    <div className="logoContainer" aria-label="designo design">
                        <a href="/">
                            <img src={Logo} alt="designo landing page" className="logo" tabIndex="0" />
                        </a>
                    </div>
                </div>
                <div className="menu__ctrls">
                    <button className={`menu__ctrls--btn btn--open ${ShowModal ? "closeBtn" : "openBtn"}`}><img src={Hamburger}
                    onClick={displayModal} alt="open modal menu" tabIndex="0" /></button>
                    <button className={`menu__ctrls--btn btn--close ${ShowModal ? "openBtn" : "closeBtn"}`}><img src={CloseMenu}
                    onClick={displayModal} alt="close modal menu" tabIndex="0" /> </button>
                </div>
            </div>
            
            <div className="modal">
                <ul className={`modal__menuList ${ShowModal ? "modalHide" : "modalShow"}`}>
                    <li tabIndex="0"><a href="/">OUR COMPANY</a></li>
                    <li tabIndex="0"><a href="/">LOCATIONS</a></li>
                    <li tabIndex="0"><a href="/">CONTACT</a></li>
                </ul>

            </div>
        </div>
    )
}
export default Navigation