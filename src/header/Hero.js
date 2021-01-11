import HeroBackground from "../assets/shared/mobile/bg-pattern-design-pages-intro-mobile.svg"
import HeroImg from '../assets/home/desktop/image-hero-phone.png'
const Hero = () => {
    return (
        <div className="hero__container">
            <div className="hero">
                <h2 className="hero__title">
                    Award-winning custom designs and digital branding solutions
                </h2>
                <p className="hero__summary">
                    With over 10 years in the industry, we are experienced in creating fully responsive websites, app design,
                    and engaging brand experiences. Find out more about our services.
                </p>
                <button className="hero__btn">
                    Learn more
                </button>
            </div>
            <div className="hero__imageDisplay">
                {/*<img src={HeroImg} alt=""/> */}
            </div>
        </div>
    )
}
export default Hero