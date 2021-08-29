//Write your helper functions here!

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

function validateInput(testInput) {
   console.log ("I'm inside validateInput");
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
    //console.log("i'm inside formsubmission");

//formSubmission;
let myForm = document.getElementById("testform");

myForm.addEventListener("submit", function (){
let myList = document.querySelector("input [name=missionTarget]");
let myPilotName = document.querySelector("input[name=pilotName]");
let myCopilotName = document.querySelector("input[name=copilotName]");
let myFuelLevel = document.querySelector("input[name=fuelLevel]");
let myCargoMass = document.querySelector("input[name=cargoMass]");
let myLaunchStatus = document.querySelector("input[name=launchStatus]");
let myFaultyItems = document.querySelector("input[name=faultyItems]");

let pilotStatus = document.querySelector("input[name=pilotStatus]");
let copilotStatus = document.querySelector("input[name=copilotStatus]");
let fuelStatus = document.querySelector("input[name=fuelStatus]");
let cargoStatus = document.querySelector("input[name=cargoStatus]");
});


    if (validateInput (myPilotName)||validateInput (myCopilotName)|| validateInput(myFuelLevel.value) ||
    validateInput (myCargoMass.value) === "Empty") {
        alert ("All fields required");
       
    }
    else if (validateInput(myPilotName) === "This is a number"){
    alert ("This is a number");
    console.log ("I'm on formSubmission(validateInput) for" + myPilotname);
    //do something else
    }
    else if (validateInput (myCopilotName) === "This is a number") {
        alert ("This is a number");
        //Do something else
    }
    
    else if (validateInput (myFuelLevel) === "This is not a number"){
        alert ("This is not a number");
        //do something else
        }
    else if (myFuelLevel.value < 10000){
    
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
     else if (validateInput (myCargoMass) === "Empty") {
            alert ("Field is Required");
        }
        else if (validateInput(myCargoMass) === "This is not a number"){
            alert ("This is not a number");
            }
            else //check for the mass
            if (myCargoMass.value > 10000){
     
            let cargoMessage = document.getElementById ("faultyItems");//looking for the faultyItems element
            
            cargoMessage.value = cargoMessage.value + "too much weight";//update the value
            console.log(cargoMessage);//print the current value
    
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
    
        else if (myFuelLevel.value >= 10000 && myCargoMass.value <= 10000  ){
    
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
        document.getElementById("launchStatus").style.color = "green";//css change?  
        //also something like: 
       console.log (myPilotName + "Is ready for launch");
    
        }
            
    form.addEventListener("click", formSubmission);
    };









async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
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
    

function helloWorld(){
    console.log ("hello world");
};
module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
module.exports.helloWorld = helloWorld;


