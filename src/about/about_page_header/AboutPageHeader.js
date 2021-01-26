import '../../sharedStyles/Appwebdesign.css'
import HeroShared from "../../sharedComponents/HeroShared"
import HeroImg from "../../assets/about/desktop/image-about-hero.jpg"
import "../about.css"
const Aboutpageheader = () => {
    return(
       <div className="hero__container">          
           <div className="hero__container">
            <div className="hero_image_about">
               <img src={HeroImg} alt=""/>
           </div>
            <HeroShared title="About us" 
            summary="
            Founded in 2010, we are a creative agency that produces lasting results for our clients. 
            We’ve partnered with many startups, corporations, and nonprofits alike to craft designs 
            that make real impact. We’re always looking forward to creating brands, products, and 
            digital experiences that connect with our clients' audiences."/>
        </div>
           
       </div>
    )
}
export default Aboutpageheader