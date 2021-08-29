// Write your JavaScript code here!



window.addEventListener("load", function() {
    //when the page loads, we're going to do this function. Alternative to the script tags
console.log ("page loaded"); 

let formSubmit=formSubmission();//why wouldn't I do this here after the page loads?
if (formSubmit){
    document.getElementById('test-form').submit();
}else{
console.log ("form Submit Didn't Work");
    }

//this is for me. This si where DOM gode goes, after like 6
// TODO:according to Carrie, if we had JSON to fetch, which we do, we would do that here. And then we would
// call the function that runs everything from inside the JSON?  Not sure about that.
// let form = document.querySelector("form");//lines 4-6 explained in 25.9. We need the variable form because it's getting a reference.
// form.addEventListener("click", function(event){
// //formSubmission;
event.defaultPrevented();//I think I want this here. From 25.9
alert ("i'm in the form");
   
});

let form = document.querySelector("formSubmit");//lines 4-6 explained in 25.9. We need the variable form because it's getting a reference.
	

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    // listedPlanetsResponse.then(function (result) {
    //     listedPlanets = result;
    //     console.log(listedPlanets);
    // }).then(function () {
    //     console.log(listedPlanets);
    //     // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    helloWorld();

     //formSubmission();
     //console.log("I'm below form submission");
   
    // })
 
