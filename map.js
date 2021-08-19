// JavaScript Bootcamp   071  at 078

let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
// let res = mix
//   .map(function (item) {
//     return typeof item === "string" ? item : "";
//   })
//   .join("")
//   .trim();
// console.log(res);

// Arrow Function Syntax
let res = mix
  .map((item) => (typeof item === "string" ? item : ""))
  .join("")
  .trim();
console.log(res);
