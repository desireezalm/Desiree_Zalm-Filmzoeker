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



// ADD MOVIES TO DOM

const movieList = document.getElementById("movieDatabase");

/*
const addMoviesToDom = () => {
    for(let i=0; i<moviePoster.length; i++) {
        let entry = moviePoster[i];
        let entryTitle = document.createElement("li");
        entryTitle.classList.add("entryMovie");
        let entryPoster = document.createElement("img");
        entryPoster.src = entry; 
        movieList.appendChild(entryTitle);
        entryTitle.appendChild(entryPoster);
    };
};
addMoviesToDom();
*/

const addMoviesToDom = (array, element) => {
    array.forEach(movie => {
        
        let movieItem = document.createElement('li');
        let entryPoster = document.createElement("img");
        // movieItem.innerHTML = movie.Title;
        entryPoster.src = movie.Poster;
        movieItem.classList.add("entryMovie");        
        element.appendChild(movieItem);
        movieItem.appendChild(entryPoster);

    });
};
addMoviesToDom(movies, movieList);

const removeMoviesFromDom = () => {
    while (movieList.firstChild) {
        movieList.removeChild(movieList.firstChild);
    }
}


// FILTER MOVIES

/*
const filterMovies = (wordInMovieTitle) => {
    movies.filter(function (stringTitle) {
        return stringTitle.includes(wordInMovieTitle);
    });
    console.log(filterMovies);
    return filterMovies;
};
filterMovies();
*/

/*
let filteredMovies = movies.filter(function(movie, wordInMovieTitle) {
    return movie.Title.includes(wordInMovieTitle);
});
console.log(filteredMovies);
*/

let avengerMovies = movies.filter(function(movie) {
    return movie.Title.includes("Avengers");
});

let xMenMovies = movies.filter(function(movie) {
    return movie.Title.includes("X-Men");
});

let princessMovies = movies.filter(function(movie) {
    return movie.Title.includes("Princess");
});

let batmanMovies = movies.filter(function(movie) {
    return movie.Title.includes("Batman");
});


// SELECT RADIOBUTTONS

const filterBtns = document.getElementsByName("film");
// console.log(filterBtns);


const changeEvent = () => {
    for (let i=0; i<filterBtns.length; i++) {
        filterBtns[i].addEventListener("change", function(e) {
            let btn = filterBtns[i];
            // console.log(btn.value);
            // console.log(e.target);
            switch (e.target.id) {
                case "nieuw":
                    console.log("Dit zijn nieuwe films");
                    console.log(e.target.value);
                    break;
                case "avenger":
                    console.log(e.target.value);
                    console.log(avengerMovies);
                    removeMoviesFromDom();
                    addMoviesToDom(avengerMovies, movieList);
                    document.getElementById("avenger").checked = true;
                    break;
                case "xmen":
                    console.log(e.target.value);
                    console.log(xMenMovies);
                    removeMoviesFromDom();
                    addMoviesToDom(xMenMovies, movieList);
                    document.getElementById("xmen").checked = true;
                    break;
                case "princess":
                    console.log(e.target.value);
                    console.log(princessMovies);
                    removeMoviesFromDom();
                    addMoviesToDom(princessMovies, movieList);
                    document.getElementById("princess").checked = true;
                    break;
                case "batman":
                    console.log(e.target.value);
                    console.log(batmanMovies);
                    removeMoviesFromDom();
                    addMoviesToDom(batmanMovies, movieList);
                    document.getElementById("batman").checked = true;
                    break;
            }
        });
    };
};
changeEvent();
