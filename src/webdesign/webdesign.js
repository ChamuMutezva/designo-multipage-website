import Hero from './web_design_header/WebDesignHeader'
import Webdesignmain from './web_design_main/WebDesignMain'
import MainSub3 from './web_design_main/MainSub3'
const Webdesign = () => {
    return (
        <div className="web">
            <Hero />
            <div className="mainSection">
                <Webdesignmain />
                <MainSub3/>
            </div>
        </div>
    )
}
export default Webdesign