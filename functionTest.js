
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
    };
    if (validateInput(fuelLevel.value)==="Not a number" || validateInput(cargoMass.value)==="Not a number")
        {
            alert ("Make sure to enter valid information for each field!");

       }
	   else if (validateInput(cargoMass.value) > 10000){  // Is the cargo mass above 10,000?
            faultyItems.style.visibility = 'visible';
            cargoStatus.innerHTML = `Cargo mass too heavy for the shuttle to take off!`; 
            launchStatus.innerHTML = `Shuttle not ready for launch`;
            launchStatus.style.color = 'red';

         } else if (validateInput(fuelLevel.value) < 10000) {

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
