import "../contact.css"
import Button from "../../sharedComponents/ButtonComponent"
const ContactForm = () => {
    return (
        <div className="form__container">
            <form>
                <div className="form__inputs">
                    <label className="contactDetails">
                        {/*<span class="contactMe">Name</span> */}
                        <input type="text" name="person" id="name" placeholder="Name" />
                    </label>
                    <label className="contactDetails">
                        <input type="email" name="email" id="email" placeholder="Email" />
                    </label>
                    <label className="contactDetails">
                        <input type="phone" name="phone" id="phone" placeholder="0027832678210" />
                    </label>
                    <label className="contactDetails">
                        <textarea name="message" id="" cols="30" rows="2" placeholder="Message"></textarea>
                    </label>
                </div>

                <div className="btn__ctrl">
                    <Button title="Submit" />
                </div>

            </form>
        </div>
    )
}
export default ContactForm
