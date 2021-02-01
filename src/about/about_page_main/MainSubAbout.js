import Canada from "../../assets/shared/desktop/illustration-canada.svg"
import UK from "../../assets/shared/desktop/illustration-united-kingdom.svg"
import Australia from "../../assets/shared/desktop/illustration-australia.svg"
import MainCountries from "./MainCountriesComponent"
const Mainsubabout = () => {
    return(
        <div className="countryCard">
        <MainCountries src={Canada} title="CANADA" summary="SEE LOCATION" label="go to Canada's location"/>
        <MainCountries src={Australia} title="AUSTRALIA" summary="SEE LOCATION" label="go to Australia's location" />
        <MainCountries src={UK} title="UNITED KINGDOM" summary="SEE LOCATION" label="go to the United Kingdom's location" />
        </div>
    )
}
export default Mainsubabout