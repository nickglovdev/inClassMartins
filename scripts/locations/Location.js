const locations = (area) => {
    return `      
    <section class="location__image"><img src="${area.image}" alt=""></section>
    <section class="location">${area.location}</section>      
    <section class="location__quote>${area.quote}</section>
    `
}

export default locations