
function multiplicar(expr) {
  let numeros = expr.split('*').map(Number);
  return numeros.reduce((acc, val) => acc * val, 1);
}