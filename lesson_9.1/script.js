"use strict";
let numberOfFilms = 0;
//numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', 0);
// console.log(numberOfFilms);

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

//_____________________________________________________

let a = prompt("Что смотрели недавно?",""),
    b = +prompt("Ваша оценка фильму",""),
    c = prompt("Что смотрели недавно?",""),
    d = +prompt("Ваша оценка фильму","");


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB.movies);
