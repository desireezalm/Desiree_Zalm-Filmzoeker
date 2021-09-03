// EINDOPDRACHT 004: FILMZOEKER

// IMPORT
import { movies } from './movies.js';



// GET MOVIE TITLES
let movieTitles = movies.map ((movie) => {
    return movie.Title;
});
// console.log(movieTitles);


// GET MOVIE POSTERS
let moviePoster = movies.map ((movie) => {
    return movie.Poster;
});
// console.log(moviePoster);


/*
const addMovieTitlesToDom = () => {
    for(let i=0; i<movieTitles.length; i++) {
        let newMovieTitle = movieTitles[i];
        let entryTitle = document.createElement("li");
        entryTitle.classList.add("entryMovie");
        entryTitle.innerHTML = newMovieTitle;  
        movieList.appendChild(entryTitle);
        entryTitle.appendChild
    }
}
addMovieTitlesToDom();


//const movieEntry = document.getElementsByClassName("entryMovie")
*/
/*
const addMoviePosters = () => {
    for(let i=0; i<moviePoster.length; i++) {
        let newPoster = moviePoster[i];
        let entryImg = document.createElement("img");
        entryImg.src = newPoster;
        movieList.appendChild(entryImg);
    }
}
addMoviePosters();
*/


// Add movies to DOM

const movieList = document.getElementById("movieDatabase");

const addMoviesToDom = () => {
    for(let i=0; i<moviePoster.length; i++) {
        let entry = moviePoster[i];
        let entryTitle = document.createElement("li");
        entryTitle.classList.add("entryMovie");
        let entryPoster = document.createElement("img");
        entryPoster.src = entry; 
        movieList.appendChild(entryTitle);
        entryTitle.appendChild(entryPoster);
    }
}
addMoviesToDom();

