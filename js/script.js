"use strict";

const numberOfFilms = +prompt("Скільки фільмів ви вже бачили?", "");
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("Назвіть один з останніх переглянутих фільмів", "");
const b = +prompt("На скільки оціните його?", "");
const c = prompt("Назвіть один з останніх переглянутих фільмів", "");
const d = +prompt("На скільки оціните його?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
