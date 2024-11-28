
export const harvestPlants = (plantsArray) => {
    const harvested = []; 

    for (const plant of plantsArray) {
       //getting the output from each  seed
        const harvestAmount = plant.type === "Corn" 
            ? Math.floor(plant.output / 2) 
            : plant.output;                

       
        for (let i = 0; i < harvestAmount; i++) {
            harvested.push(plant);
        }
    }

    return harvested; 
}
