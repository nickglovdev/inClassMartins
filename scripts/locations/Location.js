const locations = (location) => {
    return `      
    <section class="location__image"><img src="${location.image}" alt=""></section>
    <section class="location">${location.location}</section>      
    <section class="location__quote>${location.quote}</section>
    `
}

export default locations