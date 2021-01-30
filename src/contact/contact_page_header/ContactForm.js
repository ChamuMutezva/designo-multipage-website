import "../contact.css"
const ContactForm = () => {
    return (
        <div className="form__container">
            <form>
                <label class="contactDetails">
                   {/*<span class="contactMe">Name</span> */}
                    <input type="text" name="person" id="name" placeholder="Name" />
                </label>
                <label class="contactDetails">                   
                    <input type="email" name="email" id="email" placeholder="Email" />
                </label>
                <label class="contactDetails">                    
                    <input type="phone" name="phone" id="phone" placeholder="0027832678210" />
                </label>
                <label class="contactDetails">                    
                    <textarea name="message" id="" cols="30" rows="5" placeholder="Message"></textarea>
                </label>

                <button class="submitDetails" type="button">
                    Submit
            </button>
            </form>
        </div>
    )
}
export default ContactForm
