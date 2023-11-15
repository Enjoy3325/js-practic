// const numberOfFilms = +prompt("Скільки фільмів ви подивились?");

// const personalMovieDB = {
//   count:numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// const a = prompt("Один з останніх переглянутих фільмів?", ""),
// b = +prompt("На скільки оцінете його?", ""),
// c = prompt("Один з останніх переглянутих фільмів?", ""),
// d = +prompt("На скільки оцінете його?", "");

// personalMovieDB.movies[a] =b;
// personalMovieDB.movies[c] =d;

// console.log(personalMovieDB);

let result = "";
const length = 11;

for (let i = 1; i < length; i++) {
  for (let j = 0; j < i; j++) {
    result += "*";
  }
  result += "\n";
}

for(let i = length - 1; i >=1; i--){
    for(let j = 0; j < i; j++){
        result += "*";
    }
    result += "\n";
}
console.log(result);