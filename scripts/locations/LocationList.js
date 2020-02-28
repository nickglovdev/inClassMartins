import { locationInfo } from "./LocationDataProvider.js";
import locations from "./Location.js";

const contentTarget = document.querySelector(".locations")

const locationList = () => {
    // Get the data from the provider
    const locationObjectsArray = locationInfo()

    // Iterate the array
    for (const locationObject of locationObjectsArray) {
        // Convert each object to HTML representation
        const locationHTMLRepresentation = locations(locationObject)

        // Put HTML in DOM
        contentTarget.innerHTML += locationHTMLRepresentation

    }

}

export default locationList