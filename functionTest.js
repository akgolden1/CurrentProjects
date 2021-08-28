
let myRandomListofPlanets =  {
	"name": "anita",
	"diameter": "10",
	"star": "girg",
	"distance": "90",
	"image": "",
	"moons":"mam", //it's expecting a number so this may not be right
		};
//randomizer just picks a random planet. The planets are what I'm fetching
function pickPlanet(planets) {//this just produces a number, that I will use later to pick a planet
//takes in one argument, a list of planets and returns one planet from the list with a randomly-selected index
    let returnedIndex = Math.floor(Math.random()* planets.length);//take my array[Math.random()*number of objects in my array]
    myRandomListofPlanets = planets[returnedIndex];
    console.log(myRandomListofPlanets);
    //return planets[returnedIndex]; may need to add this back later
    //return myRandomListofPlanets;
    };