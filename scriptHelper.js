// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
 //<div id="missionTarget" data-testid="missionTarget">
 let divID = document.getElementById("missionTarget");
 divID.innerHTML = `
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${json[missionTarget].name} </li>
                     <li>Diameter: ${json[missionTarget].diameter}  </li>
                     <li>Star: ${json[missionTarget].start} }</li>
                     <li>Distance from Earth: ${json[missionTarget].distance}  </li>
                     <li>Number of Moons: ${json[missionTarget].moons}  </li>
                 </ol>
                 <img src="${json[missionTarget].image}"></img>;
 `} //I added the ticks because of 26.3. 

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
    
  console.log (pilotName.value);
   alert ("I'm in form submission");
   alert (pilotName);

  //document variables defined in script.js
  
   if (validateInput(pilotName.value)==="Is a number" || validateInput(copilotName.value)==="Is a number"){
   alert ("Make sure to enter valid information for each field!");
       }
       else { //update final table
           pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready`;
           copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is ready`;
       }//this may not be enough
   }
   if (validateInput(fuelLevelAmt.value)==="Not a number" || validateInput(cargoMass.value)==="Not a number")
       {
           alert ("Make sure to enter valid information for each field!");

       }else if ((validateInput(cargoMass.value) > 10000)){  // Is the cargo mass above 10,000?
           faultyItems.style.visibility = 'visible';
           cargoStatus.innerHTML = `Cargo mass too heavy for the shuttle to take off!`; 
           launchStatus.innerHTML = `Shuttle not ready for launch`;
           launchStatus.style.color = 'red';

        } else if ((validateInput(fuelLevelAmt.value)) < 10000) {

           faultyItems.style.visibility = 'visible';
           fuelStatus.innerHTML = `Shuttle ready for launch`;
           launchStatus.innerHTML = `fuel too low for launch`;
           launchStatus.style.color = 'red';
        }

        if((fuelLevelAmt.value >= 10000) && (cargoMass.value <= 10000)) { // If the fuelLevel is equal to or above 10,000 AND cargoMass is equal to or below 10,000, execute this code 
           faultyItems.style.visibility = 'visible';
           launchStatus.innerHTML = `Shuttle is ready for launch`;
           launchStatus.style.color = 'green';
           fuelStatus.innerHTML = `Fuel level high enough for launch`;
           cargoStatus.innerHTML = `Cargo mass low enough for launch`;
        }

   

        async function myFetch() {
            let planetsReturned;
        
            planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
                });
        console.log (planetsReturned);
            return planetsReturned;
        }
        

// async function myFetch() {//I guess we're waiting for myFetch to finish?
//     //returns the promise?
//     let planetsReturned = 0;
//     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
//      console.log(response.json);
//         // return response.json();//the json data is attached to myFetch. This will some back later.
//      });

//       return planetsReturned;
// }





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