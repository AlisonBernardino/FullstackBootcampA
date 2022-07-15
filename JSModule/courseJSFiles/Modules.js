// JS Modules

// How to "export" files and items

// Sample 01 - "Named" exports - Type A
export function showBatteryCapacity(device) {
    return `Device = ${device.title} - Battery charge = ${device.batteryCharge} `;
}

export function showStatus(device) {
    return `Device status = ${device.currentStatus}`;
}

export function sendFile(device) {
    return `Sending the "${device.fileToTransfer}" file.`;
}

// Sample 02 - "Named" exports - Type B
function showAnimalColor(animal) {
    return `The ${animal.name} color is "${animal.color}".`;
}

function makeSound(animal) {
    return `Animal sound = "${animal.sound}".`;
}

function eatFood(animal) {
    return `The ${animal.name} is eating ${animal.food}.`;
}

export {
    showAnimalColor,
    makeSound,
    eatFood,
}

/* Sample 03 - "Default" exports
 * Note: Only 01 D.E. per file
 * Note02: It will be our file
 * default return.
 */
function showFunction(robot) {
    return `The ${robot.title} function is ${robot.mainFunction}`;
}

function makeAction(robot) {
    return `Current action = ${robot.selectedAction}`;
}

function shutdownProcess(robot) {
    return `"${robot.currentProcess}" action shutted down.`;
}

export {
    showFunction,
    makeAction,
    shutdownProcess,
}

export default shutdownProcess;

// How to "import" files and items

// Sample 01 - To import "named exports":
import {function, variable, class } from './sampleFile.js';

// Sample 02 - To import "default exports":
import defaultItem from './sampleItem.js';


// Changing "imports" titles
import { mainFile as functionalityAFile } from './rootFile.js';

functionalityAFile.showData();

// To import all file data
import * as databaseItems from './mainItem.js';

databaseItems.bringClientsAge();

console.log(databaseItems.ageIndex);

// Linking the modules to the HTML page
<script type="module" src="./assets/JS/softwareFunctionalities.js"></script>;
