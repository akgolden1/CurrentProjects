// Write your JavaScript code here!
window.addEventListener("load", function() {

   let listedPlanets;
   let listedPlanetsResponse = myFetch();
      listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
         console.log(listedPlanets);
          }).then(function () {
            console.log(listedPlanets);
         });
      });
