import Canada from "../../assets/shared/desktop/illustration-canada.svg"
import UK from "../../assets/shared/desktop/illustration-united-kingdom.svg"
import Australia from "../../assets/shared/desktop/illustration-australia.svg"
import MainCountries from "./MainCountriesComponent"
const Mainsubabout = () => {
    return(
        <div className="countryCard">
        <MainCountries src={Canada} title="CANADA" summary="SEE LOCATION" />
        <MainCountries src={Australia} title="AUSTRALIA" summary="SEE LOCATION" />
        <MainCountries src={UK} title="UNITED KINGDOM" summary="SEE LOCATION" />
        </div>
    )
}
export default Mainsubabout