"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = prompt("Скільки фільмів ви вже бачили?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Скільки фільмів ви вже бачили?", "");
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Переглянуто доволі мало фільмів!");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Ви класичний глядач!");
  } else if (personalMovieDB.count >= 30) {
    console.log("Ви кіноман!");
  } else {
    console.log("Відбулася помилка!");
  }
}

detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i < 4; i++) {
    personalMovieDB.genres[i - 1] = prompt(
      `Вкажіть ваш улюблений фільм за номером: ${i}`,
      ""
    );
  }
}
writeYourGenres();
