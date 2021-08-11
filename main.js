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
  const namePattern = (zName) => `${zName.split(" ")[0]+" "+zName.split(" ")[1][0].toUpperCase()+". ,"}`;
  const ageWithMessage = (zAge) => `Your Age Is ${zAge.split(" ")[0]},`;
  const countryTwoLetters = (zCountry) => `You Live In ${zCountry.slice(0,2).toUpperCase()}`
  const fullDetails = () => `Hello ${namePattern(zName)}${ageWithMessage(zAge)}${countryTwoLetters(zCountry)}`

  return fullDetails();
}
console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));