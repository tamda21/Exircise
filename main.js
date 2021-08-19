// EXercise Function

// EX1 :
// Declare Function

// function getDetails(zName, zAge, zCountry) {
//   function namePattern(zName) {
//     let name = `${zName.split(" ")[0]+" "+zName.split(" ")[1][0].toUpperCase()+". ,"}`;
//     return name;
//   }

//   function ageWithMessage(zAge) {
//     let age = `Your Age Is ${zAge.split(" ")[0]},`;
//     return age;
//   }

//   function countryTwoLetters(zCountry) {
//     let country = `You Live In ${zCountry.slice(0,2).toUpperCase()}`
//     return country;
//   }

//   function fullDetails() {
//     return `Hello ${namePattern(zName)}${ageWithMessage(zAge)}${countryTwoLetters(zCountry)}`
//   }
//   return fullDetails();
// }
// console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));

// Arrow Function Syntax

const getDetails = (zName, zAge, zCountry) => {
  const namePattern = (zName) =>
    `${
      zName.split(" ")[0] + " " + zName.split(" ")[1][0].toUpperCase() + ". ,"
    }`;
  const ageWithMessage = (zAge) => `Your Age Is ${zAge.split(" ")[0]},`;
  const countryTwoLetters = (zCountry) =>
    `You Live In ${zCountry.slice(0, 2).toUpperCase()}`;
  const fullDetails = () =>
    `Hello ${namePattern(zName)}${ageWithMessage(zAge)}${countryTwoLetters(
      zCountry
    )}`;

  return fullDetails();
};
console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//EX 3
// Normal Function

// function checker(zName) {
//   return function (status) {
//     return function (salary) {
//       return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Available`;
//     };
//   };
// }

// Arrow Function Syntax

const checker = (zName) => (status) => (salary) =>
  status === "Available"
    ? `${zName}, My Salary Is ${salary}`
    : `Iam Not Available`;
console.log(checker("Osama")("Available")(4000));
console.log(checker("Ahmed")("Not Available")());
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// EX 4 :

function specialMix(...data) {
  let rest = 0;
  for (let i = 0; i < data.length; i++) {
    if (typeof data[i] === "number") {
      rest += data[i];
    } else {
      if (data[i].slice(0, 2) >= 0) {
        rest += parseInt(data[i]);
      }
    }
  }
  if (rest != 0) {
    return rest;
  } else {
    return `All Is String`;
  }
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test"));

////////////////////////////////////////////////////////////
// Function Arrow Challenges

// EX 1 :
// Function
// let names = function(...param){
//   return `String ${param}=>Done !`
// }
// console.log(names("Osama","Mohammed","Ali","Ibrahim"))
// Arrow Function Syntax
let names = (...param) => `String ${param}=>Done !`;

console.log(names("Osama", "Mohammed", "Ali", "Ibrahim"));

//EX 2 :
let myNumbers = [20, 50, 10, 60];
// Function
// function calc(one,two,...nums){
//   let reset = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (80-(one+two)==nums[i]) {
//       reset +=nums[i];
//     }

//   }
//   return one+two+reset;
// }

// console.log(calc(10,20,50,80));//80

// Arrow Function Syntax
const calc = (one, two, ...nums) => {
  let reset = 0;
  for (let i = 0; i < nums.length; i++) {
    if (80 - (one + two) == nums[i]) {
      reset += nums[i];
    }
  }
  return one + two + reset;
};

console.log(calc(10, 20, 50, 80)); //80
