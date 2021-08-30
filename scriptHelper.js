// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(planet, document) {
    // Here is the HTML formatting for our mission target div.
 //<div id="missionTarget" data-testid="missionTarget">
 document.getElementById("missionTarget").innerHTML= `

                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${planet.name} </li>
                     <li>Diameter: ${planet.diameter}  </li>
                     <li>Star: ${planet.start}</li>
                     <li>Distance from Earth: ${planet.distance}  </li>
                     <li>Number of Moons: ${planet.moons}  </li>
                 </ol>
                 <img src="${planet.image}"></img>;
 `}; //I added the ticks because of 26.3. 


function validateInput(testInput) {
   
if (testInput === ""){
    return "Empty";
}
else if (isNaN(testInput)){
    return "This is a not number";
}
else {
    return "This is a number";
    }    
}




function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

        // let pilotName = document.getElementById('pilotName.value');
        // let pilotName=document.querySelector("input[name=pilotName]");
        // let copilotName = document.querySelector("input[name=copilotName]");
        // let fuelLevelAmt = document.querySelector("input[name=fuelLevel]");
        // let cargoMass = document.querySelector("input[name=cargoMass]");
        // let launchStatus = document.getElementById('launchStatus');
        // let listFaultyItems = document.getElementById('faultyItems');//just to be difficult
        
        // let pilotStatus = document.getElementById('pilotStatus');
        // let copilotStatus = document.getElementById('copilotStatus');
        // let fuelStatus = document.getElementById('fuelStatus');
        // let cargoStatus = document.getElementById ('cargoStatus');
    


  //document variables defined in script.js
  //next section just validating input
    
  if (validateInput(pilot)==="Empty" || validateInput(copilot)==="Empty" || validateInput(fuelLevel)==="Empty" ||
  validateInput (cargoLevel)==="Empty"){
      alert("All fields are required!");
  }

   else if (validateInput(pilot)==="Is a number" || validateInput(copilot)==="Is a number" || 
   validateInput(fuelLevel)==="Not a number" || validateInput(cargoLevel)==="Not a number"){ 
   alert ("Make sure to enter valid information for each field!");
     }
    //    else { //update final table
    //        pilotStatus.innerHTML = `Pilot ${pilot} is ready`;
    //        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready`;
    //    }//this may not be enough
 
//check fuel and cargo
if (Number(cargoLevel) > 10000){  // Is the cargo mass above 10,000?
           faultyItems.style.visibility ="visible";
           document.getElementById("cargoStatus").innerHTML = `Cargo mass too heavy for the shuttle to take off!`; 
           document.getElementById("launchStatus").innerHTML = `Shuttle not ready for launch`;
           document.getElementById("launchStatus").style.color = 'red';
}
else {cargolevel = true; //will this work?
}

if (fuelLevel < 10000) {

    list.style.visibility = 'visible';
           fuelStatus.innerHTML = `Shuttle ready for launch`;
           launchStatus.innerHTML = `fuel too low for launch`;
           launchStatus.style.color = 'red';
        }
else {fuelLevel = true;
}
       
if((fuelLevel >= 10000) && (cargoLevel <= 10000)) { // If the fuelLevel is equal to or above 10,000 AND cargoMass is equal to or below 10,000, execute this code 
    faultyItems.visibility = 'visible';
           launchStatus.innerHTML = `Shuttle is ready for launch`;
           launchStatus.style.color = 'green';
           fuelStatus.innerHTML = `Fuel level high enough for launch`;
           cargoStatus.innerHTML = `Cargo mass low enough for launch`;
        }

};

        async function myFetch() {
            let planetsReturned;
            //planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
            planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json");
        console.log (planetsReturned);
            return planetsReturned;
        }

//randomizer just picks a random planet. The planets are what I'm fetching
function pickPlanet(planets) {//this just produces a number, that I will use later to pick a planet
    //takes in one argument, a list of planets and returns one planet from the list with a randomly-selected index
let returnedIndex = Math.floor(Math.random()* planets.length);//take my array[Math.random()*number of objects in my array]
return planets[returnedIndex];
        
};


module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;