import { movies } from './movie.js';

// Functions
const searchArray = str => movies.filter(({ Title }, result) => result = Title.includes(str));

const removeImageOffHtml = menu => {
	const linksOnPage = document.getElementById('overview-movies').querySelectorAll('a');
	console.log("links.length", linksOnPage.length);
	console.log("links", linksOnPage);
	// menu.removeChild(linksOnPage);
	if (linksOnPage.length != 0) {
		for (let i = linksOnPage.length; i > 0; i--) {
			console.log("counter", counter);
			menu.remove(linksOnPage[i]);
			console.log("links", linksOnPage);
		}
	} else {
		return;
	}
};

const addImageToHtml = (movies) => {
	const menu = document.getElementById('overview-movies');
	console.log("gaat nu naar removeImageOffHtml");
	removeImageOffHtml(menu);
	console.log("is weer terug na remove naar addImageToHtml");
	movies.forEach(({ imdbID, Poster }) => {
		const newLink = document.createElement("a");
		const newImg = document.createElement("img");
		newLink.href = ("https://www.imdb.com/title/" + imdbID);
		newLink.target = "_blank";
		newImg.classList.add("test");
		newImg.src = Poster;
		menu.appendChild(newLink);
		newLink.appendChild(newImg);
	})
}

// Constants
const allMovies = movies.filter(item => item);
const newMovies = movies.filter(({ Year }) => Year >= 2014);
const avengersMovies = searchArray("Avengers");
const xmenMovies = searchArray("X-Men");
const princessMovies = searchArray("Princess");
const batmanMovies = searchArray("Batman");

// Get DOM elements
const radioButtonNewMovies = document.getElementById("filter-buttons").querySelector(":nth-child(1)");
const radioButtonAvengers = document.getElementById("filter-buttons").querySelector(":nth-child(2)");
const radioButtonXMen = document.getElementById("filter-buttons").querySelector(":nth-child(3)");
const radioButtonPrincess = document.getElementById("filter-buttons").querySelector(":nth-child(4)");
const radioButtonBatman = document.getElementById("filter-buttons").querySelector(":nth-child(5)");

// Standard output when loading the webpage
console.log(addImageToHtml(princessMovies));

// Eventlisteners
radioButtonNewMovies.addEventListener('click', addImageToHtml(newMovies));
radioButtonAvengers.addEventListener('click', addImageToHtml(avengersMovies));
radioButtonXMen.addEventListener('click', addImageToHtml(xmenMovies));
radioButtonPrincess.addEventListener('click', addImageToHtml(princessMovies));
radioButtonBatman.addEventListener('click', addImageToHtml(batmanMovies));





// Console.logs voor testen
// console.log("New Movies: ", newMovies);
// console.log("Avengers Movies: ", avengersMovies);
// console.log("X-men Movies: ", xmenMovies);
// console.log("Princess Movies: ", princessMovies);
// console.log("Batman Movies: ", batmanMovies);

// console.log(addImageToHtml(avengersMovies));

