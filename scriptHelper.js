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
`} //I only added the ticks because of 26.3. I don't really understand why that works

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
    let fuelLevelAmt = document.querySelector("input[name=fuelLevel]");
    let cargoMass = document.querySelector("input[name=cargoMass]");
   
   
//     //check for empty fields and prevent the form from loading if there are any
//try removing the .value after pilotName, copilotName, etc.

if (validateInput (pilotName)||validateInput (copilotName)|| validateInput(fuelLevelAmt) ||
validateInput (cargoLevel) === "Empty") {
    alert ("All fields required");
   
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

else if (validateInput (fuelLevelAmt) === "This is not a number"){
    alert ("This is not a number");
    //do something else
    }
else if (fuelLevelAmt.value < 10000){

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
 }
//if everything is perfect:

    else if (fuelLevelAmt.value >= 10000 && cargoMass.value <= 10000  ){

    document.getElementById("faultyItems").style.visibility = "visible";
    document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
    document.getElementById("launchStatus").style.color = "green";//css change?  
    //also something like: 
   console.log (pilotName + "Is ready for launch");

   
}


async function myFetch() {//I guess we're waiting for myFetch to finish?
    let planetsReturned=0;//returns the promise?
    //planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
//console.log(response.json);
    //return (response.json());
//});

//console.log (planetsReturned);
    return planetsReturned;//existing code
};

function pickPlanet(planets) {
//takes in one argument, a list of planets and returns one planet from the list with a 
//randomly-selected index
let returnedIndex=0;

returnedIndex = planets[Math.random()*6];//take my array[Math.random()*number of objects in my array]
return returnedIndex;

};

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
}