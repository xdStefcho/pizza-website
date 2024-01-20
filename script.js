const smallCapricciosa = document.querySelector(".small-capricciosa");
const smallPeperoni = document.querySelector(".small-peperoni");
const mediumCapricciosa = document.querySelector(".medium-capricciosa");
const mediumPeperoni = document.querySelector(".medium-peperoni");
const largeCapricciosa = document.querySelector(".large-capricciosa");
const largePeperoni = document.querySelector(".large-peperoni");
let closeShopping = document.querySelector(".closeShopping");
let total = document.querySelector(".total");
let body = document.querySelector("body");
let openShopping = document.querySelector(".shopping");
const cart = document.querySelector(".cart");



openShopping.addEventListener("click", () => {
    body.classList.add('active');
});

closeShopping.addEventListener("click", () => {
    body.classList.remove('active');
});
