// Write your JavaScript code here!

window.addEventListener("load", function() {
   let form = document.querySelector("form");//lines 4-6 explained in 25.9. We need the variable form because it's getting a reference.
   form.addEventListener("submit", function (event){
let pilotNameInput = document.querySelector("input[name=pilotName]"); //we need the usernameInput because we're returing a reference
let copilotNameInput = document.querySelector("input[name=copilotName]");
let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
let cargoMassInput = document.querySelector("input[name=cargoMass]"); 
   //alert ("username: " + pilotNameInput.value)// still work to do, this is the syntax
       // event.defaultPrevented();//I think I want this here. From 25.9
    //validateInput ();

if (pilotNameInput.value === "" || copilotNameInput.value ==="" ||fuelLevelInput.value ===""||cargoMassInput.value ===""){
 alert("No empty fields");
}
  });
});

   //validateInput (inputStatus);
   //somehow I have to tie this to the scriptHelper so that this loads first




   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
