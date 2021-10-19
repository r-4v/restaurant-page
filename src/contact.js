import './contactstyle.css';

let contactDiv = document.createElement('div');
contactDiv.setAttribute('id',"contact-div");
let contactText = document.createElement('div');
contactText.setAttribute('id',"contact-text");
contactText.innerText = "um hemlo! such progress in odin, much wow!";
let contactInfo = document.createElement('div');
contactInfo.setAttribute('id',"contact-info");
contactInfo.innerText = "tweet @ my dad @elonmusk on twitter"
contactDiv.appendChild(contactText);
contactDiv.appendChild(contactInfo);


export{contactDiv};