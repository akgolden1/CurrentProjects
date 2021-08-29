// Write your JavaScript code here!


window.addEventListener("load", function() {
  
let myForm = document.getElementById("launchForm");

    myForm.addEventListener("submit", function(event){
        //alert("submit clicked");
        
    });

    //let pilotName = document.getElementById('pilotName.value');
    let pilotName=document.querySelector("input[name=pilotName]");
 


    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.


 formSubmission(document, listFaultyItems, pilotName, copilotName, fuelLevelAmt, cargoMass);//calling it here is working
    });
 });


 
