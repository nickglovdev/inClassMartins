/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const fishCollection = [
    {
        name: "Betty",
        image: "https://i.ytimg.com/vi/z_XlTRYLZ1Q/maxresdefault.jpg",
        species: "Longtooth Barracuda",
        location: "Cumberland River",
        length: 10,
        food: ["Squid"]
    },
    {
        name: "Bart",
        species: "Orange Clownfish",
        image: "https://3.imimg.com/data3/IW/XT/GLADMIN-105863/fish-125x125.jpg",
        location: "Caribbean",
        length: 3,
        food: ["Algae", "Crustaceans"]
    },
    {
        length: 9,
        species: "Clownfish",
        food: ["Plankton"],
        location: "Great Barrier Reef",
        name: "Nemo",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.7xhhlta3q-wVKpgzGdTlpAHaFj%26pid%3DApi&f=1"
    },
    {
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthedisneyinme.files.wordpress.com%2F2013%2F12%2Fdory.jpg&f=1&nofb=1",
        name: "Dory",
        species: "Blue Tang",
        location: "New Zealand Sea",
        length: 11,
        food: ["Clownfish"]
    }
]

export const useFish = () => {
    return fishCollection.slice()
}

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (const fish of fishCollection) {
        if (fish.length % 3 === 0) {
            holyFish.push(fish)
        }
    }

    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldiers = []

    for (const fish of fishCollection) {
        if (fish.length % 5 === 0) {
            soldiers.push(fish)
        }
    }

    return soldiers
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const regularFish = []

    for (const fish of fishCollection) {
        if (fish.length % 5 !== 0 && fish.length % 3 !== 0) {
            regularFish.push(fish)
        }
    }

    return regularFish
}