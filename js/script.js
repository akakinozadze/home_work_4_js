"use strict";

//! 1 //

// let array2 = [14, 150, "css", null, "javascript", 25];

// let result = array2.map(function (item) {
//   if (typeof item == "Number") {
//     item = item**2;
//   } else if (typeof item == "string"){
//    item = item.toUpperCase ;
//   }
//   return item ;
// });

// console.log(result);

//! 2 //
// let info = "good day";

// let result = info.slice(4);
// console.log(result);

//! 3 //

// function fnc (item){
//     return item.length;
// }

// let sum = fnc ("hello");
// console.log(sum);

//! 4 //

// let rightAnsver = "tbilisi";

// let question = prompt("The capital of Georgia ?");
// function ansver() {
//     if (question == rightAnsver.toLowerCase()){
//         console.log(true);
//     }else {
//         console.log(false);
//     }
// }
// ansver(ansver);

//! 5 //

// let fruits = ["apple", "mango", "avocado", "kiwi"];

// for (let sum = 0 ; sum < fruits.length; sum++){
//     console.log(sum);
// }
// .... //
// for ( let x in fruits ){
//     console.log(x);
// }

// fruits.splice(2,1,"strawberry")
// console.log(fruits);

//! 6 //

// let array1 = [5, 25, 89, 120, 36];
// //! დავამატე ბოლოში //
// array1.push("javascript", "python");
// //! დავამატე დასაწყისში //
// array1.unshift("html", "css");
// for (let sum in array1){
//     console.log(sum);
// }
// //! წავშალე პირველი //
// array1.shift();
// //! წავშალე ბოლო //
// array1.pop();
// for (let result of array1){
//     console.log(result);
// }

//! 7 //

// let array3 = ["Banana","Orange","Kiwi"];
// // for (let sum in array3){
// //     console.log(sum);
// // }
// array3.push("Apple","Pineapple");
// array3.unshift("Watermelon");
// // console.log(array3.length);
// array3.splice(3,0,"mango");
// array3.shift();
// array3.pop();
// console.log(array3.length);

//! 8 //
// let array4 =[1, 2, 3, 4, 5];

// array4.splice(2,0,"a","b","c");
// console.log(array4);

//! 9 //
// let  array5 = [12, 25, 3, 6, 8, 14, 7, 23];

// let result = array5.map((item) => item / 3 ) ;
// console.log(result);
// // .. //
// let result1 = array5.map(function y (x){
//     const sum = x / 3;
//     console.log(sum);
// })

//! 10 //
// ;let array6 =  [15, 100, 25, 10, 36];
// for (let y in array6){
//     console.log(y);
// }
// array6.splice(3,1);
// console.log(array6)

//! 11 //

// let array7 = [1, 2, 3 , 4 , 5];

// for (let x in array7){
//     console.log(x);
// }
// array7.splice(2,1,"three");
// console.log(array7);

//! 12 //

// let array1 = ["hello1", 14, 24, "hello2"];
// for (let x of array1) {
//   if (typeof x == "number") {
//     console.log(x);
//   }
// }

// .. //
// let array1 = ["hello1", 14, 24, "hello2"].forEach(function(x){
//     if (typeof x == "number"){
//         console.log(x);
//     }
// })

//! 13 //

// let array8 = [1, 2, 3, 4, 5];
// let sum = 0;
// array8.forEach(element => {
//    sum +=element;
  
// });

// console.log(sum);

//! 14 //
// let languages = ['html', 'css', 'javascript', "python", 'php'].filter(elemnt =>{
//     if (elemnt.length > 3){
//         console.log(elemnt);
//     }
// })

//! 15 //

