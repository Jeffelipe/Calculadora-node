function dividir(expr) {
  let numeros = expr.split('/').map(Number);
  return numeros.reduce((acc, val) => acc / val);
}
function potenciar(expr) {
  let numeros = expr.split('^').map(Number);
  return numeros.reduce((acc, val) => Math.pow(acc, val));
}
function media(expr) {
  let numeros = expr.split('media').map(Number);
  let soma = numeros.reduce((acc, val) => acc + val, 0);
  return soma / numeros.length;
}