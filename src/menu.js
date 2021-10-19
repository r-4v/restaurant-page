import './menustyle.css';
import cheems_bread from './cheems/cheems_bread.png';
import cheems_moon from    './cheems/cheems_moon.png';
import cheemsmain from './cheems/cheemsmain.png';
import miku_cheems from './cheems/miku_cheems.png';
import sir_cheems from './cheems/sir_cheems.png';
let menuDiv = document.createElement('div');
let item1Div = document.createElement('div');
let item2Div = document.createElement('div');;
let item3Div =document.createElement('div');
let item4Div = document.createElement('div')
let item5Div = document.createElement('div');
let cheemsContainer = document.createElement('div');
cheemsContainer.setAttribute('id','cheems-container')
menuDiv.setAttribute('id',"menu-div");

item1Div.setAttribute('id','item1');
item2Div.setAttribute('id','item2');
item3Div.setAttribute('id','item3');
item4Div.setAttribute('id','item4');
item5Div.setAttribute('id','item5');

let item1Pic = new Image();
item1Pic.src = cheems_bread;
item1Pic.classList.add("image");
let item2Pic = new Image();
item2Pic.src = cheems_moon;
//let item2Pic = document.createElement('img');
//item2Pic.setAttribute('id','item2pic');
item2Pic.classList.add("image");
let item3Pic = new Image();
item3Pic.src = cheemsmain;
item3Pic.classList.add("image");
let item4Pic = new Image();
item4Pic.src = miku_cheems;
item4Pic.classList.add("image");
let item5Pic = new Image();
item5Pic.classList.add("image");
item5Pic.src = sir_cheems;

let item1Text = document.createElement('h4');
item1Text.innerText = "cheems bread";
let item2Text = document.createElement('h4');
item2Text.innerText = "Doge to the moon";
let item3Text = document.createElement('h4');
item3Text.innerText = "Cheems borgir";
let item4Text= document.createElement('h4');
item4Text.innerText = "Miku Cheems";
let item5Text = document.createElement('h4');
item5Text.innerText="Sir cheems";

item1Div.appendChild(item1Pic);
item1Div.appendChild(item1Text);
item2Div.appendChild(item2Pic);
item2Div.appendChild(item2Text);
item3Div.appendChild(item3Pic);
item3Div.appendChild(item3Text);
item4Div.appendChild(item4Pic);
item4Div.appendChild(item4Text);
item5Div.appendChild(item5Pic);
item5Div.appendChild(item5Text);



cheemsContainer.appendChild(item1Div);
cheemsContainer.appendChild(item2Div);
cheemsContainer.appendChild(item3Div);
cheemsContainer.appendChild(item4Div);
cheemsContainer.appendChild(item5Div);

menuDiv.appendChild(cheemsContainer);

export{menuDiv};
