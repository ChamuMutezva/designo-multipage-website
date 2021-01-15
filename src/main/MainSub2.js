import Passionate from '../assets/home/desktop/illustration-passionate.svg'
import Resourceful from '../assets/home/desktop/illustration-resourceful.svg'
import Friendly from "../assets/home/desktop/illustration-friendly.svg"

const MainSub2 = () => {
    return (
        <div className="additionalInfo">
            <figure>
                <img src={Passionate} alt="passionate" />
                <figcaption>
                    <h3>
                        Passionate
                    </h3>
                    <p>
                        Each project starts with an in-depth brand research to ensure we
                        only create products that serve a purpose. We merge
                        art, design, and technology into exciting new solutions.
                    </p>
                </figcaption>
            </figure>

            <figure>
                <img src={Resourceful} alt="resourceful"/>
                <figcaption>
                    <h3>
                        Resourceful
                    </h3>
                    <p>
                        Everything that we do has a strategic purpose.
                        We use an agile approach in all of our projects and value customer
                        collaboration. It guarantees superior results that fulfill our clients’ needs.
                    </p>
                </figcaption>
            </figure>

            <figure>
                <img src={Friendly} alt="friendly"/>
                <figcaption>
                    <h3> Friendly</h3>
                    <p>
                        We are a group of enthusiastic folks who know how to put people first.
                        Our success depends on our customers, and we
                        strive to give them the best experience a company can provide.
                    </p>
                </figcaption>
            </figure>


        </div>
    )
}
export default MainSub2