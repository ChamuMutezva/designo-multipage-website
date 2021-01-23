import expressImg from '../../assets/web-design/desktop/image-express.jpg'
import transferImg from '../../assets/web-design/desktop/image-transfer.jpg'
import photonImg from '../../assets/web-design/desktop/image-photon.jpg'
import builderImg from '../../assets/web-design/desktop/image-builder.jpg'
import blogrImg from '../../assets/web-design/desktop/image-blogr.jpg'
import campImg from '../../assets/web-design/desktop/image-camp.jpg'

import '../../sharedStyles/Appwebdesign.css'


const Webdesignmain = () => {
    return (
        <div className="main__container">
            <div className="additionalInfo additionalInfo__web">
                <div className="express">
                    <img src={expressImg} className="additionalInfo__img__designs" alt="express website design" />
                    <div className="additionalInfo__container">
                        <h2 className="additionalInfo__title">Express</h2>
                        <p className="additionalInfo__desc">
                            A multi-carrier shipping website for ecommerce businesses
                       </p>
                    </div>
                </div>

                <div className="transfer">
                    <img src={transferImg} className="additionalInfo__img__designs" alt="transfer international website design" />
                    <div className="additionalInfo__container">
                        <h2 className="additionalInfo__title">Transfer</h2>
                        <p className="additionalInfo__desc">
                            Site for low-cost money transfers and sending money within seconds
                       </p>
                    </div>
                </div>

                <div className="photon">
                    <img src={photonImg} className="additionalInfo__img__designs" alt="photon international website design" />
                    <div className="additionalInfo__container">
                        <h2 className="additionalInfo__title">Photon</h2>
                        <p className="additionalInfo__desc">
                            A state-of-the-art music player with high-resolution audio and DSP effects
                       </p>
                    </div>
                </div>

                <div className="builder">
                    <img src={builderImg} className="additionalInfo__img__designs" alt="builder international website design" />
                    <div className="additionalInfo__container">
                        <h2 className="additionalInfo__title"> Builder</h2>
                        <p className="additionalInfo__desc">
                            Connects users with local contractors based on their location
                       </p>
                    </div>
                </div>

                <div className="blogr">
                    <img src={blogrImg} className="additionalInfo__img__designs" alt="blogr international website design" />
                    <div className="additionalInfo__container">
                        <h2 className="additionalInfo__title"> Blogr</h2>
                        <p className="additionalInfo__desc">
                            Blogr is a platform for creating an online blog or publication
                       </p>
                    </div>
                </div>

                <div className="blogr">
                    <img src={campImg} className="additionalInfo__img__designs" alt="blogr international website design" />
                    <div className="additionalInfo__container">
                        <h2 className="additionalInfo__title"> Camp</h2>
                        <p className="additionalInfo__desc">
                            Get expert training in coding, data, design, and digital marketing
                       </p>
                    </div>
                </div>

            </div>

        </div>
    )
}
export default Webdesignmain