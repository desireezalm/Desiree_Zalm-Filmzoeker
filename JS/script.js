// EINDOPDRACHT 004: FILMZOEKER

// IMPORT
import { movies } from './movies.js';


// console.log(movies);
/*
const movieTitles = movies.map ((movie) => {
    return movie.Title;
});
console.log(movieTitles);
*/


// Add movies to DOM

const movieList = document.getElementById("movieDatabase");

let movieTitles = movies.map ((movie) => {
    return movie.Title;
});
console.log(movieTitles);

const addMoviesToDom = () => {
    for(let i=0; i<movieTitles.length; i++) {
        let newMovie = movieTitles[i];
        let entry = document.createElement("li");
        //entry.value = newMovie[0];
        entry.innerHTML = newMovie;
    
        movieList.appendChild(entry);
    }
}
addMoviesToDom();


