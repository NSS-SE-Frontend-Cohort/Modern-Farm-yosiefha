export const Catalog = (harvestedSeeds) => {
    
    const container = document.querySelector('.container');
    container.innerHTML = '';
    harvestedSeeds.forEach(seed => {
        container.innerHTML += `<section class="plant">${seed.type}</section>`;
    });
};