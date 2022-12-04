//Formulas:
//Men:   (10 * W) + (6.25 * H ) - (5 * A) + 5
//Women: (10 * W) + (6.25 * H ) - (5 * A) - 161
//Variables: W=weight in kilograms, H=height in centimeters, A=age in years
/* var peso = prompt("Cual es tu peso");
let genero = prompt("Tu genero");
let actividad = prompt("del 1 al 2");
let altura = prompt("altura");
let edad = prompt("edad");
/*
var edad = document.querySelector("#edad").value
let peso = document.querySelector("#peso").value
let altura = document.querySelector("#altura").value
let genero = document.querySelector("#genero").value
let actividad = document.querySelector("#actividad").value
*/
let comidas = prompt("Cuantas comidas por dia")
var boton = document.querySelector('#enviar');
function prueba() {
   sacarData
}
boton.addEventListener('click', calculos);
function sacarData() {
  let edad = document.querySelector("#edad").value;
  console.log(edad);
  let peso = document.querySelector("#peso").value;
  console.log(peso);
  let altura = document.querySelector("#altura").value;
  console.log(altura);
  let genero = document.querySelector("#genero").value;
  console.log(genero);
  let actividad = document.querySelector("#actividad").value;
  console.log(actividad );
  let resultados = document.querySelector("#resulta");
  if (genero == "1") {
  let bmr = (((10*peso)+(6.25*altura)-(5*edad)+5)*actividad);
  resultados.innerText = "Tu gasto calorico es: " + bmr;
  return bmr;
  test
  }
  else {
  resultados.innerText = (((10*peso)+(6.25*altura)-(5*edad)-161)*actividad);
  return (((10*peso)+(6.25*altura)-(5*edad)-161)*actividad);
  test
  }
}
var bmr
function calculos() {
  let edad = document.querySelector("#edad").value;
  console.log(edad);
  let peso = document.querySelector("#peso").value;
  console.log(peso);
  let altura = document.querySelector("#altura").value;
  console.log(altura);
  let genero = document.querySelector("#genero").value;
  console.log(genero);
  let actividad = document.querySelector("#actividad").value;
  console.log(actividad );
  let resultados = document.querySelector("#resulta");
  if (genero == "1") {
  bmr = (((10*peso)+(6.25*altura)-(5*edad)+5)*actividad);
  resultados.innerText = "Tu gasto calorico es: " + bmr;
  test()
  return (((10*peso)+(6.25*altura)-(5*edad)+5)*actividad);
  }
  else {
  resultados.innerText = "Tu gasto calorico es: " + (((10*peso)+(6.25*altura)-(5*edad)-161)*actividad);
  bmr = (((10*peso)+(6.25*altura)-(5*edad)-161)*actividad);
  test()
  }
}
function test() {
  if (bmr > 2200) {
    let ultima = document.querySelector("#resultado");
    let recomendacion = bmr - 400
    let porciones = recomendacion / comidas
    pCreado = document.createElement("p")
    ultima.appendChild(pCreado)
    pCreado.className = "text-center";
    pCreado.innerText = `Tendras que ser algo meticuloso, calorias a comer recomendamos:  ${recomendacion}. Sugerimos un plan con ${comidas} y ${porciones} calorias por comidas`;
  }
  else {
    let ultima = document.querySelector("#resultado");
    let recomendacion = bmr - 400
    let porciones = recomendacion / comidas
    pCreado = document.createElement("p")
    ultima.appendChild(pCreado)
    pCreado.className = "text-center";
    pCreado.innerText = `Tendras que ser algo meticuloso, calorias a comer recomendamos:  ${recomendacion}. Sugerimos un plan con ${comidas} y ${porciones} calorias por comidas`;
  }
}
//correr la funcion
//
//
//
