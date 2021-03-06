import MainProjectCard from "../../main/MainProjectCard"
import WebMobile from "../../assets/home/mobile/image-web-design.jpg"
import WebTablet from "../../assets/home/tablet/image-web-design.jpg"
import WebDesktopSmall from "../../assets/home/desktop/image-web-design-small.jpg"
//import WebDesktopLarge from "../../assets/home/desktop/image-web-design-large.jpg"

// import AppMobile from "../../assets/home/mobile/image-app-design.jpg"
// import AppTablet from "../../assets/home/tablet/image-app-design.jpg"
// import AppDesktop from "../../assets/home/desktop/image-app-design.jpg"

import DesignMobile from "../../assets/home/mobile/image-graphic-design.jpg"
import DesignTablet from "../../assets/home/tablet/image-graphic-design.jpg"
import DesignDesktop from "../../assets/home/desktop/image-graphic-design.jpg"

import IconRightArrow from "../../assets/shared/desktop/icon-right-arrow.svg"

import '../../main/Main.css'
//`import './Main.css'

const MainSubApp = () => {
    return (

        <div className="main__container">

            <div className="projects projects__web">

                <MainProjectCard src={WebMobile} alt="web design"
                    className="appdesign projects__web__design"
                    sizes="(min-width: 1090px) 341px, (min-width: 650px) 40vw,  50vw"
                    srcSet={`${WebMobile} 327w, ${WebTablet} 689w,
                           ${WebDesktopSmall} 541w`} name="WEB DESIGN"
                    Link="/webdesign" label="web design page"
                    src2={IconRightArrow} alt2="proceed to view web designs"
                />

                <MainProjectCard src={DesignMobile} alt="graphic design"
                    className="graphicdesign projects__web__design"
                    sizes="(min-width: 1090px) 341px, (min-width: 650px) 40vw,  50vw"
                    srcSet={`${DesignMobile} 327w, ${DesignTablet} 689w,
                           ${DesignDesktop} 541w`} name="GRAPHIC DESIGN"
                    Link="/graphicdesign" label="graphic design page"
                    src2={IconRightArrow} alt2="proceed to view graphic designs"
                />

            </div>

        </div>

    )
}
export default MainSubApp
