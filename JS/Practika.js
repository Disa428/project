"use strict";

const namberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

const PersonalMuvieDB = {
  count: namberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false

};

const a = prompt("Один из последних просмотренных фидьмов?", ""),
      b = prompt("На сколько оцените его?", ""),
      c = prompt("Один из последних просмотренных фидьмов?", ""),
      d = prompt("На сколько оцените его?", "");
  

 PersonalMuvieDB.movies[a] = b;
 PersonalMuvieDB.movies[c] = d;

 console.log(PersonalMuvieDB);

