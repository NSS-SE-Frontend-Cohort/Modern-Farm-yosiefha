import { addPlant } from './field.js';
import { createAsparagus } from './seeds/asparagus.js';
import { createPotato } from './seeds/potato.js';
import { createSoybean } from './seeds/soybean.js';
import { createCorn } from './seeds/corn.js';
import { createWheat } from './seeds/wheat.js';
import { createSunflower } from "./seeds/sunflower.js";

let creationStrategy = new Map();
creationStrategy.set("Asparagus" , createAsparagus);
creationStrategy.set("Potato" , createPotato);
creationStrategy.set("Corn" , createCorn);
creationStrategy.set("Soybean" , createSoybean);
creationStrategy.set("Wheat" , createWheat);
creationStrategy.set("Sunflower" , createSunflower);

export const plantSeeds = (plantingPlan) => 
    plantingPlan.flat(1).forEach(plantType => {
            if(!creationStrategy.has(plantType)) console.error(`Unknown plant type: ${plantType}`)
            const seedConstructorFn = creationStrategy.get(plantType);
            addPlant(seedConstructorFn())
    });