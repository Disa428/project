"use strict";

const namberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

const PersonalMuvieDB = {
  count: namberOfFilms,
  muveis: {},
  actors: {},
  genres: [],
  privat: false

};

const a = prompt("Один из последних просмотренных фидьмов?", ""),
      b = prompt("На сколько оцените его?", ""),
      c = prompt("Один из последних просмотренных фидьмов?", ""),
      d = prompt("На сколько оцените его?", "");
  

 PersonalMuvieDB.movie[a] = b;
 PersonalMuvieDB.movie[c] = d;

 console.log(PersonalMuvieDB);

