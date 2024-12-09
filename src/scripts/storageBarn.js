
export const barn = () => {
    const crops = []; 

    return {
        push: (crop) => {
            crops.push(crop); 
        },
        pop: () => {
            if (crops.length === 0) {
                console.log("No crops to remove!");
                return null;
            }
            return crops.pop(); 
        },
        peek: () => {
            if (crops.length === 0) {
                console.log("Barn is empty. No crops to peek.");
                return null;
            }
            return crops[crops.length - 1]; 
        },
        isEmpty: () => {
            return crops.length === 0; 
        },
    };
};

