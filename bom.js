// Assignment BOM from 102 to 110

// EX1 : 
// let inpPrompet = prompt("Print Number From – To", "Example: 5-20");
// let array = inpPrompet.split("-");
// // convert array 
// let convert = array.map(elm => Number(elm));
// if (convert[0] < convert[1]) {
//     for (let i = convert[0]; i <= convert[1]; i++) {
//         document.write(`${i}<br>`)

//     }
// } else {
//     for (let i = convert[1]; i <= convert[0]; i++) {

//         document.write(`${i}<br>`)

//     }
// }
// ========================================================
// EX2 : 
// Create Popup 
// Create DIV Element
// let div = document.createElement("div");
// div.style.width = "600px";
// div.style.height = "200px";
// div.style.margin = "100px auto";
// div.style.backgroundColor = "#eee";
// div.style.textAlign = "center";
// div.style.display = "flex";
// div.style.justifyContent = "center";
// div.style.alignItems = "center";
// div.style.flexFlow = "column wrap";
// div.style.position = "relative";
// // Create button close popup
// let btn = document.createElement("button");
// btn.textContent = "x";
// btn.style.width = "20px";
// btn.style.height = "20px";
// btn.style.border = "none";
// btn.style.backgroundColor = "#f00";
// btn.style.color = "#fff";
// btn.style.borderRadius = "50%";
// btn.style.position = "absolute";
// btn.style.right = "-10px";
// btn.style.top = "-10px";
// btn.style.display = "flex";
// btn.style.justifyContent = "center";
// btn.style.alignItems = "center";
// // Append button to Div 
// div.appendChild(btn);
// //Create h3 title
// let title = document.createElement("h3");
// title.textContent = "Welcome";
// title.style.width = "100%";
// title.style.marginBottom = "0px";
// title.style.fontWeight = "bold";
// title.style.fontSize = "25px"
// // Append title to div 
// div.append(title);
// //Create p content
// let content = document.createElement("p");
// content.textContent = "Welcome To Elzero Web School";
// content.style.width = "100%";
// //Append content to div 
// div.append(content);
// // Display DIV element in page After 5s
// function popup() {
//     document.body.appendChild(div);
//     //hide Div element 
//     document.querySelector("button").addEventListener("click", () => {
//         div.style.display = "none";
//     });
// }
// setTimeout(popup, 5000);

// ==============================================================================
// EX3 : 
// let div = document.querySelector("div");
// div.style.width = "100px";
// div.style.height = "100px";
// div.style.backgroundColor = "black";
// div.style.color = "#f00";
// div.style.fontSize = "25px";
// div.style.fontWeight = "bold";
// div.style.borderRadius = "50%";
// div.style.display = "flex";
// div.style.justifyContent = "center";
// div.style.alignItems = "center";
// div.style.margin = "100px auto";
// let counter = setInterval(decrement, 500);
// function decrement() {
//     div.innerHTML-=1;
//     if (div.innerHTML<=0) {
//         clearInterval(counter);
//     }
// }
// ===========================================================================================
// EX4
// let div = document.querySelector("div");
// div.style.width = "100px";
// div.style.height = "100px";
// div.style.backgroundColor = "black";
// div.style.color = "#f00";
// div.style.fontSize = "25px";
// div.style.fontWeight = "bold";
// div.style.borderRadius = "50%";
// div.style.display = "flex";
// div.style.justifyContent = "center";
// div.style.alignItems = "center";
// div.style.margin = "100px auto";
// let counter = setInterval(decrement, 500);

// function decrement() {
//     div.innerHTML -= 1;
//     if (div.innerHTML <= 0) {
//         location.href = "https://elzero.org/";
//     }
// }
// ================================================================================
// EX5 : 
// let div = document.querySelector("div");
// div.style.width = "100px";
// div.style.height = "100px";
// div.style.backgroundColor = "black";
// div.style.color = "#f00";
// div.style.fontSize = "25px";
// div.style.fontWeight = "bold";
// div.style.borderRadius = "50%";
// div.style.display = "flex";
// div.style.justifyContent = "center";
// div.style.alignItems = "center";
// div.style.margin = "100px auto";

// let counter = setInterval(decrement, 500);

// function decrement() {
//     div.innerHTML -= 1;
//     if (div.innerHTML <= 0) {
//         clearInterval(counter);
//     }
//     if (div.innerHTML == 5) {
//         window.open("https://elzero.org/", "_blank", "width=400,height=500,top=10,left = 1000")
//     }
// }
// ==================================================================================================
// Assignment BOM from 111 to 114
//  EX1 : 
 //  Select 1 fontFamily
//  let slect1 = document.getElementById("font");

//  slect1.onchange = function () {
//      localStorage.setItem("font", slect1.value);
//      document.body.style.fontFamily = slect1.options[localStorage.getItem("font")].textContent;
//  }
//  if (localStorage.getItem("font")) {
//      slect1.options[localStorage.getItem("font")].selected = true;
//      document.body.style.fontFamily = font.options[localStorage.getItem("font")].textContent;
//  }
//  //  Select 2 Color
//  let slect2 = document.getElementById("color");
//  slect2.onchange = function () {
//      localStorage.setItem("color", slect2.value);
//      document.body.style.backgroundColor = slect2.options[localStorage.getItem("color")].textContent;
//  }
//  if (localStorage.getItem("color")) {
//      slect2.options[localStorage.getItem("color")].selected = true;
//      document.body.style.backgroundColor = slect2.options[localStorage.getItem("color")].textContent;
//  }
//  // Select 3 FontSize
//  let slect3 = document.getElementById("size");
//  slect3.onchange = function () {
//      localStorage.setItem("size", slect3.value);
//      document.body.style.fontSize = slect3.options[localStorage.getItem("size")].textContent + "px";
//  }
//  if (localStorage.getItem("size")) {
//      slect3.options[localStorage.getItem("size")].selected = true;
//      document.body.style.fontSize = slect3.options[localStorage.getItem("size")].textContent + "px";
//  }
// =======================================================
// EX2
// let inpText = document.forms[0];

// function selection(elm) {
//     if (sessionStorage.getItem(elm)) {
//         inpText.children[elm].value = sessionStorage.getItem(elm)
//     }
//     inpText.children[elm].onchange = () => {

//         sessionStorage.setItem(elm, inpText.children[elm].value);
//     }

// }
// for (let i = 0; i < inpText.length; i++) {
//     selection(i);

// }
