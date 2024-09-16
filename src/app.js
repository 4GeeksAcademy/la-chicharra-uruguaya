/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  const galletas = ["Cucurucho", "Canasta", "Sundae"]; // 3

  const sabores = [
    "Chocolate",
    "Mantecado",
    "Dulce de leche",
    "Frutilla",
    "Menta Granizado", // 9
    "Pistacho",
    "Limon",
    "Sambayon",
    "Pororo"
  ];

  const toppings = ["Chispitas", "M&Ms", "Rocher", "Salsa", "Gomitas"]; // 5

  let cantidadDeHelados = 0;
  let menu = [];

  galletas.forEach(envase => {
    sabores.forEach(sabor => {
      toppings.forEach(topping => {
        cantidadDeHelados++;
        menu.push(
          `${cantidadDeHelados} ${envase} ${sabor} ${topping} chef: Natali`
        );
      });
    });
  });

  let menuHtml = menu.map(helado => {
    return '<li class="alert alert-warning mt-2">' + helado + "</li>";
  });
  let iceCreamItem = document.getElementById("ice-cream-list");
  iceCreamItem.innerHTML = menuHtml.join(" ");
};
