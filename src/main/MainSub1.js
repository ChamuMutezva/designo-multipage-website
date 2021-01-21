import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
//import { useState } from 'react'
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

import Webdesign from '../webdesign/webdesign'
import Home from '../homepage/home'

import './Main.css'

const MainSub1 = () => {
    /*  const [page, setPage] = useState('home')
  
      const toPage = (page) => (event) => {
          event.preventDefault()
          setPage(page)
      }
  */
    return (

        <div className="main__container">

            <div className="projects">
                <div className="webdesign project">
                    <img className="project_img" src={WebMobile} alt="web design"
                        sizes="(min-width: 1090px) 341px,
                         (min-width: 650px) 40vw,  50vw"
                        srcSet={`${WebMobile} 327w, ${WebTablet} 689w, ${WebDesktopSmall} 541w,
                         ${WebDesktopLarge} 541w`}
                    />
                    <div className="project__summary">
                        <h2 className="project__summary__title">Web design</h2>
                        <Link to="/webdesign" className="project__btn" >View projects
                        <img src={IconRightArrow} className="project__btn__img" alt="web design" />
                        </Link>
                    </div>

                </div>
                <div className="appdesign project">
                    <img className="project_img" src={AppMobile} alt="App design"
                        sizes="(min-width: 1080px) 541px,
                            (min-width: 650px) 40vw , 50vw"
                        srcSet={`${AppMobile} 327w, ${AppTablet} 689w,
                           ${AppDesktop} 541w`}
                    />

                    <div className="project__summary">
                        <h2 className="project__summary__title">App design</h2>
                        <Link to="/appdesign" className="project__btn">View projects
                        <img src={IconRightArrow} className="project__btn__img" alt="app design" />
                        </Link>
                    </div>

                </div>
                <div className="graphicDesign project">
                    <img className="project_img" src={DesignMobile} alt="graphic design"
                        sizes="(min-width: 1080px) 541px,
                            (min-width: 650px) 40vw, 50vw"
                        srcSet={`${DesignMobile} 327w, ${DesignTablet} 689w,
                           ${DesignDesktop} 541w`} />
                    <div className="project__summary">
                        <h2 className="project__summary__title">Graphic design</h2>
                        <Link to="/graphicdesign" className="project__btn">View projects
                         <img src={IconRightArrow} className="project__btn__img" alt="graphic design" />
                        </Link>
                    </div>
                </div>
            </div>


        </div>

    )
}
export default MainSub1
