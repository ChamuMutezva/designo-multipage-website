import '../header/Header.css'
//import  '../Web.css'
import '../sharedStyles/Appwebdesign.css'

const HeroSharedComponent = (props) => {
    return(
        <div className="hero hero__web">
                <h2 className="hero__title">
                   {props.title}
                </h2>
                <p className="hero__summary">
                    {props.summary}
                </p>
            </div>
    )
}
export default HeroSharedComponent