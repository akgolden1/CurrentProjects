// Write your JavaScript code here!

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()?
   let listedPlanetsResponse;
      listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
         console.log(listedPlanets);
          }).then(function () {
            console.log(listedPlanets);
//        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
//    })
          
           
         });
      
      });
//do I need to call every function here?
// formSubmission();
// addDestinationInfo();
// validateInput();
// pickPlanet(); 
// myFetch();
// function someFunction{
// this is where the purpose of the DOM is to take elemeents on the HTML doc and make them objects
// that have properties I can work with.
// //this is where we might build the function referenced in like 19?
// let someID = document.getElementById("actualIDInTheHTML.")
// to change the name of something:
// reference that area of the page with that text:
// let someIDName = document.getElementById("ActualnameofareaIneedtochangefromhtml"); remember the ids allow us to work with them
