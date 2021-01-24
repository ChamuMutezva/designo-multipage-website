const AdditionalInfoCard = (props) => {
    return (
        <div className="infoCard">
            <img src={props.src} className="additionalInfo__img__designs" alt={props.alt} />
            <div className="additionalInfo__container">
                <h2 className="additionalInfo__title">{props.title}</h2>
                <p className="additionalInfo__desc">{props.summary}</p>
            </div>
        </div>
    )
}
export default AdditionalInfoCard