import Logo from '../assets/shared/desktop/logo-dark.png'
import facebook from '../assets/shared/desktop/icon-facebook.svg'
import instagram from '../assets/shared/desktop/icon-instagram.svg'
import twitter from '../assets/shared/desktop/icon-twitter.svg'
import pinterest from '../assets/shared/desktop/icon-pinterest.svg'
import youtube from '../assets/shared/desktop/icon-youtube.svg'
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer">
            <aside>
                <div className="aside__container">
                    <h4 className="aside__title">Let’s talk about your project</h4>
                    <p className="aside__summary">
                        Ready to take it to the next level? Contact us today and find out
                        how our expertise can help your business grow.
                    </p>
                    <button className="aside__btn">Get in touch</button>
                </div>
            </aside>

            <div className="mainFooter">
                <div className="footerLogo__container">
                    <img src={Logo} alt="designo landing page" className="footerLogo" />
                </div>

                <div className="footer__menu">
                    <ul className="footer__menuList">
                        <li tabIndex="0"><a href="/">OUR COMPANY</a></li>
                        <li tabIndex="0"><a href="/">LOCATIONS</a></li>
                        <li tabIndex="0"><a href="/">CONTACT</a></li>
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




        </div>
    )
}

export default Footer