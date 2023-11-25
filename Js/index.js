const numberOfFilms = +prompt("Скільки фільмів ви подивились?");

const personalMovieDB = {
  count:numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("Один з останніх переглянутих фільмів?", ""),
b = +prompt("На скільки оцінете його?", "")
// c = prompt("Один з останніх переглянутих фільмів?", ""),
// d = +prompt("На скільки оцінете його?", "");


// personalMovieDB.movies[c] =d;

// цикл for
for(let i = 0; i < 2 ; i++) {
  const a = prompt("Один з останніх переглянутих фільмів?", ""),
b = +prompt("На скільки оцінете його?", "");

if(a !==null && b !==null & a !== '' && b !== '' && a.length < 50) {
  personalMovieDB.movies[a] =b;
  console.log("done");
} else if(personalMovieDB.count < 10 ) {
  console.log("Переглянуто доволі мало фільмів")
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log("Ви класичний глядач")
} else if (personalMovieDB.count >= 30) {
  console.log("Ви кіноман =)");
} else {
  console.log("Виникла помилка, спробуй ще")
  i--;
}
}

console.log(personalMovieDB);

// Wile цикл
// let i = 0;
// while (i < 2) {
//   const movieTitle = prompt("Один з останніх переглянутих фільмів?", "");
//   const movieRating = +prompt("На скільки оцінете його?", "");

//   if (
//     movieTitle !== null &&
//     movieRating !== null &&
//     movieTitle !== "" &&
//     movieRating !== "" &&
//     movieTitle.length < 50
//   ) {
//     personalMovieDB.movies[movieTitle] = movieRating;
//     console.log("done");
//     i++;
//   } else if (personalMovieDB.count < 10) {
//     console.log("Переглянуто доволі мало фільмів");
//   } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log("Ви класичний глядач");
//   } else if (personalMovieDB.count >= 30) {
//     console.log("Ви кіноман =)");
//   } else {
//     console.log("Виникла помилка, спробуй ще");
//   }
// console.log(personalMovieDB);
// }


// do while цикл 
// let i = 0;
// do {
//   const movieTitle = prompt("Один з останніх переглянутих фільмів?", "");
//   const movieRating = +prompt("На скільки оцінете його?", "");

//   if (
//     movieTitle !== null &&
//     movieRating !== null &&
//     movieTitle !== "" &&
//     movieRating !== "" &&
//     movieTitle.length < 50
//   ) {
//     personalMovieDB.movies[movieTitle] = movieRating;
//     console.log("done");
//     i++;
//   } else if (personalMovieDB.count < 10) {
//     console.log("Переглянуто доволі мало фільмів");
//   } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log("Ви класичний глядач");
//   } else if (personalMovieDB.count >= 30) {
//     console.log("Ви кіноман =)");
//   } else {
//     console.log("Виникла помилка, спробуй ще");
//   }
// } while (i < 2);

// console.log(personalMovieDB);
// let result = "";
// const length = 11;

// for (let i = 1; i < length; i++) {
//   for (let j = 0; j < i; j++) {
//     result += "*";
//   }
//   result += "\n";
// }

// for(let i = length - 1; i >=1; i--){
//     for(let j = 0; j < i; j++){
//         result += "*";
//     }
//     result += "\n";
// }
// console.log(result);


// При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой

// function firstTask() {
//   for(let i = 5; i <= 10; i++)
// console.log(i)
// }
// firstTask()


// При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл

// function secondTask() {
// for(let i = 20; i > 10; i --) {
//   if(i === 13) {
//     break
//   }
//   console.log(i);
// }

// }
// secondTask()

// При помощи цикла for выведите чётные числа от 2 до 10 включительно

// function thirdTask() {
// for(let i = 2; i <= 20; i++) {
//   if(i % 2 === 1) {
//     continue;
//         } else {
//             console.log(i);
//         }
// }
// }
// thirdTask() 

// function thirdTask() {
  // for( let i =2; i <= 10; i+=2) {
  //   console.log(i);
  // }
// }
// thirdTask()

// Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же. Не создайте бесконечный цикл! Иначе браузер может зависнуть.

//  Цикл, который нужно переписать:
 
//  for (let i = 2; i <= 16; i++) {
//      if (i % 2 === 0) {
//          continue;
//      } else {
//          console.log(i);
//      }
//  }

// function fourthTask() {
//   let i = 2;

//   while (i <= 16) {
//     if (i % 2 !== 0) {
//       console.log(i);
//     }
//     i++;
//   }
// }
// fourthTask()


// Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]

// function fifthTask() {
//   const arrayOfNumbers = [];
//   // Пишем решение вот тут
//   for(let i = 5; i <= 10; i++) {
//       arrayOfNumbers.push(i)
//   }
//   console.log(arrayOfNumbers);
//   // Не трогаем
//   return arrayOfNumbers;
// }

// fifthTask()
// 2.1
// Заполните новый массив (result) числами из старого (arr).
// Количество элементов в массиве можно получить как arr.length,
// а к элементам обращаемся все так же: arr[0], arr[1] и тд.
// Должен получиться точно такой же массив

// function firstTask() {
//   // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//   const arr = [3, 5, 8, 16, 20, 23, 50];
//   const result = [];

//   // Пишем решение вот тут
//   for(let i = 0; i < arr.length; i ++) {
// result.push([i])
//   }
//   console.log(result);
//   // Не трогаем
//   return result;
// }
// firstTask()

// 2.2
// Измените данный массив так, чтобы все числа
//  были увеличены в 2 раза, а если попадается строка
//  строка - то к ней было добавлено " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

// function secondTask() {
//   // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//   const data = [5, 10, 'Shopping', 20, 'Homework'];
//   // Пишем решение вот тут
//   for(let i =0; i < data.length; i++) {
//     if(typeof data[i] === 'number') {
//       data[i] *2;
//     } else if
//     (typeof data[i] === "string") {
    
//     data[i] += '- done';
//     }
//     console.log(data);
//   }
//   // Не трогаем
//   return data;
// }
// secondTask()

// 2.3
// Разверните массив data наоборот при помощи цикла
//  и запишите данные в массив result.
// Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]

// function thirdTask() {
//   // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//   const data = [5, 10, 'Shopping', 20, 'Homework'];
//   const result = [];
//   // Пишем решение вот тут
// for( let i = data.length -1; i >= 0; i --) {
//   result.push(data[i])
// }
  
//   console.log(result);
//   // Не трогаем
//   return result;
// }
// thirdTask()

//  Сейчас вам необходимо написать код,
//  который при помощи звездочек (*) в консоли нарисует вот такую фигуру:

// *
// ***
// *****
// *******
// *********
// ***********
// (Подсказка: в конце фигуры есть перенос строки \n, 
// который тоже учитывается в тестах. 
// В КОНЦЕ КАЖДОЙ СТРОКИ НЕТ ПРОБЕЛОВ, ТОЛЬКО ПЕРЕНОС)

// const lines = 5;
// let result = '';

// for(let i = 0; i < lines +1; i ++) {
//   for(let j = 0; j < lines +1 - i -1; j ++) {
//     result += " ";
//   }

//   for(let k = 0; k < 2 * i + 1; k++) {
//     result += "*";
//   }
//   result +="\n";
// }

// console.log(result);