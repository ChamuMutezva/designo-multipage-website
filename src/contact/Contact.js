import ContactHeader from "../contact/contact_page_header/ContactPageHeader"
import Mainsubabout from "../about/about_page_main/MainSubAbout"
import MainFooter from '../webdesign/web_design_footer/WebDesignFooter'
const Contact = () => {
    return(
        <div className="contactHeader">
            <ContactHeader/>
            <Mainsubabout/>
            <MainFooter/>
        </div>
    )
}
export default Contact