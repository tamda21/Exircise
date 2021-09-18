//  Exercise course 94 to 100 
//  Ex 1 : 
// let lk = document.links;
// Array.from(lk).forEach(ele => {
//     if (!ele.classList.contains("open") || ele.textContent != "Elzero") {
//         ele.onclick = () => {
//             ele.href = "https://elzero.org";
//         }
//     }
// });
// ===================================================
// Ex2 :
// let inpAdd = document.querySelector(".classes-to-add"),
//     inpRemove = document.querySelector(".classes-to-remove"),
//     outPut = document.querySelector(".classes-list div");

// // Add Element
// inpAdd.addEventListener("blur", () => {

//     let res = inpAdd.value.split(" ");
//     if (res.length > 1) {
//         for (let i = 0; i < res.length; i++) {
//             // create span element
//             span = document.createElement("span");
//             // create text for span element
//             let text = document.createTextNode(res[i].toLowerCase());
//             span.appendChild(text);
//             //appand span to div element
//             outPut.appendChild(span);

//         }
//     } else {
//         // create span element
//         span = document.createElement("span");
//         // create text for span element
//         let text = document.createTextNode(res.join("").toLowerCase());
//         span.appendChild(text);
//         //appand span to div element
//         outPut.appendChild(span);
//     }



//     inpAdd.value = "";
// });


// // Remove Element
// inpRemove.addEventListener("blur", () => {
//     outPut.querySelectorAll("span").forEach(elem => {
//         let res = inpRemove.value.split(" ");

//         if (res.length >= 1) {
//             for (let i = 0; i < res.length; i++) {


//                 if (res[i].toLowerCase() === elem.textContent || res[i].toUpperCase() === elem.textContent) {
//                     elem.remove();
//                 } else if (res[i] === elem.textContent && res.length == 1) {
//                     elem.remove();
//                 }

//             }
//         }
//     })

//     inpRemove.value = "";
// });
// =========================================================
// EX 3 :
// let div = document.querySelector(".our-element");
// //  remove paragraph
// document.querySelector("p").remove();
// //  set first div
// let divStart = document.createElement("div");
// divStart.className = "start";
// divStart.setAttribute("title", "Start Element");
// divStart.setAttribute("data-value", "start");
// divStart.append(document.createTextNode("Start"))
// //  set second div
// let divEnd = document.createElement("div");
// divEnd.className = "end";
// divEnd.setAttribute("title", "End Element");
// divEnd.setAttribute("data-value", "end");
// divEnd.append(document.createTextNode("End"));
// // added two div in document
// div.prepend(divStart);
// div.append(divEnd);
// =========================================================
// // EX 4 :
// let div = document.querySelector("div");
//  console.log( div.childNodes[4].textContent.trim())
// =========================================================
// EX 5 :
// let all = document.body.children;
// Array.from(all).forEach(ele=>{
//     ele.addEventListener("click",(e)=>{
//         console.log(`This is ${e.target.tagName}`)
//     })
// })