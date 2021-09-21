// EINDOPDRACHT 004: FILMZOEKER

// IMPORT
import { movies } from './movies.js';
// console.log(movies);


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



// ADD MOVIES TO DOM

const movieList = document.getElementById("movieDatabase");

const addMoviesToDom = (array, element) => {
    array.forEach(movie => {
        
        let movieItem = document.createElement('li');
        let entryPoster = document.createElement("img");
        entryPoster.src = movie.Poster;
        movieItem.classList.add("entryMovie");        
        element.appendChild(movieItem);
        movieItem.appendChild(entryPoster);

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

// INCOMPLEET, OP ANDERE MANIER PROBEREN?
/*
let filterMovies = movies.filter(function(movie, wordInMovieTitle) {    
    return movie.Title.includes(wordInMovieTitle);
});
console.log(filterMovies);
*/


// WERKT NIET, GEEFT LEGE ARRAY.
/*
const filterMovies = movies.filter((movie) => {
    switch(document.getElementById) {
    case "avenger":
        return movie.Title.includes("Avengers");
    case "xmen":
        return movie.Title.includes("X-Men");
    case "princess":
        return movie.Title.includes("Princess");
    case "batman":
        return movie.Title.includes("Batman");
    }   
});
*/

// WERKT NIET, GEEFT ALLEEN AVENGER FILMS WEER IN ARRAY.
/*
const filterMovies = movies.filter((movie) => {
    if(document.getElementById = "avenger") {
        return movie.Title.includes("Avengers");
    }
    else if(document.getElementById = "xmen") {
        return movie.Title.includes("X-Men");
    }
    else if(document.getElementById = "princess") {
        return movie.Title.includes("Princess");
    }
    else if(document.getElementById = "batman") {
        return movie.Title.includes("Batman");
    }
    // return movie.Title.includes(wordInMovieTitle);    
});
*/

// WERKT NIET, GEEFT ALLEEN AVENGER FILMS WEER IN ARRAY.
const filterMovies = movies.filter((movie, wordInMovieTitle) => {
    if(document.getElementById = "avenger") {
        wordInMovieTitle = "Avengers";
    }
    else if(document.getElementById = "xmen") {
        wordInMovieTitle = "Avengers";
    }
    else if(document.getElementById = "princess") {
        wordInMovieTitle = "Avengers";
    }
    else if(document.getElementById = "batman") {
        wordInMovieTitle = "Avengers";
    }
    return movie.Title.includes(wordInMovieTitle);    
});


let newMovies = movies.filter((movie) => movie.Year >= 2014);


// AFZONDERLIJKE FUNCTIES WERKEN, MAAR MOET IN EEN FUNCTIE GECOMBINEERD WORDEN.
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
            // console.log(btn.value);
            // console.log(e.target);
            switch (e.target.id) {
                case "nieuw":
                    console.log(e.target.value);
                    console.log(newMovies);
                    removeMoviesFromDom();
                    addMoviesToDom(newMovies, movieList);
                    break;
                case "avenger":
                    console.log(e.target.value);
                    console.log(filterMovies);
                    removeMoviesFromDom();
                    addMoviesToDom(filterMovies, movieList);
                    break;
                case "xmen":
                    console.log(e.target.value);
                    console.log(filterMovies);
                    removeMoviesFromDom();
                    addMoviesToDom(filterMovies, movieList);
                    break;
                case "princess":
                    console.log(e.target.value);
                    console.log(filterMovies);
                    removeMoviesFromDom();
                    addMoviesToDom(filterMovies, movieList);
                    break;
                case "batman":
                    console.log(e.target.value);
                    console.log(filterMovies);
                    removeMoviesFromDom();
                    addMoviesToDom(filterMovies, movieList);
                    break;
            }
        });
    };
};
changeEvent();
