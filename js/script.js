"use strict";

const numberOfFilms = +prompt("Скільки фільмів ви вже бачили?", "");
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  const a = prompt("Назвіть один з останніх переглянутих фільмів", ""),
    b = +prompt("На скільки оціните його?", "");

  if (a != null && b != null && a != "" && b != "" && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log("done");
  } else {
    console.log("Error");
    i--;
  }
}

if (personalMovieDB.count < 10) {
  console.log("Переглянуто доволі мало фільмів!");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log("Ви класичний глядач!");
} else if (personalMovieDB.count >= 30) {
  console.log("Ви кіноман!");
} else {
  console.log("Відбулася помилка!");
}

console.log(personalMovieDB);
