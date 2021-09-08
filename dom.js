// Assignment javascript from 086 to 93

// EX1
// let myElement = document.getElementById("elzero");
// ========================================
// let myElement = document.querySelector(".element");
// let myElement = document.querySelector("#elzero");
// let myElement = document.querySelector("[name='js']");
// let myElement = document.querySelector("div");
// ===========================================
// let myElement = document.querySelectorAll(".element")[0];
// let myElement = document.querySelectorAll("div")[0];
// let myElement = document.querySelectorAll("#elzero")[0];
// let myElement = document.querySelectorAll("[name='js']")[0];
// ==============================================
// let myElement = document.getElementsByClassName("element")[0];
// ===============================================
// let myElement = document.getElementsByTagName("div")[0];
// =======================================================
// let myElement = document.body.firstElementChild;
// ========================================================
// let myElement = document.body.childNodes[1];
// ========================================================
// let myElement = document.getElementsByName("js")[0];
// =====================================================
// let myElement = document.getRootNode().childNodes[1].lastChild.firstElementChild;

// console.log(myElement);
// ===============================================================================================
// EX 2:
// let divs = document.querySelectorAll("div");
// // Loop In DIVs Element
// divs.forEach((element) => {
//   // Set Source Attribute For Elements
//   element.firstElementChild.setAttribute(
//     "src",
//     "https://elzero.org/wp-content/themes/elzero/imgs/logo.png"
//   );
//   // Set Alternate Attribute For Elements
//   element.firstElementChild.alt = "Elzero Logo";
// });
// ================================================================================================
// EX 3 :
// let input = document.querySelector("input"),
//   btnUp = document.getElementById("btn1"),
//   btnDown = document.getElementById("btn2"),
//   output = document.querySelector(".result");

// input.oninput = function () {
//   let value = input.value;
//   output.innerHTML = `{${value}} USD Dollar = {${value * 15.7}} Egyptian Pound`;
// };
// ================================================================================================
// EX 5 :
// let img = document.querySelectorAll("img");
// img.forEach(element=>{
//     if (element.hasAttribute("alt")) {
//         element.setAttribute("alt","Old")
//     } else {
//         element.setAttribute("alt","Elzero New")

//     }
// })
// ================================================================================================
// EX 6 :
let form = document.forms[0];
let inputNum = document.forms[0].children[0];
let inputTxt = document.forms[0].children[1];
let inputElem = document.forms[0].children[2];
let inputBtn = document.forms[0].children[3];
let inputResult = document.forms[0].children[4];

window.onload = function () {
  inputNum.focus();
};
form.onsubmit = (e) => {
  e.preventDefault();
};
inputBtn.onclick = () => {
  if (inputNum.value || inputTxt.value !== "") {
    for (let i = 0; i < Number(inputNum.value); i++) {
      let div = document.createElement(inputElem.value);
      let txt = document.createTextNode(inputTxt.value);
      div.style.background = "red";
      div.style.width = "calc(94%/3)";
      div.style.margin = "1%";
      div.style.color = " #fff";
      div.style.padding = "10px";
      div.style.textAlign = "center";

      div.appendChild(txt);
      inputResult.appendChild(div);
    }
    inputNum.value = "";
    inputTxt.value = "";
  }
};
