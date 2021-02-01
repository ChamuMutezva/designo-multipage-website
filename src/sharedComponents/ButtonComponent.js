import "./../sharedStyles/Appwebdesign.css"
const Button = (props) => {
    return (
        <button className="btn__component" type="submit" aria-label={props.label} tabindex="0">
            {props.title}
        </button>
    )
}
export default Button