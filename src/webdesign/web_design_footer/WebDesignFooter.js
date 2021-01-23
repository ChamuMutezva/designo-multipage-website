import Aside from '../../footer/AsideFooter'
import MainFooter from '../../footer/MainFooter'
const WebDesignFooter = () => {
    return (
        <div className="footer">
            <aside>
                <Aside title="Let’s talk about your project"
                 summary=" Ready to take it to the next level? Contact us
                  today and find out how our expertise can help 
                 your business grow."/>
            </aside>

            <MainFooter />
        </div>
    )
}
export default WebDesignFooter 
  