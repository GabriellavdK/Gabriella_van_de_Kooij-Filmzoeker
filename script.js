import { movies } from './movie.js';

// const titleOfMovie = movies.map(item => item.Title);
// const yearOfMovie = movies.map(item => item.Year);
// const imdbIdOfMovie = movies.map(item => item.imdbID);
// const typeOfMovie = movies.map(item => item.Type);
// const posterOfMovie = movies.map(item => item.Poster);

// Functions
const searchArray = str => movies.filter(({ Title }, result) => result = Title.includes(str));

// Constants
const newMovies = movies.filter(({ Year }) => Year >= 2014);
const avengersMovies = searchArray("Avengers");
const xmenMovies = searchArray("X-Men");
const princessMovies = searchArray("Princess");
const batmanMovies = searchArray("Batman");

console.log("New Movies: ", newMovies);
console.log("Avengers Movies: ", avengersMovies);
console.log("X-men Movies: ", xmenMovies);
console.log("Princess Movies: ", princessMovies);
console.log("Batman Movies: ", batmanMovies);



