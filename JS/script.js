// EINDOPDRACHT 004: FILMZOEKER

// IMPORT
import { movies } from './movies.js';
// console.log(movies);


// GET MOVIE TITLES
let movieTitles = movies.map ((movie) => {
    return movie.Title;
});


// GET MOVIE POSTERS
let moviePoster = movies.map ((movie) => {
    return movie.Poster;
});


// GET IMDB ID'S
let imdbLink = movies.map ((movie) => {
    return movie.imdbID;
});

// ADD LINKS TO POSTERS
let getLinks = (movies) => {
    movies.forEach(movie => {
        let fullLink = `https://www.imdb.com/title/${movie.imdbID}/`;
        console.log(fullLink);
    });
};


// ADD MOVIES TO DOM

const movieList = document.getElementById("movie-database");

const addMoviesToDom = (array, element) => {
    array.forEach(movie => {
        
        let movieItem = document.createElement('li');
        let entryPoster = document.createElement('img');
        let movieLink = document.createElement('a');
        let fullLink = `https://www.imdb.com/title/${movie.imdbID}/`;
        entryPoster.src = movie.Poster;
        movieLink.href = fullLink;
        movieLink.target = "_blank";
        movieLink.title = movie.Title;      
        element.appendChild(movieItem);
        movieItem.appendChild(movieLink);
        movieLink.appendChild(entryPoster);

    });
};
addMoviesToDom(movies, movieList);


// REMOVE MOVIES FROM DOM

const removeMoviesFromDom = () => {
    while (movieList.firstChild) {
        movieList.removeChild(movieList.firstChild);
    }
}


// FILTER MOVIES

const filterMovies = (wordInMovieTitle) => {
    const filteredMovies = movies.filter((movie) => movie.Title.includes(wordInMovieTitle));
    console.log(filteredMovies)
    return filteredMovies;
};

let newMovies = movies.filter((movie) => movie.Year >= 2014);


// AFZONDERLIJKE FUNCTIES VOOR TESTEN
/*
let avengerMovies = movies.filter((movie) => {
    return movie.Title.includes("Avengers");
});

let xMenMovies = movies.filter((movie) => {
    return movie.Title.includes("X-Men");
});

let princessMovies = movies.filter((movie) => {
    return movie.Title.includes("Princess");
});

let batmanMovies = movies.filter((movie) => {
    return movie.Title.includes("Batman");
});
*/


// SELECT RADIOBUTTONS

const filterBtns = document.getElementsByName("film");

const changeEvent = () => {
    for (let i=0; i<filterBtns.length; i++) {
        filterBtns[i].addEventListener("change", function(e) {
            let btn = filterBtns[i];
            switch (e.target.id) {
                case "nieuw":
                    console.log(e.target.value);
                    removeMoviesFromDom();
                    addMoviesToDom(newMovies, movieList);
                    break;
                case "avenger":
                    console.log(e.target.value);
                    removeMoviesFromDom();
                    addMoviesToDom(filterMovies("Avengers"), movieList);
                    break;
                case "xmen":
                    console.log(e.target.value);
                    removeMoviesFromDom();
                    addMoviesToDom(filterMovies("X-Men"), movieList);
                    break;
                case "princess":
                    console.log(e.target.value);
                    removeMoviesFromDom();
                    addMoviesToDom(filterMovies("Princess"), movieList);
                    break;
                case "batman":
                    console.log(e.target.value);
                    removeMoviesFromDom();
                    addMoviesToDom(filterMovies("Batman"), movieList);
                    break;
            }
        });
    };
};
changeEvent();


// SEARCH BAR

const searchBar = document.forms['search-movies'].querySelector('input');

searchBar.addEventListener('keyup', (e) => {
    let searchTerm = e.target.value.toLowerCase();
    let filteredTitles = movies.filter(movie => {
        return movie.Title.toLowerCase().includes(searchTerm)
    });
    console.log(filteredTitles);
    removeMoviesFromDom();
    addMoviesToDom(filteredTitles, movieList);
});
// console.log(searchBar);


// REFRESH BUTTON
const refreshBtn = document.getElementById("refresh-button");

refreshBtn.addEventListener("click", function(e) {
    let clearBtns = document.getElementsByName("film");
    for(let i=0;i<clearBtns.length;i++) {
        clearBtns[i].checked = false;
        removeMoviesFromDom();
        addMoviesToDom(movies, movieList);
    };
});
