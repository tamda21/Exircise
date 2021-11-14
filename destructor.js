// JavaScript-Bootcamp-Assignments-Lesson-From-115-to-122

// EX1 : 

// let myNumbers = [1, 2, 3, 4, 5];

// let [a,,,,e]=myNumbers;

// console.log(a * e);
//////////////////////////////////////////////////////////////////////////
// EX2 :

// let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];
// let [a,b,c,[d,e,[f,g]]] = mySkills;

// console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);
// // My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel
//////////////////////////////////////////////////////////////////
// EX3 : 
// let arr1 = ["Ahmed", "Sameh", "Sayed"];
// let arr2 = ["Mohamed", "Gamal", "Amir"];
// let arr3 = ["Haytham", "Shady", "Mahmoud"];
//  let allArr = arr1.concat(arr3);
//  console.log(allArr)
// let [c,,,,a,b] = allArr
// console.log(`My Best Friends: ${a}, ${b}, ${c}`);
 // My Best Friends: Shady, Mahmoud, Ahmed
////////////////////////////////////////////////////
// EX4 :
// const member = {
//     age: 30,
//     working: false,
//     country: "Egypt",
//     hobbies: ["Reading", "Swimming", "Programming"],
// };

// const {age:a,working:w,country:c,hobbies:[h1,,h3]} = member;
// console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
//  My Age Is 30 And Iam Not Working

// console.log(`I Live in ${c}`);
//  I Live in Egypt

// console.log(`My Hobbies: ${h1} And ${h3}`);
// My Hobbies: Reading And Programming
///////////////////////////////////////////
// EX5 :
// const game = {
//     title: "YS",
//     developer: "Falcom",
//     releases: {
//         "Oath In Felghana": ["USA", "Japan"],
//         "Ark Of Napishtim": {
//             US: "20 USD",
//             JAP: "10 USD",
//         },
//         Origin: "30 USD",
//     },
// };
// let {
//     title: t,
//     developer: d,
//     releases: {
//         "Oath In Felghana": [u,j],
//       "Ark Of Napishtim": {
//             US: u_price,
//             JAP: j_price
//         },
//         Origin: or
//     }
// } = game;
// let arr = Object.keys(game.releases);
// game.releases["Oath In Felghana"] =arr[0];
// game.releases["Ark Of Napishtim"] = arr[1];
// console.log(arr[0]) //Oath In Felghana
// console.log(arr[1]) //Ark Of Napishtim
// const {
//      title:tt,
//      developer:dd,
//     releases: {
//         "Oath In Felghana":o,
//         "Ark Of Napishtim":a
//     }
// } = game;



// console.log(`My Favourite Games Style Is ${t} Style`);
// // My Favourite Games Style Is YS Style

// console.log(`And I Love ${d} Games`);
// // And I Love Falcom Games

// console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
// // My Best Release Is Oath In Felghana It Released in USA & Japan

// console.log(`Although I Love ${a}`);
// // Although I Love Ark Of Napishtim

// console.log(`${a} Price in USA Is ${u_price}`);
// // Ark Of Napishtim Price in USA Is 20 USD

// console.log(`${a} Price in USA Is ${j_price}`);
// // Ark Of Napishtim Price in USA Is 10 USD

// console.log(`Origin Price Is ${or}`);
// // Origin Price Is 30 USD
/////////////////////////////////////////////////
// EX6 :
 

let myFriends = [{
        title: "Osama",
        age: 39,
        available: true,
        skills: ["HTML", "CSS"]
    },
    {
        title: "Ahmed",
        age: 25,
        available: false,
        skills: ["Python", "Django"]
    },
    {
        title: "Sayed",
        age: 33,
        available: true,
        skills: ["PHP", "Laravel"]
    },
];


function showFriends(chosen) {
    switch (chosen) {
        case 1:
            let [{title:t,age:a,available:av,skills:[,c]}] = myFriends;
            console.log(`${t}`)
            console.log(`${a}`)
            console.log(`${av ? "Available" : "Not Available"}`)
            console.log(`${c}`)
            break;
        case 2:
             let [,{
                 title: t1,
                 age: a1,
                 available: av1,
                 skills: [, d]
             },] = myFriends;
             console.log(`${t1}`)
             console.log(`${a1}`)
             console.log(`${av1 ? "Available" : "Not Available"}`)
             console.log(`${d}`)
            break;
        case 3:
             let [,, {
                 title: t2,
                 age: a2,
                 available: av2,
                 skills: [, l]
             } ] = myFriends;
             console.log(`${t2}`)
             console.log(`${a2}`)
             console.log(`${av2 ? "Available" : "Not Available"}`)
             console.log(`${l}`)
            break;
    
        default:
            break;
    }
}

showFriends(3)















