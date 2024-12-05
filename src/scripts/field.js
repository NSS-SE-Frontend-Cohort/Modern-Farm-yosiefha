let plantsInTheField =[]
export const addPlant = (seed) => 
    Array.isArray(seed) 
        ? seed.forEach(singleSeed => plantsInTheField.push(singleSeed)) 
        : plantsInTheField.push(seed);

export const usePlants = () => structuredClone(plantsInTheField);