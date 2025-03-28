const minusBtn = document.getElementById("minus");
const plusBtn = document.getElementById("plus");
const imageCarrousel = document.getElementById("imageCarrousel");
const lightBtn = document.getElementById("lightBtn");
const icon = document.getElementById("icon");
const h1 = document.querySelector("h1");

lightBtn.addEventListener("click", () => {
	minusBtn.classList.toggle("light");
	plusBtn.classList.toggle("light");
	imageCarrousel.classList.toggle("image-light");
	lightBtn.classList.toggle("light");
    h1.classList.toggle("heading-one");
	document.body.classList.toggle("light-body");
    icon.classList.toggle("fa-moon");
    icon.classList.toggle("fa-shake");
    icon.classList.toggle("fa-sun");
    icon.classList.toggle("fa-spin");
});


let globalData;

let i = 0;

function changeImgMinus() {
	if (i < 1) {
		i = globalData.length - 1;
	} else {
		i--;
	}
	imageCarrousel.setAttribute("src", globalData[i].image);
	imageCarrousel.setAttribute("alt", globalData[i].alt);
}

function changeImgPlus() {
	if (i < globalData.length - 1) {
		i++;
	} else {
		i = 0;
	}
	imageCarrousel.setAttribute("src", globalData[i].image);
	imageCarrousel.setAttribute("alt", globalData[i].alt);
}

fetch("./data.json")
	.then((response) => {
		if (!response.ok) {
			throw new Error("erreur" + response.ok);
		}
		return response.json();
	})
	.then((data) => {
		globalData = data;
	});

minusBtn.addEventListener("click", changeImgMinus);
plusBtn.addEventListener("click", changeImgPlus);
