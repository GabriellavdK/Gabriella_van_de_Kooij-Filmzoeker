import { movies } from './movie.js';

// const titleOfMovie = movies.map(item => item.Title);
// const yearOfMovie = movies.map(item => item.Year);
// const imdbIdOfMovie = movies.map(item => item.imdbID);
// const typeOfMovie = movies.map(item => item.Type);
// const posterOfMovie = movies.map(item => item.Poster);

// oude werkende functie 
// const searchArray = (str, searchInTitle) => {
// 	const string = new RegExp(str);
// 	console.log(string.test(searchInTitle));
// 	const result = string.test(searchInTitle);
// 	if (result === true) {
// 		return searchInTitle;
// 	} else {
// 		return;
// 	}
// }






// Functions
const searchArray = str => {
	const result = movies.filter(({ Title }) => Title.includes(str));
	console.log(result);
	if (result === true) {
		return result;
	} else {
		return;
	}
};

const makeArray = array => {
	movies.filter(({ Title }) => Title = array);
}

// Constants
const newMovies = movies.filter(({ Year }) => Year >= 2014);
const avengersMovies = movies.filter(item => item = searchArray("Avengers"));
const xmenMovies = searchArray("X-Men");
const princessMovies = searchArray("Princess");
const batmanMovies = searchArray("Batman");

console.log("New Movies: ", newMovies);
console.log("Avengers Movies: ", avengersMovies);
console.log("X-men Movies: ", xmenMovies);
console.log("Princess Movies: ", princessMovies);
console.log("Batman Movies: ", batmanMovies);







import { movies } from './movie.js';

// const titleOfMovie = movies.map(item => item.Title);
// const yearOfMovie = movies.map(item => item.Year);
// const imdbIdOfMovie = movies.map(item => item.imdbID);
// const typeOfMovie = movies.map(item => item.Type);
// const posterOfMovie = movies.map(item => item.Poster);

// Functions
const searchArray = str => {
	const result = movies.filter(({ Title }) => Title.includes(str));
	console.log(result);
	if (result === true) {
		return result;
	} else {
		return;
	}
};


// const searchArray = ((testarray, title) => {
// 	title = movies.includes(item => item.Title);
// 	title.includes(testarray);
// });



// Constants
// const newMovies = movies.filter(({ Year }) => Year >= 2014);
// const avengersMovies = movies.filter(item => searchArray("Avengers", item.Title));
// const xmenMovies = movies.filter(item => searchArray("X-Men", item.Title));
// const princessMovies = movies.filter(item => searchArray("Princess", item.Title));
const batmanMovies = searchArray("Batman");
const test = movies.filter(({ Title }) => Title.includes("Batman"));

console.log(batmanMovies);
console.log(test);

// console.log("New Movies: ", newMovies);
// console.log("Avengers Movies: ", avengersMovies);
// console.log("X-men Movies: ", xmenMovies);
// console.log("Princess Movies: ", princessMovies);
// console.log("Batman Movies: ", batmanMovies);



