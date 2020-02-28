const  locationCollection = [
    {
        image: "http://scuba.spanglers.com/_/rsrc/1512245376637/dives/indo-pacific/2016-12-05c-31433%20-%20Bennetts%20feather%20star.jpg?height=266&width=400",
        quote: "Indo-western Pacific is know for it's many islands, and places to harvest",
        location: "Indo-western Pacific",
    },
    {
        image: "https://www.worldatlas.com/r/w1200-h701-c1200x701/upload/c7/23/e9/shutterstock-443556646.jpg",
        quote: "Interesting culture to be haved when fishing in this area",
        location: "India Ocean"
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Gfp-texas-galveston-island-state-park-inlet-shore.jpg/1024px-Gfp-texas-galveston-island-state-park-inlet-shore.jpg",
        quote: "Good place to fish when it's colder outside.",
        location: "Gulf of Mexico.",
  
    }
]

export const locationInfo = () => {
    return locationCollection.slice()
}