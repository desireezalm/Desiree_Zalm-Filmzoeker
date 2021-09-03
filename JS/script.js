// EINDOPDRACHT 004: FILMZOEKER

// IMPORT
import { movies } from './movies.js';


// Add movies to DOM

const movieList = document.getElementById("movieDatabase");

/*
let movieTitles = movies.map ((movie) => {
    return movie.Title;
});
console.log(movieTitles);
*/

let moviePoster = movies.map ((movie) => {
    return movie.Poster;
});
// console.log(moviePoster);

/*
const addMoviesToDom = () => {
    for(let i=0; i<movieTitles.length; i++) {
        let newMovie = movieTitles[i];
        let entry = document.createElement("li");
        entry.innerHTML = newMovie;  
        movieList.appendChild(entry);
    }
}
addMoviesToDom();
*/

const addMoviePosters = () => {
    for(let i=0; i<moviePoster.length; i++) {
        let newPoster = moviePoster[i];
        let entryImg = document.createElement("img");
        entryImg.src = newPoster;
        movieList.appendChild(entryImg);
    }
}
addMoviePosters();


