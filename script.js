const URL =
"https://iskarr.github.io/austindonovan.github.io/api/business.json";

let cards = document.querySelector("div.cards");
let para = document.createElement("p");

fetch(URL)
.then((response) => response.json())
.then((jsObject) => {
let business = jsObject.business;

for (let i = 0; i < business.length; i++) {
//Creates section and cards
let card = document.createElement("section");
card.className = "card";
//Creates Title
let h2 = document.createElement("h2");
h2.textContent = business[i].name;
card.appendChild(h2);
document.querySelector("div.cards").appendChild(card);

let businessImg = document.createElement("img")
businessImg.src = business[i].imageurl;
card.appendChild(businessImg);
document.querySelector("div.cards").appendChild(card);

let address = document.createElement('p');
address.textContent = business[i].address;
card.appendChild(address);
document.querySelector('div.cards').appendChild(card);

let des = document.createElement("p");
des.textContent = business[i].description;
card.appendChild(des);
document.querySelector('div.cards').appendChild(card);
}
});