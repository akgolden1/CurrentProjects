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
                     <li>Star: ${planet.star}</li>
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

    let pilotStatus = document.getElementById('pilotStatus');
    let copilotStatus = document.getElementById('copilotStatus');

  //document variables defined in script.js
  //next section just validating input
    
  if (validateInput(pilot)==="Empty" || validateInput(copilot)==="Empty" || validateInput(fuelLevel)==="Empty" ||
  validateInput (cargoLevel)==="Empty"){
      alert("All fields are required!");
}

   else if (validateInput(pilot)==="This is a number" || validateInput(copilot)==="This is a number" || 
   validateInput(fuelLevel)==="This is a not number" || validateInput(cargoLevel)==="This is a not number"){ 
   alert ("Make sure to enter valid information for each field!");
     }

  else {
   pilotStatus.innerHTML = "Pilot " + pilot + " Ready";//working
   copilotStatus.innerHTML = "Co-pilot " + copilot + " Ready";//working
  
  } 

if ((Number(fuelLevel) < 10000)){
    //console.log ("the fuel is low");
    faultyItems.style.visibility ="visible";
    //document.getElementById("cargoStatus").innerHTML = `Cargo mass is low enough for launch`; 
    document.getElementById("launchStatus").innerHTML = `Shuttle not ready for launch`;
    document.getElementById("launchStatus").style.color = 'red';
    document.getElementById("fuelStatus").innerHTML = `Fuel level is too low for launch`;
}
else {
    document.getElementById("fuelStatus").innerHTML = `Fuel level is high enough for launch`; 
}

if(Number(cargoLevel) > 10000) {

    faultyItems.style.visibility ="visible";
    document.getElementById("cargoStatus").innerHTML = `Cargo mass is too high for launch`; 
    document.getElementById("launchStatus").innerHTML = `Shuttle not ready for launch`;
    document.getElementById("launchStatus").style.color = 'red';
   // document.getElementById("fuelStatus").innerHTML = `Fuel level is high enough for launch`;
} else {
    document.getElementById("cargoStatus").innerHTML = `Cargo mass is low enough for launch`
}

       
if ((Number(fuelLevel) >= 10000) && (Number(cargoLevel) <= 10000)) { // If the fuelLevel is equal to or above 10,000 AND cargoMass is equal to or below 10,000, execute this code 

    faultyItems.style.visibility ="visible";
    document.getElementById("cargoStatus").innerHTML = `Cargo mass low enough for launch`; 
    document.getElementById("launchStatus").innerHTML = `Shuttle is ready for launch`;
    document.getElementById("launchStatus").style.color = 'green';
    document.getElementById("fuelStatus").innerHTML = `Fuel level high enough for launch`;
        }

else {
    console.log ("at the end");//just adding here in case.
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