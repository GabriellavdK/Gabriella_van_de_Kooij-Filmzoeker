import { movies } from './movie.js';

// Get DOM elements
const filterList = document.getElementById("filter-buttons").querySelectorAll("li");
const radioButtonNewMovies = filterList[0];
const radioButtonAvengers = filterList[1];
const radioButtonXMen = filterList[2];
const radioButtonPrincess = filterList[3];
const radioButtonBatman = filterList[4];
const siteSearch = document.forms['site-search'].querySelector('input');

// Functions
const searchArray = str => movies.filter(({ Title }) => {
	Title = Title.toLowerCase();
	str = str.toLowerCase();
	return Title.includes(str);
});

const removeImageOffHtml = menu => {
	const linksOnPage = document.getElementById('overview-movies').querySelectorAll('a');
	let counter = 0;
	if (linksOnPage.length != 0) {
		for (let i = 0; i < linksOnPage.length; i++) {
			menu.removeChild(linksOnPage[counter]);
			counter++;
		}
	} else {
		return;
	}
};

const addImageToHtml = (movies) => {
	const menu = document.getElementById('overview-movies');
	removeImageOffHtml(menu);
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



// Standard output when loading the webpage
addImageToHtml(allMovies);

// Eventlisteners
radioButtonNewMovies.addEventListener('change', item => item = addImageToHtml(newMovies));
radioButtonAvengers.addEventListener('change', item => item = addImageToHtml(avengersMovies));
radioButtonXMen.addEventListener('change', item => item = addImageToHtml(xmenMovies));
radioButtonPrincess.addEventListener('change', item => item = addImageToHtml(princessMovies));
radioButtonBatman.addEventListener('change', item => item = addImageToHtml(batmanMovies));
siteSearch.addEventListener('input', input => addImageToHtml(searchArray(input.target.value)));
