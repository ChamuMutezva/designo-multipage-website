import "./../sharedStyles/Appwebdesign.css"
const Button = (props) => {
    return (
        <button className="btn__component">
            {props.title}
        </button>
    )
}
export default Button