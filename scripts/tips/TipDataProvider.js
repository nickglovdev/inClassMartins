const  tipCollection = [
    {
        cleaning: "Make sure tank is clean well",
        removing: "Any dead plants or fish",
    },
    {
        cleaning: "Move the fish into a bucket",
        removing: "Remove coral if damaged"
    },
    {
        cleaning: "Take a break some time",
        removing: "Remove cleaning tube."
    }
]

export const useTips = () => {
    return tipCollection.slice()
}