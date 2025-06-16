function somar(expr) {
  let numeros = expr.split('+').map(Number);
  return numeros.reduce((acc, val) => acc + val, 0);
}

function subtrair(expr) {
  let numeros = expr.split('-').map(Number);
  return numeros.reduce((acc, val) => acc - val);
}

function multiplicar(expr) {
  let numeros = expr.split('*').map(Number);
  return numeros.reduce((acc, val) => acc * val, 1);
}