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

let array3 = ["Banana","Orange","Kiwi"];
// for (let sum in array3){
//     console.log(sum);
// }
array3.push("Apple","Pineapple");
array3.unshift("Watermelon");
// console.log(array3.length);
array3.splice(3,0,"mango");
array3.shift();
array3.pop();
console.log(array3.length);
