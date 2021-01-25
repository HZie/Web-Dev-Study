/*

// How To Touch HTML using Java Script
// console.log(document)
// DOM (Document Object Model)
const title = document.getElementById("title");
console.log(title);
title.innerHTML="Hello!  It's JS!";
// console.dir(title); 로 내부 attribute를 알 수 있음
title.style.color="white";
document.title = "I own you now";


// events and event handler
function handleClick(){
    title.style.color = "blue";
}

title.addEventListener("click", handleClick);

*/


/*
const title = document.querySelector("#title");
const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function handleClick(){
    const currColor = title.style.color;

    if(currColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    }
    else{
        title.style.color = BASE_COLOR;
    }
}

function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("mouseenter", handleClick);
}

init();
*/

const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";

function handleClick(){
    title.classList.toggle(CLICKED_CLASS);
    /*
    const hasClass = title.classList.contains(CLICKED_CLASS);

    if(hasClass){
        title.classList.remove(CLICKED_CLASS);
    }
    else{
        title.classList.add(CLICKED_CLASS);
    }
    */
}

function init(){
    title.addEventListener("click", handleClick);
}

init();