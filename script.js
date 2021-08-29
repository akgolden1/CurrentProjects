// Write your JavaScript code here!


window.addEventListener("load", function() {
  
   //let myForm = document.getElementById("testForm");
let form = document.querySelector("form");
    form.addEventListener("submit", function(event){
        alert("submit clicked");
        
    });

    //let pilotName = document.getElementById('pilotName.value');
    let pilotName=document.querySelector("input[name=pilotName]");
    let copilotName = document.getElementById('copilotName');
    let fuelLevel = document.getElementById('fuelLevel');
    let cargoMass = document.getElementById('cargoMass');
    let launchStatus = document.getElementById('launchStatus');
    let listFaultyItems = document.getElementById('faultyItems');//just to be difficult
    
    let pilotStatus = document.getElementById('pilotStatus');
    let copilotStatus = document.getElementById('copilotStatus');
    let fuelStatus = document.getElementById('fuelStatus');
    let cargoStatus = document.getElementById ('cargoStatus');


    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.

 formSubmission(document, listFaultyItems, pilotName.value, copilotName, fuelLevel, cargoMass);//calling it here is working
    });
 });


 
