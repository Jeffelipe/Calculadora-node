function dividir(expr) {
  let numeros = expr.split('/').map(Number);
  return numeros.reduce((acc, val) => acc / val);
}
function potenciar(expr) {
  let numeros = expr.split('^').map(Number);
  return numeros.reduce((acc, val) => Math.pow(acc, val));
}