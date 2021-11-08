"use strict";

let namberOfFilms;

function start() {
  namberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

  while (namberOfFilms == '' || namberOfFilms == null || isNaN(namberOfFilms)) {
    namberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "")
  }
}

start();

const PersonalMovieDB = {
  count: namberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};


//Практика 2 



function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фидьмов?", ""),
          b = prompt("На сколько оцените его?", "");
  
      if ( a != null && b != null && a != '' && b != '' && a.length < 50) {
        PersonalMovieDB.movies[a] = b; 
        console.log("done");
      } else {
        console.log("error");
        i--;
      }  
  }
} 

rememberMyFilms();




function detectPersonalLevel() {
  if (PersonalMovieDB.count < 10 ){
    console.log("Просмотренно довольно мало фильмов");
  } else if (PersonalMovieDB.count >= 10 && PersonalMovieDB.count > 30){
      console.log("Вы классичейский зритель");
  } else if (PersonalMovieDB.count >= 30 && PersonalMovieDB.count <50 ) {
      console.log("Вы киноман");
  } else {
      console.log("error");
}
}

detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(PersonalMovieDB);
 } 
}
showMyDB(PersonalMovieDB);

console.log(PersonalMovieDB);

function writeYourGenres() {
  for (let i = 1; i < 4; i++);
     PersonalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр по номером ${i}`);
}

writeYourGenres();