"use strict";

const mobileContainer = document.getElementById("mobile-container");
const mobileButton = document.getElementById("mobile-links-show");
const mobileLinks = document.getElementById("mobile-links");

const readMore = document.getElementById("read-more");

const parallelogram = document.querySelector(".parallelogram");

let showingLinks = false;

// mobileButton.addEventListener("click", () => {
// 	showingLinks = !showingLinks;
	
// 	if (showingLinks) {
// 		mobileButton.innerHTML = "✕";
// 		mobileLinks.style.opacity = 1;
// 	} else {
// 		mobileButton.innerHTML = "☰";
// 		mobileLinks.style.opacity = 0;
// 	}
// });


// Parellogram resize was changed to just adjusting by using viewport-height units
// function resizeParallelogram() {
// 	const rotation = 3.5 - window.innerWidth / 1500;
// 	const translation = window.innerWidth / 500 + 15;

// 	parallelogram.style = `transform: skew(0deg, ${rotation}deg) translate(0vh, ${translation}vh);`;
// }

// window.addEventListener("load", () => resizeParallelogram());
// window.addEventListener("resize", () => resizeParallelogram());

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
