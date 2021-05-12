"use strict";

let number0fFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
    count: number0fFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', ''),
    c = prompt('Один из последних просмотренных фильмов?', ''),
    d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);



const num = 60;

if (num < 59) {
    console.log('Error');
} else if (num > 100) {
    console.log('Дохуя');
} else {
    console.log('Самое то');
}

(num == 60) ? console.log('Самое то') : console.log('Error'); 

switch (num) {
    case 50: 
        console.log('Error');
        break;
    case 60: 
        console.log('Огонь');
        break;
    default: 
        console.log('Не сейчас');
        break;
}
