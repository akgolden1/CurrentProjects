// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  console.log (pilotName.value);
   alert ("I'm in form submission");
   alert (pilotName);
}

async function myFetch() {//I guess we're waiting for myFetch to finish?
    //returns the promise?
    let planetsReturned = 0;
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
     console.log(response.json);
        // return response.json();//the json data is attached to myFetch. This will some back later.
     });

      return planetsReturned;
}

//randomizer just picks a random planet. The planets are what I'm fetching
function pickPlanet(planets) {//this just produces a number, that I will use later to pick a planet
    //takes in one argument, a list of planets and returns one planet from the list with a randomly-selected index
let returnedIndex = Math.floor(Math.random()* planets.length);//take my array[Math.random()*number of objects in my array]
myRandomListofPlanets = planets[returnedIndex];
console.log(myRandomListofPlanets);
//return planets[returnedIndex]; may need to add this back later
//return myRandomListofPlanets;
        
};


module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;