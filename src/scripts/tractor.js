import { addPlant } from './field.js';
import { createAsparagus } from './seeds/asparagus.js';
import { createPotato } from './seeds/potato.js';
import { createSoybean } from './seeds/soybean.js';
import { createCorn } from './seeds/corn.js';
import { createWheat } from './seeds/wheat.js';
import { createSunflower } from "./seeds/sunflower.js";

export const plantSeeds = (plantingPlan) => 
    plantingPlan.forEach(row => 
        row.forEach(plantType => 
            addPlant(
                plantType === "Asparagus" ? createAsparagus() :
                plantType === "Potato" ? createPotato() :
                plantType === "Soybean" ? createSoybean() :
                plantType === "Corn" ? createCorn() :
                plantType === "Wheat" ? createWheat() :
                plantType === "Sunflower" ? createSunflower():
                console.error(`Unknown plant type: ${plantType}`)
            )
        )
    );