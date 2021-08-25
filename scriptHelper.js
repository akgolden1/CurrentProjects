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
        }
//if everything is perfect:

else if (fuelLevel.value >= 10000 && cargoMass.value <= 10000  )
 {

    document.getElementById("faultyItems").style.visibility = "visible";
    document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
    document.getElementById("launchStatus").style.color = "green";//css change?          
   
}



//      readyStatus = "Empty";

 




async function myFetch() {
    let planetsReturned;
//I'm not sure this goes here:
fetch ("https://handlers.education.launchcode.org/static/planets.json").then(function(response)){

}
//then what do I do with this?
    planetsReturned = await fetch().then( function(response) {//this was existing code
        });

    return planetsReturned;//existing code
}



function pickPlanet(planets) {
//takes in one argument, a list of planets and returns one planet from the list wiath a 
//randomly-selected index
let returnedIndex=0;
let planets =
[
    {
       "name": "Tatooine",
       "diameter": "10465 km",
       "star": "Tatoo I & Tatoo II",
       "distance": "43000 light years from galactic core",
       "image": "https://www.nasa.gov/sites/default/files/images/587837main_Kepler16_transit_art2_full.jpg",
       "moons": 3
    },
    {
        "name": "Pern",
        "diameter": "measurement is under dispute",
        "star": "Alpha Sagittarius (a.k.a. Rukbat)",
        "distance": "Varies - find a library",
        "image": "https://www.nasa.gov/centers/langley/images/content/698148main_Brains_904_2.jpg",
        "moons": 2
    },
    {
        "name": "Saturn/Titan",
        "diameter": "5149.5 km",
        "star": "Sol",
        "distance": "1.4 billion km from Earth",
        "image": "https://solarsystem.nasa.gov/system/resources/detail_files/16278_PIA20016.jpg",
        "moons": 0
    },
    {
        "name": "Mars",
        "diameter": "6779 km",
        "star": "Sol",
        "distance": "225 million km from Earth",
        "image": "https://mars.nasa.gov/system/resources/detail_files/7808_global-color-views-mars-PIA00407-full2.jpg",
        "moons": 2
    },
    {
        "name": "K2-18b",
        "diameter": "34500 km",
        "star": "K2-18",
        "distance": "110 light years from Earth",
        "image": "https://www.nasa.gov/sites/default/files/thumbnails/image/heic1916a.jpg",
        "moons": "unknown"
    },
    {
        "name": "Jupiter/Europa",
        "diameter": "3,121.6 km",
        "star": "Sol",
        "distance": "628.3 million km from Earth",
        "image": "https://apod.nasa.gov/apod/image/1609/Europa_Galileo_960.jpg",
        "moons": 0
    }
];

returnedIndex = planets[Math.random()*6];//take my array[Math.random()*number of objects in my array]
return returnedIndex;

}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
