import { useTips } from "./TipDataProvider.js";
import Fish from "./Tip";

const contentTarget = document.querySelector(".tip")

const FishList = () => {
    // Get the data from the provider
    const tipObjectsArray = useTips()

    // Iterate the array
    for (const tipObject of tipObjectsArray) {
        // Convert each object to HTML representation
        const fishHTMLRepresentation = Fish(tipObject)

        // Put HTML in DOM
        contentTarget.innerHTML += tipHTMLRepresentation

    }

}

export default TipList