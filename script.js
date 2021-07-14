import { movies } from './movie.js';

// Functions
const searchArray = str => movies.filter(({ Title }, result) => result = Title.includes(str));

const addImageToHtml = (movies) => {
	movies.forEach(({ imdbID, Poster }) => {
		const menu = document.getElementById('overview-movies');
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
const newMovies = movies.filter(({ Year }) => Year >= 2014);
const avengersMovies = searchArray("Avengers");
const xmenMovies = searchArray("X-Men");
const princessMovies = searchArray("Princess");
const batmanMovies = searchArray("Batman");

// console.log("New Movies: ", newMovies);
// console.log("Avengers Movies: ", avengersMovies);
// console.log("X-men Movies: ", xmenMovies);
// console.log("Princess Movies: ", princessMovies);
// console.log("Batman Movies: ", batmanMovies);

addImageToHtml(newMovies);

