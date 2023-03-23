"use strict";

//Scroll Event
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  var scrollPosition = window.scrollY;
  if (scrollPosition > 240) {
    header.classList.add("header-scrolled");
  } else {
    header.classList.remove("header-scrolled");
  }
});

// Buttons
const corsaBtn = document.querySelector(".corsa-btn");
const audiBtn = document.querySelector(".audi-btn");
const bmwBtn = document.querySelector(".bmw-btn");
const vwBtn = document.querySelector(".vw-btn");
const fiatBtn = document.querySelector(".fiat-btn");
const volvoBtn = document.querySelector(".volvo-btn");

// Image
const carImage = document.querySelector(".model-car-img");

// Spans
const price = document.querySelector(".span-price");
const mark = document.querySelector(".span-mark");
const model = document.querySelector(".span-model");
const year = document.querySelector(".span-year");
const doors = document.querySelector(".span-doors");
const ac = document.querySelector(".span-ac");
const transmission = document.querySelector(".span-transmission");
const fuel = document.querySelector(".span-fuel");

// Objects
const corsa = {
  price: "£45",
  mark: "Corsa",
  model: "Corsa-e",
  year: "2023",
  doors: "4/5",
  ac: "Yes",
  transmission: "Auto",
  fuel: "Electric",
  image: "images/corsa-e.png",
};

const audi = {
  price: "£32",
  mark: "Audi",
  model: "A1",
  year: "2020",
  doors: "2/3",
  ac: "Yes",
  transmission: "Auto",
  fuel: "Petrol",
  image: "images/audi-a1.png",
};

const bmw = {
  price: "£78",
  mark: "BMW",
  model: "M2",
  year: "2021",
  doors: "2/3",
  ac: "Yes",
  transmission: "Auto",
  fuel: "Diesel",
  image: "images/bmw-m2.png",
};

const vw = {
  price: "£22",
  mark: "VW",
  model: "Polo",
  year: "2019",
  doors: "4/5",
  ac: "Yes",
  transmission: "Manual",
  fuel: "Diesel",
  image: "images/vw-polo.png",
};

const fiat = {
  price: "£17",
  mark: "Fiat",
  model: "500",
  year: "2021",
  doors: "2/3",
  ac: "Yes",
  transmission: "Auto",
  fuel: "Petrol",
  image: "images/fiat-500.png",
};

const volvo = {
  price: "£34",
  mark: "Volvo",
  model: "XC90",
  year: "2022",
  doors: "4/5",
  ac: "Yes",
  transmission: "Manual",
  fuel: "Petrol",
  image: "images/volvo-xc90.png",
};

// Actions
corsaBtn.addEventListener("click", function () {
  // Buttons
  corsaBtn.style.backgroundColor = "#fc2947";
  corsaBtn.style.color = "white";
  audiBtn.style.backgroundColor = "rgb(232, 232, 232)";
  audiBtn.style.color = "black";
  bmwBtn.style.backgroundColor = "rgb(232, 232, 232)";
  bmwBtn.style.color = "black";
  vwBtn.style.backgroundColor = "rgb(232, 232, 232)";
  vwBtn.style.color = "black";
  fiatBtn.style.backgroundColor = "rgb(232, 232, 232)";
  fiatBtn.style.color = "black";
  volvoBtn.style.backgroundColor = "rgb(232, 232, 232)";
  volvoBtn.style.color = "black";

  // Table
  price.textContent = corsa.price;
  mark.textContent = corsa.mark;
  model.textContent = corsa.model;
  year.textContent = corsa.year;
  doors.textContent = corsa.doors;
  ac.textContent = corsa.ac;
  transmission.textContent = corsa.transmission;
  fuel.textContent = corsa.fuel;
  carImage.src = corsa.image;
});

audiBtn.addEventListener("click", function () {
  // Buttons
  corsaBtn.style.backgroundColor = "rgb(232, 232, 232)";
  corsaBtn.style.color = "black";
  audiBtn.style.backgroundColor = "#fc2947";
  audiBtn.style.color = "white";
  bmwBtn.style.backgroundColor = "rgb(232, 232, 232)";
  bmwBtn.style.color = "black";
  vwBtn.style.backgroundColor = "rgb(232, 232, 232)";
  vwBtn.style.color = "black";
  fiatBtn.style.backgroundColor = "rgb(232, 232, 232)";
  fiatBtn.style.color = "black";
  volvoBtn.style.backgroundColor = "rgb(232, 232, 232)";
  volvoBtn.style.color = "black";

  // Table
  price.textContent = audi.price;
  mark.textContent = audi.mark;
  model.textContent = audi.model;
  year.textContent = audi.year;
  doors.textContent = audi.doors;
  ac.textContent = audi.ac;
  transmission.textContent = audi.transmission;
  fuel.textContent = audi.fuel;
  carImage.src = audi.image;
});

bmwBtn.addEventListener("click", function () {
  // Buttons
  corsaBtn.style.backgroundColor = "rgb(232, 232, 232)";
  corsaBtn.style.color = "black";
  audiBtn.style.backgroundColor = "rgb(232, 232, 232)";
  audiBtn.style.color = "black";
  bmwBtn.style.backgroundColor = "#fc2947";
  bmwBtn.style.color = "white";
  vwBtn.style.backgroundColor = "rgb(232, 232, 232)";
  vwBtn.style.color = "black";
  fiatBtn.style.backgroundColor = "rgb(232, 232, 232)";
  fiatBtn.style.color = "black";
  volvoBtn.style.backgroundColor = "rgb(232, 232, 232)";
  volvoBtn.style.color = "black";

  // Table
  price.textContent = bmw.price;
  mark.textContent = bmw.mark;
  model.textContent = bmw.model;
  year.textContent = bmw.year;
  doors.textContent = bmw.doors;
  ac.textContent = bmw.ac;
  transmission.textContent = bmw.transmission;
  fuel.textContent = bmw.fuel;
  carImage.src = bmw.image;
});

vwBtn.addEventListener("click", function () {
  // Buttons
  corsaBtn.style.backgroundColor = "rgb(232, 232, 232)";
  corsaBtn.style.color = "black";
  audiBtn.style.backgroundColor = "rgb(232, 232, 232)";
  audiBtn.style.color = "black";
  bmwBtn.style.backgroundColor = "rgb(232, 232, 232)";
  bmwBtn.style.color = "black";
  vwBtn.style.backgroundColor = "#fc2947";
  vwBtn.style.color = "white";
  fiatBtn.style.backgroundColor = "rgb(232, 232, 232)";
  fiatBtn.style.color = "black";
  volvoBtn.style.backgroundColor = "rgb(232, 232, 232)";
  volvoBtn.style.color = "black";

  // Table
  price.textContent = vw.price;
  mark.textContent = vw.mark;
  model.textContent = vw.model;
  year.textContent = vw.year;
  doors.textContent = vw.doors;
  ac.textContent = vw.ac;
  transmission.textContent = vw.transmission;
  fuel.textContent = vw.fuel;
  carImage.src = vw.image;
});

fiatBtn.addEventListener("click", function () {
  // Buttons
  corsaBtn.style.backgroundColor = "rgb(232, 232, 232)";
  corsaBtn.style.color = "black";
  audiBtn.style.backgroundColor = "rgb(232, 232, 232)";
  audiBtn.style.color = "black";
  bmwBtn.style.backgroundColor = "rgb(232, 232, 232)";
  bmwBtn.style.color = "black";
  vwBtn.style.backgroundColor = "rgb(232, 232, 232)";
  vwBtn.style.color = "black";
  fiatBtn.style.backgroundColor = "#fc2947";
  fiatBtn.style.color = "white";
  volvoBtn.style.backgroundColor = "rgb(232, 232, 232)";
  volvoBtn.style.color = "black";

  // Table
  price.textContent = fiat.price;
  mark.textContent = fiat.mark;
  model.textContent = fiat.model;
  year.textContent = fiat.year;
  doors.textContent = fiat.doors;
  ac.textContent = fiat.ac;
  transmission.textContent = fiat.transmission;
  fuel.textContent = fiat.fuel;
  carImage.src = fiat.image;
});

volvoBtn.addEventListener("click", function () {
  // Buttons
  corsaBtn.style.backgroundColor = "rgb(232, 232, 232)";
  corsaBtn.style.color = "black";
  audiBtn.style.backgroundColor = "rgb(232, 232, 232)";
  audiBtn.style.color = "black";
  bmwBtn.style.backgroundColor = "rgb(232, 232, 232)";
  bmwBtn.style.color = "black";
  vwBtn.style.backgroundColor = "rgb(232, 232, 232)";
  vwBtn.style.color = "black";
  fiatBtn.style.backgroundColor = "rgb(232, 232, 232)";
  fiatBtn.style.color = "black";
  volvoBtn.style.backgroundColor = "#fc2947";
  volvoBtn.style.color = "white";

  // Table
  price.textContent = volvo.price;
  mark.textContent = volvo.mark;
  model.textContent = volvo.model;
  year.textContent = volvo.year;
  doors.textContent = volvo.doors;
  ac.textContent = volvo.ac;
  transmission.textContent = volvo.transmission;
  fuel.textContent = fiat.fuel;
  carImage.src = volvo.image;
});
