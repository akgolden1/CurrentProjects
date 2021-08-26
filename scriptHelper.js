
//One bite at a time!!
//Step 1, we know we're creating a checklist form
//We have 4 fields that need to be filled out with the pilot (Chris) and copilot name (Blake), fuel levels and cargo mass
//We're using validation to ensur that we have all the info and make sure no one prematurel launches the shuttle
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
 `} // added the ticks because of 26.3.  


  let pilotNameInput = document.querySelector("input[name=pilotName]"); //we need the usernameInput because we're returing a reference
  let copilotNameInput = document.querySelector("input[name=copilotName]");
  let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
  let cargoMassInput = document.querySelector("input[name=cargoMass]");
  

  //I also need these so that I can update them:
  let showlLaunchStatus = document.getElementById('launchStatus');
  let showFaultyItems = document.getElementById('faultyItems');

  let showPilotStatus = document.getElementById('pilotStatus');
  let showCopilotStatus = document.getElementById('copilotStatus');
  let showFuelStatus = document.getElementById('fuelStatus');
  let showCargoStatus = document.getAnimations ('cargoStatus');



function validateInput(testInput) {
   //form info from index.html file: name ="pilotName",name= "copilotName",name="fuelLevel", name="cargoMass"
 //this is taking a string. That string testInput is the input the user is putting into the form
 //use console.log until this is connected to script.js
 if (pilotNameInput.value === "" || copilotNameInput.value === "" ||fuelLevelInput.value ===""||cargoMassInput.value ===""){
    return "Empty";
    }

if (!isNaN(pilotNameInput.value) ||!isNaN(copilotNameInput.value) ){
    return "Is a number";//we don't want it to be a number
    }
else if (isNaN(fuelLevelInput.value)||isNaN(cargoMassInput.value)){
    return "Not a Number";
    }
};

//update the table on the bottom of the page based on the return values
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {//this function updates the values
   if (validateInput(pilotNameInput.value)==="Is a number" || validateInput(copilotNameInput.value)==="Is a number"){
            alert ("Make sure to enter valid information for each field!");
        }
        else { //update final table
            showPilotStatus.innerHTML = `Pilot ${pilotName.value} is ready`;
            showCopilotStatus.innerHTML = `Co-pilot ${copilotName.value} is ready`;
        }//this may not be enough
};
    if (validateInput(fuelLevelInput.value)==="Not a number" || validateInput(cargoMassInput.value)==="Not a number")
        {
            alert ("Make sure to enter valid information for each field!");

        }else if ((validateInput(cargoMassInput.value) > 10000)){  // Is the cargo mass above 10,000?
            showFaultyItems.style.visibility = 'visible';
            showCargoStatus.innerHTML = `Cargo mass too heavy for the shuttle to take off!`; 
            showLaunchStatus.innerHTML = `Shuttle not ready for launch`;
            showLaunchStatus.style.color = 'red';

         } else if ((validateInput(fuelLevelInput.value)) < 10000) {

            showFaultyItems.style.visibility = 'visible';
            showFuelStatus.innerHTML = `Shuttle ready for launch`;
            showLaunchStatus.innerHTML = `fuel too low for launch`;
            showLaunchStatus.style.color = 'red';
         }

         if((fuelLevelInput.value >= 10000) && (cargoMassInput.value <= 10000)) { // If the fuelLevel is equal to or above 10,000 AND cargoMass is equal to or below 10,000, execute this code 
            showFaultyItems.style.visibility = 'visible';
            showLaunchStatus.innerHTML = `Shuttle is ready for launch`;
            showLaunchStatus.style.color = 'green';
            showFuelStatus.innerHTML = `Fuel level high enough for launch`;
            showCargoStatus.innerHTML = `Cargo mass low enough for launch`;
         }


async function myFetch() {//I guess we're waiting for myFetch to finish?
    let planetsReturned=0;//returns the promise?
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
     console.log(response.json);
         return (response.json());
     });
}

function pickPlanet(planets) {
//takes in one argument, a list of planets and returns one planet from the list with a randomly-selected index
    let returnedIndex = planets[Math.random()*6];//take my array[Math.random()*number of objects in my array]
    return returnedIndex;
    };

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
