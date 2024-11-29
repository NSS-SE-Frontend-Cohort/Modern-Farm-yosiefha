export const Catalog = (harvestedSeeds) => {
    
   
    const container = document.querySelector('.container');
    container.innerHTML = '';  

    
    harvestedSeeds.forEach(food => {
        const foodElement = document.createElement('section');
        foodElement.classList.add('plant');
        
        
        foodElement.innerHTML = `${food.icon}`;
        container.appendChild(foodElement);
    });
   
};