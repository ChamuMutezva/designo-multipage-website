import { useState } from "react"
import "../contact.css"
import Button from "../../sharedComponents/ButtonComponent"
const ContactForm = () => {
    /*  const intitialState = {
          fullname: "",
          emailAddress: "",
          phone: "",
          message: ""
      }
      const [formData, setFormData] = useState(intitialState)
      const onChangeHandler = (evt) => {
          const { name, value } = evt.target
          console.log(name, value)
          setFormData({ ...formData, [name]: value })
      }
      const submitForm = (evt) => {
          evt.preventDefault()
          console.log(FormData)
  
      }
      const { fullname, emailAddress, phone, message } = formData
  console.log(fullname)
  */
    const [newName, setNewName] = useState("")
    const [newEmail, setNewEmail] = useState("")
    const [newPhone, setNewPhone] = useState("")
    const [newMsg, setNewMsg] = useState("")
    const [newData, setNewData] = useState([])

    const onChangeName = (evt) => {
        console.log(evt.target.value)
        setNewName(evt.target.value)
    }
    const onChangeEmail = (evt) => {
        console.log(evt.target.value)
        setNewEmail(evt.target.value)
    }
    const onChangePhone = (evt) => {
        console.log(evt.target.value)
        setNewPhone(evt.target.value)
    }
    const onChangeMsg = (evt) => {
        console.log(evt.target.value)
        setNewMsg(evt.target.value)
    }
    const submitForm = (evt) => {
        evt.preventDefault()
        const dataObj = {
            name: newName,
            email: newEmail,
            phone: newPhone,
            msg: newMsg,
            id: newData.length + 1
        }
        setNewData(newData.concat(dataObj))
        setNewName('')
        setNewEmail('')
        setNewPhone('')
        setNewMsg('')
        console.log(newData)

    }
    return (
        <div className="form__container">
            <form onSubmit={submitForm}>
                <div className="form__inputs">
                    <label className="contactDetails">
                        {/*<span class="contactMe">Name</span> */}
                        <input type="text" name="name" id="name" value={newName}
                            placeholder="Name" required onChange={onChangeName} />
                    </label>
                    <label className="contactDetails">
                        <input type="email" name="email" id="emailaddress" value={newEmail}
                            placeholder="xyz@gmail.com" required onChange={onChangeEmail} />
                    </label>
                    <label className="contactDetails">
                        <input type="tel" name="phone" id="phone" value={newPhone}
                            placeholder="0027832678210" required onChange={onChangePhone} />
                    </label>
                    <label className="contactDetails">
                        <textarea name="message" id="msg" cols="30" rows="2" value={newMsg}
                            placeholder="Message" onChange={onChangeMsg}></textarea>
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
