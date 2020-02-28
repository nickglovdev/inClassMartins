import { useTips } from "./TipDataProvider.js";
import Tip from "./Tip.js";

const contentTarget = document.querySelector(".tip")

const TipList = () => {
    // Get the data from the provider
    const tipObjectsArray = useTips()

    // Iterate the array
    for (const tipObject of tipObjectsArray) {
        // Convert each object to HTML representation
        const tipHTMLRepresentation = Tip(tipObject)

        // Put HTML in DOM
        contentTarget.innerHTML += tipHTMLRepresentation

    }

}

export default TipList