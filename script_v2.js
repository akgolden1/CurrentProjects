// Write your JavaScript code here!
	
//add listener so that the page waits for me to fetch the planetary data and doesn't refresh
//I can't do anything with the data until I have it

window.addEventListener("load", function() { //when the page loads, we're going to do this function
console.log ("page loaded"); //this is for me
// TODO:according to Carrie, if we had JSON to fetch, which we do, we would do that here. And then we would
// call the function that runs everything from inside the JSON?  Not sure about that.
// let form = document.querySelector("form");lines 4-6 explained in 25.9. We need the variable form because it's getting a reference.
// event.defaultPrevented();I think I want this here. From 25.9						

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   //let listedPlanetsResponse = myFetch();
			let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   //let planetVar = pickPlanet(listedPlanets);

			//addDestinationInfo();//document, name, diameter, star, distance, moons, imageUrl
			//PlanetVar is the object I think

			  
						});
					});
