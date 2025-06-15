function calculateBodaFare(distanceInKm){
    const baseFare = 50;
    const chargePerKm = 15;

    const totalFare = baseFare + (distanceInKm * chargePerKm)

    console.log(`For a trip of ${distanceInKm} km, your total estimated fare is : ${totalFare}`);
}

let input = prompt("Please enter the distance of your trip in kilometers:");
let distance = Number(input);

calculateBodaFare(distance);