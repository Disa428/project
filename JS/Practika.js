"use strict";

const PersonalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function() {
    PersonalMovieDB.count = prompt("Сколько фильмов вы уже посмотрели?", "");
  
    while (PersonalMovieDB.count == '' || PersonalMovieDB.count == null || isNaN(PersonalMovieDB.count)) {
      PersonalMovieDB.count = prompt("Сколько фильмов вы уже посмотрели?", "")
    }
  },
  rememberMyFilms: function() {
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
  },
  detectPersonalLevel: function() {
    if (PersonalMovieDB.count < 10 ){
      console.log("Просмотренно довольно мало фильмов");
    } else if (PersonalMovieDB.count >= 10 && PersonalMovieDB.count > 30){
        console.log("Вы классичейский зритель");
    } else if (PersonalMovieDB.count >= 30 && PersonalMovieDB.count <50 ) {
        console.log("Вы киноман");
    } else {
        console.log("error");
  }
  },
  showMyDB: function(hidden) {
    if (!hidden) {
      console.log(PersonalMovieDB);
   } 
  }, 
  toggleVisibleMyDB: function() {
    if (PersonalMovieDB.privat) {
      PersonalMovieDB.privat = false;
    } else {
      PersonalMovieDB.privat = true;
    }
  },
  writeYourGenres: function() {
    for (let i = 1; i < 4; i++) {
       let genre = prompt(`Ваш любимый жанр по номером ${i}`);

       if (genre == '' || genre == null) {
         console.log('вы введи некоректные данные или неввели вовск');
         i--;
       } else {
        PersonalMovieDB.genres[i - 1] = genre;
       }
      }
      PersonalMovieDB.genres.forEach((item, i) => {
           console.log(`Любимый жанр ${i + 1} это ${item}`);
      });
  }
};










