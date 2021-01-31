import "./../sharedStyles/Appwebdesign.css"
const Button = (props) => {
    return (
        <button className="btn__component" type="submit">
            {props.title}
        </button>
    )
}
export default Button