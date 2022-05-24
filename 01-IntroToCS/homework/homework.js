'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let sumDecimal = 0
  let array = num.split("");

  for (let i = 0; i < array.length; i++) {
    sumDecimal = sumDecimal + array[i] * 2 ** (array.length - 1 - i);
  }
  return sumDecimal;
}

function DecimalABinario(num) {
  // tu codigo aca

  let binario = ""

  while (num > 0) {
    binario = (num % 2) + binario;
    num = Math.floor(num / 2)
  }

  return binario
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}