const h1 = document.querySelector("h1");
const form = document.querySelector("#form");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btncalcular");
const pResult = document.querySelector("#result");

form.addEventListener("submit", sumarValores);

function sumarValores(event) {
  console.log({ event });
  event.preventDefault();

  const valor1 = parseFloat(input1.value);
  const valor2 = parseFloat(input2.value);

  if (!isNaN(valor1) && !isNaN(valor2)) {
    const suma = valor1 + valor2;
    pResult.innerText = "El resultado es: " + suma;

    input1.value = " ";
    input2.value = " ";

    btn.style.backgroundColor = "green";
  } else {
    input1.value = " ";
    input2.value = " ";
    pResult.innerText = "CARAJO!!! INGRESE NUMEROS SOLEMENTE";
    btn.style.backgroundColor = "red";
  }
}
