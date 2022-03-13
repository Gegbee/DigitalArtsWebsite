"use strict";

const mobileButton = document.getElementById("mobile-links-show");
const mobileLinks = document.getElementById("mobile-links");

const readMore = document.getElementById("read-more");

let showingLinks = false;

mobileButton.addEventListener("click", () => {
 	showingLinks = !showingLinks;
   if (showingLinks) {
      mobileButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 60 60" overflow="visible" stroke="black" stroke-width="10" stroke-linecap="round"><line x2="50" y2="50" /><line x1="50" y2="50" /></svg>';
      mobileLinks.style.opacity = 1;
   } else {
      mobileButton.innerHTML = '<svg viewBox="0 0 60 60" width="50" height="50"><rect y="10" width="45" height="5"></rect><rect y="25" width="45" height="5"></rect><rect y="40" width="45" height="5"></rect></svg>';
      mobileLinks.style.opacity = 0;
   }
});

$(document).ready(() => {resizeReadMore()});
$(document.body).scroll(() => {resizeReadMore()});
$(window).resize(() => {resizeReadMore()});

function resizeReadMore() {
   const a = document.body.scrollTop;
   const b = document.body.scrollHeight - document.body.clientHeight;
   const c = a / b;
   console.log(document.body.clientWidth);
	if (document.body.clientWidth > 992 || b === 0 || c > 0.4) {
      // readMore.style.display = "none";
      readMore.style.opacity = 0;
   } else {
      // readMore.style.display = "inherit";
      readMore.style.opacity = 1;
   }
}
