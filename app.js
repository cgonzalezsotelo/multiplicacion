"use strict";

function askForLimitNumber() {
  const limit = Number.parseInt(prompt("Ingrese el número"));
  if (limit >= 1 && limit <= 20) {
    return limit;
  } else {
    console.log("número fuera del rango");
  }
}

const limitNumber = askForLimitNumber();

console.log(limitNumber);

for (let i = 1; i <= limitNumber; i++) {
  console.log(`${i} x ${limitNumber} = ${i * limitNumber}`);
}

for (let factoryNumber = 1; factoryNumber <= limitNumber; factoryNumber++) {
  let result = 1;
  for (let multiplier = 1; multiplier <= factoryNumber; multiplier++) {
    result = result * multiplier;
  }
  console.log(`El factorial de ${factoryNumber} es: ${result}`);
}