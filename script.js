// Write your JavaScript code here!


window.addEventListener("load", function() {

  
let myForm = document.getElementById("launchForm");

    myForm.addEventListener("submit", function(event){
        event.preventDefault();
        //alert("submit clicked");
    });

    //let pilotName = document.getElementById('pilotName.value');
    let pilotName=document.querySelector("input[name=pilotName]");
 // Write your JavaScript code here!


let fuelLevelReady = false;
let cargoLevelReady = false;
let fieldCheck = false;

window.addEventListener("load", function () {

    let listedPlanetResponse = myFetch();

    listedPlanetResponse.then(function (result) {
        result.json().then(function (json) {

            let selectedPlanet = pickPlanet(json);

            addDestinationInfo(selectedPlanet, document)
        })

    })
    let form = document.querySelector("form");
    form.addEventListener("submit", function () {
    event.preventDefault();



    })

});

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        //console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.

//try defining my object variables here because formSubmission will need them. change the names to 
//match so it's less confusing for me!
let pilotName = document.querySelector("input[name=pilotName]");
let coPilotName = document.querySelector("input[name=copilotName]");
let fuelLevel = document.querySelector("input[name=fuelLevel]");
let cargoMass = document.querySelector("input[name=cargoMass]");
let pilotStatus = document.getElementById('pilotStatus');
let copilotStatus = document.getElementById('copilotStatus');
let fuelStatus = document.getElementById('fuelStatus');
let cargoStatus = document.getElementById ('cargoStatus');
let faultyItems = document.getElementById("faultyItems");//list parameter

 formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);//calling it here is working
    });
 });


 
