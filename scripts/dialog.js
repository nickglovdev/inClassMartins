const initializeDetailButtonEvents = () => {
    // CAN'T TOUCH THIS - START
    const allCloseButtons = document.querySelectorAll(".button--close")

    for (const btn of allCloseButtons) {
        btn.addEventListener("click", theEvent => {
                const dialogElement = theEvent.target.parentNode
                dialogElement.close()
            }
        )
    }
    // CAN'T TOUCH THIS - END
    // Get a reference to all buttons that start with "button--"
    const allDetailButtons = document.querySelectorAll("button[id^='button--']")

    // Add an event listener to each one
    for (const btn of allDetailButtons) {
        btn.addEventListener(
            "click",
            theEvent => {
                const dialogSiblingSelector = `#${theEvent.target.id}+dialog`
                const theDialog = document.querySelector(dialogSiblingSelector)
                theDialog.showModal()
            }
        )
    }

    // You will be writing code below this line

    // Show Bart's details when the button is clicked
    // document.querySelector("#button--bart").addEventListener(
    //     "click",
    //     theClickEvent => {
    //         const theDialog = document.querySelector("#details--bart")
    //         theDialog.showModal()
    //     }
    // )

    // // Show Betty's details when the button is clicked
    // document.querySelector("#button--betty").addEventListener(
    //     "click",
    //     theClickEvent => {
    //         const theDialog = document.querySelector("#details--betty")
    //         theDialog.showModal()
    //     }
    // )

    // // Show Nemo's details when the button is clicked
    // document.querySelector("#button--nemo").addEventListener(
    //     "click",
    //     theClickEvent => {
    //         const theDialog = document.querySelector("#details--nemo")
    //         theDialog.showModal()
    //     }
    // )

    // // Show Dory's details when the button is clicked
    // document.querySelector("#button--dory").addEventListener(
    //     "click",
    //     theClickEvent => {
    //         const theDialog = document.querySelector("#details--dory")
    //         theDialog.showModal()
    //     }
    // )
}

export default initializeDetailButtonEvents