"use strict";

const namberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

const PersonalMovieDB = {
  count: namberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};


//Практика 2 

for (let i = 0; i < 2; i++) {
  const a = prompt("Один из последних просмотренных фидьмов?", ""),
        b = prompt("На сколько оцените его?", "");

        PersonalMovieDB.movies[a] = b;    
}