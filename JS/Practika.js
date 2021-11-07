"use strict";

const namberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

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

    if ( a != null && b != null && a != '' && b != '' && a.length < 50) {
      PersonalMovieDB.movies[a] = b; 
      console.log("done");
    } else {
      console.log("error");
      i--;
    }  
}

if (PersonalMovieDB.count < 10 ){
  console.log("Просмотренно довольно мало фильмов");
} else if (PersonalMovieDB.count >= 10 && PersonalMovieDB.count > 30){
    console.log("Вы классичейский зритель");
} else if (PersonalMovieDB.count >= 30 && PersonalMovieDB.count <50 ) {
    console.log("Вы киноман");
} else {
    console.log("error");
}
console.log(PersonalMovieDB);