const locations = (area) => {
    return `      
    <section><img class="location__image" src="${area.image}" alt=""></section>
    <section class="location">${area.location}</section>      
    <section class="location__quote>${area.quote}</section>
    `
}

export default locations