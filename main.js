'use strict';

let liList = document.getElementsByTagName('li');

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function callbackFunc(){
    for(let i = 0; i<=liList.length; i++){
        if(isElementInViewport(liList[i])){
            liList[i].classList.add('visible');
        }
    }
}

window.addEventListener("load", callbackFunc);
window.addEventListener("resize", callbackFunc);
window.addEventListener("scroll", callbackFunc);