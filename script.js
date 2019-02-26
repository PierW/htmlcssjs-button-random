// var nome = prompt("Qual'è il tuo nome?");
// var sesso = prompt("Sei maschio o femmina?");
// var element = document.getElementById("data");
//
// element.innerHTML = nome;
//
// function checkSex() {
//   if (sesso == "maschio") {
//     element.style.color = "blue";
//   }
//   else if (sesso == "femmina") {
//     element.style.color = "pink";
//   }
// }
//
// setTimeout(checkSex, 2000);



//TASK1
var element = document.getElementById("button");
var stamp = document.getElementById("data");

var array = [];

function getRandom() {
    return Math.floor(Math.random() * 100) +1;
}
//------------------------------ CON FUNZIONE ANONIMA
element.addEventListener("click", function() {
  var rndValue = getRandom();
  console.log(rndValue + " diviso 2 - RESTO = " + (rndValue%2));

  if (isEven(rndValue)) {
    stamp.style.color = "black";
    stamp.style.background = "red";
  }
  else {
    stamp.style.color = "red";
    stamp.style.background = "black";
  }
  array.push(rndValue);
  stamp.innerHTML += rndValue + " ";
  element.innerHTML =  "Numeri Generati= " + array.length;
});

//--------------------------------------OPPURE CON FUNZIONE NORMALE.
// WARNING: addEventListener non accetta attributi di ingresso.

// function clickButton() {
//   stamp.innerHTML = getRandom();
// }
//
// element.addEventListener("click", clickButton);

//TASK2
function isEven(num) {
  if (num % 2 == 0) {
    return true;
  }
  return false;
}
