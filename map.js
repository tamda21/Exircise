// JavaScript Bootcamp   071  at 078
//EX 1 :
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
let res = mix
  .map((el) => (isNaN(el) ? el : ""))
  .reduce((perv, elm) => perv + elm);
console.log(res);
/////////////////////////////////////////////
//EX 2 :
let myString = "EElllzzzzzzzeroo";
let res1 = myString
  .split("")
  .filter((item, ind, arr) => arr.indexOf(item) == ind)
  .join("");
console.log(res1);
/////////////////////////////////////////////
//EX 3 :
let myArray = ["E", "l", "z", ["e", "r"], "o"];
let res2 = myArray
  .reduce((prev, item) =>
    Array.isArray(prev) ? prev.join("") + item : prev + item
  )
  .replace(",", "");
console.log(res2);
//////////////////////////////////////////////////////
//EX 4 :
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
// [-1, -10, 10, 20, -5, -3]

let res3 = numsAndStrings.filter((item) => !isNaN(item)).map((elm) => -elm);
console.log(res3);
/////////////////////////////////////////////////////
//EX 4 :
let nums = [2, 12, 11, 5, 10, 1, 99];
// 500

let res4 = nums.reduce(
  (prev, item) => (item % 2 == 0 ? prev * item : prev + item),
  1
);
console.log(res4);
///////////////////////////////////////////
// Higher Order Functions Challenge
let myStr= "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";
console.log(myStr[2])
let solution = myStr.split(",").filter(item=>isNaN(item)&&item!="_");

console.log(solution); // Elzero Web School
