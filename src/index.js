import "./indexstyle.css";
import { homeDiv } from "./home.js";
import {menuDiv} from "./menu.js";
import {contactDiv} from "./contact.js";
let body = document.querySelector("body");
let blurDiv = document.createElement("div");
let contentDiv = document.createElement("div");
let headerDiv = document.createElement("header");
let headerTextDiv = document.createElement("div");
let buttonsHolderDiv = document.createElement("div");
let homeButton = document.createElement("button");
let menuButton = document.createElement("button");
let contactButton = document.createElement("button");
let infoDiv = document.createElement("div");

homeButton.addEventListener("click", renderHome);
menuButton.addEventListener("click", renderMenu);
contactButton.addEventListener("click", renderContact);

function renderHome(e) {
  console.log("home");

  while (infoDiv.firstChild) {
    infoDiv.firstChild.remove();
  }
  infoDiv.appendChild(homeDiv);
}
function renderMenu(e) {
  while (infoDiv.firstChild) {
    infoDiv.firstChild.remove();
  }
  infoDiv.appendChild(menuDiv);
  console.log("menu");
}
function renderContact(e) {
  while (infoDiv.firstChild) {
    infoDiv.firstChild.remove();
  }
  infoDiv.appendChild(contactDiv);

  console.log("contact");
}

contentDiv.setAttribute("id", "content-div");
blurDiv.setAttribute("id", "blur-div");
headerTextDiv.setAttribute("id", "header-text");
buttonsHolderDiv.setAttribute("id", "buttons-div");
headerTextDiv.innerText = "re_straw_rant";
homeButton.setAttribute("id", "home");
menuButton.setAttribute("id", "menu");
contactButton.setAttribute("id", "contact");
infoDiv.setAttribute("id", "info-div");
homeButton.innerText = "Home";
menuButton.innerText = "Menu";
contactButton.innerText = "Contact";
body.appendChild(blurDiv);
blurDiv.appendChild(contentDiv);
contentDiv.appendChild(headerDiv);
headerDiv.appendChild(headerTextDiv);
headerDiv.appendChild(buttonsHolderDiv);
buttonsHolderDiv.appendChild(homeButton);
buttonsHolderDiv.appendChild(menuButton);
buttonsHolderDiv.appendChild(contactButton);
contentDiv.appendChild(infoDiv);

//contentDiv.appendChild(testDiv);
//contentDiv.appendChild(test2Div);
//contentDiv.appendChild(test3Div);
//let testDiv = document.createElement('div');
//let test2Div = document.createElement('div');
//let test3Div = document.createElement('div');
//testDiv.setAttribute('id','test-div');
//test2Div.setAttribute('id','test2-div');
//test3Div.setAttribute('id','test3-div');
