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

    let inputStatus;
    if(testInput === ""){
        inputStatus = "Empty";
    }
    else if (!isNan(testInput)){
        inputStatus = "This is a number";

    }
    else if (isNan(testInput)){
        inputStatus = "This is not a number";
    }    
   
    return inputStatus;
}




function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   
 //the user submits a value that is easily converted to the correct data type
    // The pilot and co-pilot names should be strings 
    //fuel level and cargo mass should be numbers.
    let readyStatus;
    let pilotName = document.querySelector("input[name=pilot]");
    let coName = document.querySelector("input[name=copilot]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoMass = document.querySelector("input[name=cargoLevel]");
   
   
//     //check for empty fields

if (validateInput (pilotName.value) === "Empty") {
    alert ("Field is Required");
}
else if (validateInput(pilotName.value) === "This is a Number"){
alert ("This is a Number");
}
else {
    //update per the instructions 
};



if (validateInput (copilotName.value) === "Empty") {
    alert ("Field is Required");
}
else if (validateInput(pilotName.value) === "This is a Number"){
    alert ("This is a Number");
    }
    else {
        //update per the instructions 
    };



if (validateInput (fuelLevel.value) === "Empty") {
    alert ("Field is Required");
}
else if (validateInput(fuelLevel.value) === "This is not a Number"){
    alert ("This is not a Number");
    }
    else //check for the level
       if (fuelLevel.value < 10000){

       let fuelMessage = document.getElementById ("faultyItems");//looking for the faultyItems element
       
       fuelMessage.value = fuelMessage.value + "is not enough fuel";//update the falue
       console.log(fuelMessage.value);//print the current value
    //or do I need
    //fuelMessage.innerHTML += "is not enough fuel"
    //or do I need console.log (fuelMessage.innerHTML);
       }
       else {
           document.getElementByID("faultyItems").style.displays= "block";
       }
    



    if (validateInput (cargoMass.value) === "Empty") {
        alert ("Field is Required");
    }
    else if (validateInput(cargoMass.value) === "This is not a Number"){
        alert ("This is not a Number");
        }
        else {
            //update per the instructions 
        };
    
    
    
};



//      readyStatus = "Empty";

 



     //return readyStatus;



async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
