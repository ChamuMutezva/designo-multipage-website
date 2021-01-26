import '../../sharedStyles/Appwebdesign.css'
import HeroShared from "../../sharedComponents/HeroShared"
import HeroImg from "../../assets/about/desktop/image-about-hero.jpg"
import TalentImg from "../../assets/about/desktop/image-world-class-talent.jpg"
import "../about.css"
const Aboutpageheader = () => {
    return (
        <div className="hero__container">
            <div className="hero__container hero__container__about">
                <div className="hero_image_about">
                    <img src={HeroImg} alt="" />
                </div>
                <HeroShared title="About us"
                    summary="
            Founded in 2010, we are a creative agency that produces lasting results for our clients. 
            We’ve partnered with many startups, corporations, and nonprofits alike to craft designs 
            that make real impact. We’re always looking forward to creating brands, products, and 
            digital experiences that connect with our clients' audiences."/>
            </div>

            <div className="hero__container hero__container__about">
                <div className="hero_image_about">
                    <img src={TalentImg} alt="world class talent"/>
                </div>
                <HeroShared title="World-class talent" 
                summary="We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully 
                crafted from concept to launch, ensuring success in its given market. We are constantly updating 
                our skills in a myriad of platforms."
                summary="Our team is multi-disciplinary and we are not merely interested in form — content and meaning 
                are just as important. We give great importance to craftsmanship, service, and prompt delivery. 
                Clients have always been impressed with our high-quality outcomes that encapsulates their 
                brand’s story and mission."/>       
 

 
            </div>

        </div>
    )
}
export default Aboutpageheader