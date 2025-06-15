function calculateChaiIngredients(numberOfCups){
    console.log(`To make ${numberOfCups} cups 0f Kenya Chai, you will need:`);
    console.log(`Water: ${200 * numberOfCups} ml`);
    console.log(`Milk: ${50 * numberOfCups} ml`);
    console.log(`Tea Leaves (Majani): ${1 * numberOfCups} tablespoon ml`);
    console.log(`Sugar (Sukari): ${2 * numberOfCups} teaspoon ml`);
    console.log("Enjoy your Chai Bora!");



}

let input = prompt ("Karibu! How many cups of Chai Bora would you like to make?");
let cups = Number(input);

calculateChaiIngredients(cups)