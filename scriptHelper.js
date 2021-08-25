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

//takes in a string
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
   
 //the user submits a value that is easily converted to the correct data type
    // The pilot and co-pilot names should be strings 
    //fuel level and cargo mass should be numbers.
    // let readyStatus;
    let pilotName = document.querySelector("input[name=pilotName]");
    let copilotName = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoMass = document.querySelector("input[name=cargoMass]");
   
   
//     //check for empty fields and prevent the form from loading if there are any
//try removing the .value after pilotName, copilotName, etc.

if (validateInput (pilotName)||validateInput (copilotName)|| validateInput(fuelLevel) ||
validateInput (cargoLevel) === "Empty") {
    alert ("All fields required");
    event.preventDefault(); //ignore line through event
}
else if (validateInput(pilotName) === "This is a number"){
alert ("This is a number");
console.log ("I'm on formSubmission(validateInput) for pilotname")
//do something else
}
else if (validateInput (copilotName) === "This is a number") {
    alert ("This is a number");
    //Do something else
}

else if (validateInput (fuelLevel) === "This is not a number"){
    alert ("This is not a number");
    //do something else
    }
else if (fuelLevel.value < 10000){

       let fuelMessage = document.getElementById ("faultyItems");//looking for the faultyItems element
       fuelMessage.innerHTML += "is not enough fuel"
       console.log (fuelMessage);//for me
       //update the fautlyITems??

       document.getElementById("faultyItems").style.visibility = "visible";
       document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
       document.getElementById("launchStatus").style.color = "red";//css change?          
       document.getElementById("fuelStatus").innerHTML = "Fuel level not enough for journey";
       //fuelMessage.value = fuelMessage.value + "is not enough fuel";//update the falue
       //console.log(fuelMessage.value);//print the current value
    //or do I need
    //fuelMessage.innerHTML += "is not enough fuel"
}
 else if (validateInput (cargoMass) === "Empty") {
        alert ("Field is Required");
    }
    else if (validateInput(cargoMass) === "This is not a number"){
        alert ("This is not a number");
        }
        else //check for the mass
        if (cargoMass.value > 10000){
 
        let cargoMass = document.getElementById ("faultyItems");//looking for the faultyItems element
        
        cargoMass.value = cargoMass.value + "too much weight";//update the value
        console.log(cargoMass);//print the current value

        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
        document.getElementById("launchStatus").style.color = "red";//do I need to do something with css?
        document.getElementById("fuelStatus").innerHTML = "Too much mass for takeoff";
     //or do I need
     //cargoMass.innerHTML += "is not enough fuel"
     //or do I need console.log (cargoMass.innerHTML);
       // }
        //else {
            //document.getElementByID("faultyItems").style.displays= "block";//show the div
   //     }
    
};

 

//      readyStatus = "Empty";

 




async function myFetch() {
    // let planetsReturned;

    // planetsReturned = await fetch().then( function(response) {
    //     });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
