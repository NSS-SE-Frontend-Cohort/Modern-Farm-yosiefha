import {createPlan } from "./plan.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { addPlant, usePlants } from './field.js';

import { plantSeeds } from './tractor.js';
import { harvestPlants } from './harvester.js';
import { Catalog } from './catalog.js';
const asparagusSeed = createAsparagus()
//console.log(asparagusSeed)
addPlant(asparagusSeed);

const yearlyPlan = createPlan();


const plantingPlan = [
    ["Potato", "Soybean", "Soybean", "Corn"],
    ["Wheat", "Corn", "Wheat", "Asparagus"],
    ["Asparagus", "Wheat", "Soybean", "Corn"],
    ["Asparagus", "Soybean", "Potato", "Wheat"]
];
plantSeeds(plantingPlan);
const plantsInField = usePlants();
console.log(plantsInField);
console.log("Welcome to the main module")

// Harvest plant 
const harvestedSeeds = harvestPlants(plantsInField);

// Log the harvested seeds to verify the output
console.log(harvestedSeeds);
Catalog(harvestedSeeds);
