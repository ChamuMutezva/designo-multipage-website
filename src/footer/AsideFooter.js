import './Footer.css'
const Aside = (props) => {
    return (
        
            <div className="aside__container">
                <h4 className="aside__title">{props.title}</h4>
                <p className="aside__summary">{props.summary}
                </p>
                <button className="aside__btn">Get in touch</button>
            </div>
        
    )
}

export default Aside