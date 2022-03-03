"use strict";

const mobileContainer = document.getElementById("mobile-container");
const mobileButton = document.getElementById("mobile-links-show");
const mobileLinks = document.getElementById("mobile-links");

const readMore = document.getElementById("read-more");

const parallelogram = document.querySelector(".parallelogram");

let showingLinks = false;

mobileButton.addEventListener("click", () => {
	showingLinks = !showingLinks;
	
	if (showingLinks) {
		mobileButton.innerHTML = "✕";
		mobileLinks.style.opacity = 1;
	} else {
		mobileButton.innerHTML = "☰";
		mobileLinks.style.opacity = 0;
	}
});

function resizeParallelogram() {
	const rotation = 3.5 - window.innerWidth / 1500;
	const translation = window.innerWidth / 500 + 15;

	parallelogram.style = `transform: skew(0deg, ${rotation}deg) translate(0vh, ${translation}vh);`;
}

window.addEventListener("load", () => resizeParallelogram());
window.addEventListener("resize", () => resizeParallelogram());

document.addEventListener("wheel", (event) => {
	if (event.deltaY > 0) {
		readMore.style.opacity = 0;
	}
});
