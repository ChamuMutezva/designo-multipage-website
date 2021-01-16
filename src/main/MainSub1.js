import WebMobile from "../assets/home/mobile/image-web-design.jpg"
import WebTablet from "../assets/home/tablet/image-web-design.jpg"
import WebDesktopSmall from "../assets/home/desktop/image-web-design-small.jpg"
import WebDesktopLarge from "../assets/home/desktop/image-web-design-large.jpg"

import AppMobile from "../assets/home/mobile/image-app-design.jpg"
import AppTablet from "../assets/home/tablet/image-app-design.jpg"
import AppDesktop from "../assets/home/desktop/image-app-design.jpg"

import DesignMobile from "../assets/home/mobile/image-graphic-design.jpg"
import DesignTablet from "../assets/home/tablet/image-graphic-design.jpg"
import DesignDesktop from "../assets/home/desktop/image-graphic-design.jpg"

import IconRightArrow from "../assets/shared/desktop/icon-right-arrow.svg"

import './Main.css'

const MainSub1 = () => {
    return (
        <div className="main__container">

            <div className="projects">
                <div className="webdesign project">
                    <img className="project_img" src={WebMobile} alt="web design"
                        sizes="(min-width: 1080px) 780px,
                            (min-width: 680px) 580px, 100%"
                        srcSet={`${WebMobile} 327w, ${WebTablet} 689w,
                           ${WebDesktopSmall} 541w , ${WebDesktopLarge} 541W`} />
                    <div className="project__summary">
                        <h2 className="project__summary__title">Web design</h2>
                        <button className="project__btn">View projects
                        <img src={IconRightArrow} className="project__btn__img" alt="web design"/>
                        </button>
                    </div>

                </div>
                <div className="appdesign project">
                    <img className="project_img" src={AppMobile} alt="App design"
                        sizes="(min-width: 1080px) 780px,
                            (min-width: 680px) 580px , 100%"
                        srcSet={`${AppMobile} 327w, ${AppTablet} 689w,
                           ${AppDesktop} 541w`} />

                    <div className="project__summary">
                        <h2 className="project__summary__title">App design</h2>
                        <button className="project__btn">View projects
                        <img src={IconRightArrow} className="project__btn__img" alt="app design" />
                        </button>
                    </div>

                </div>
                <div className="graphicDesign project">
                    <img className="project_img" src={DesignMobile} alt="graphic design"
                        sizes="(min-width: 1080px) 780px,
                            (min-width: 680px) 580px, 100%"
                        srcSet={`${DesignMobile} 327w, ${DesignTablet} 689w,
                           ${DesignDesktop} 541w`} />
                    <div className="project__summary">
                        <h2 className="project__summary__title">Graphic design</h2>
                        <button className="project__btn">View projects
                         <img src={IconRightArrow} className="project__btn__img" alt="graphic design"/>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default MainSub1