
//One bite at a time!!
//Step 1, we know we're creating a checklist form
//We have 4 fields that need to be filled out with the pilot (Chris) and copilot name (Blake), fuel levels and cargo mass
//We're using validation to ensure that we have all the info and make sure no one prematurel launches the shuttle
// Write your helper functions here!

require('isomorphic-fetch');


// TODO:following Carrie's example of needing to have a place to store the json once I get it so I can randomly
//select the planet. This will need to move to the myFetch function later
let myRandomListofPlanets =  {
	"name": "",
	"diameter": "",
	"star": "",
	"distance": "",
	"image": "",
	"moons":"", //it's expecting a number so this may not be right
		};


//get the elements so that I can read from and write to them
//TODO: may need to move these to inside the validation function



function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
 //<div id="missionTarget" data-testid="missionTarget">
 let missionTarget = document.getElementById('missionTarget');//this isn't working for some reason
 missionTarget.innerHTML = `
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name} </li>
                     <li>Diameter: ${diameter}  </li>
                     <li>Star: ${star} }</li>
                     <li>Distance from Earth: ${distance}  </li>
                     <li>Number of Moons: ${moons}  </li>
                 </ol>
                 <img src="${imageUrl}"></img>;
 `} // added the ticks because of 26.3.  




function validateInput(testInput) {



if (testInput === ""){
    return "Empty";
}
else if (isNan(testInput)){
    return "This is a not number";
}
else {
    return "This is a number";
    }    
}


//update the table on the bottom of the page based on the return values
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {//this function updates the values
   
    let pilotName = document.getElementById('pilotName');
    let copilotName = document.getElementById('copilotName');
    let fuelLevel = document.getElementById('fuelLevel');
    let cargoMass = document.getElementById('cargoMass');
    let launchStatus = document.getElementById('launchStatus');
    let faultyItems = document.getElementById('faultyItems');
    
    let pilotStatus = document.getElementById('pilotStatus');
    let copilotStatus = document.getElementById('copilotStatus');
    let fuelStatus = document.getElementById('fuelStatus');
    let cargoStatus = document.getElementById ('cargoStatus');
   
    if (validateInput(pilotName.value)==="Is a number" || validateInput(copilotName.value)==="Is a number"){
    alert ("Make sure to enter valid information for each field!");
        }
        else { //update final table
            pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready`;
            copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is ready`;
        }//this may not be enough
    }
    if (validateInput(fuelLevel.value)==="Not a number" || validateInput(cargoMass.value)==="Not a number")
        {
            alert ("Make sure to enter valid information for each field!");

        }else if ((validateInput(cargoMass.value) > 10000)){  // Is the cargo mass above 10,000?
            faultyItems.style.visibility = 'visible';
            cargoStatus.innerHTML = `Cargo mass too heavy for the shuttle to take off!`; 
            launchStatus.innerHTML = `Shuttle not ready for launch`;
            launchStatus.style.color = 'red';

         } else if ((validateInput(fuelLevel.value)) < 10000) {

            faultyItems.style.visibility = 'visible';
            fuelStatus.innerHTML = `Shuttle ready for launch`;
            launchStatus.innerHTML = `fuel too low for launch`;
            launchStatus.style.color = 'red';
         }

         if((fuelLevel.value >= 10000) && (cargoMass.value <= 10000)) { // If the fuelLevel is equal to or above 10,000 AND cargoMass is equal to or below 10,000, execute this code 
            faultyItems.style.visibility = 'visible';
            launchStatus.innerHTML = `Shuttle is ready for launch`;
            launchStatus.style.color = 'green';
            fuelStatus.innerHTML = `Fuel level high enough for launch`;
            cargoStatus.innerHTML = `Cargo mass low enough for launch`;
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
