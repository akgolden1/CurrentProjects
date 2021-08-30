// Write your JavaScript code here!



window.addEventListener("load", function() {
//maybe move fetch info here because it's listening for that data?

//let listedPlanets;
// Set listedPlanetsResponse equal to the value returned by calling myFetch()
let listedPlanetsResponse = myFetch();
listedPlanetsResponse.then(function (result) {
 
    result.json().then(function (json){
        let listedPlanets;
    listedPlanets = pickPlanet(json);
   
    addDestinationInfo(listedPlanets, document);//calling addDestinaton here
        
    });
    //console.log(listedPlanets);
  });

    let myForm = document.querySelector("form");//not sure why submitForm didn't work

    myForm.addEventListener("submit", function(event){
        event.preventDefault();
   


    // let listedPlanets;
    // // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    // let listedPlanetsResponse = myFetch();
    // listedPlanetsResponse.then(function (result) {
    //     listedPlanets = result;
    //     //console.log(listedPlanets);
    // }).then(function () {
    //     console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.

//try defining my object variables here because formSubmission will need them. change the names to 
//match so it's less confusing for me!
let listFaultyItems = document.getElementById("faultyItems");//list parameter
let list = listFaultyItems.value;
let pilotName = document.querySelector("input[name=pilotName]");
let pilot=pilotName.value;
let copilotName = document.querySelector("input[name=copilotName]");
let copilot = copilotName.value;
let inputFuelLevel = document.querySelector("input[name=fuelLevel]");
let fuelLevel = inputFuelLevel.value;
let cargoMass = document.querySelector("input[name=cargoMass]");
let cargoLevel=cargoMass.value;
// let pilotStatus = document.getElementById('pilotStatus');
// let copilotStatus = document.getElementById('copilotStatus');
let fuelStatus = document.getElementById('fuelStatus');
let cargoStatus = document.getElementById ('cargoStatus');


 formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);//calling it here is working
    });

});



 
