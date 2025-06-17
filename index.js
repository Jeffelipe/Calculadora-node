
function dividir(expr) {
  let numeros = expr.split('/').map(Number);
  return numeros.reduce((acc, val) => acc / val);
}

function potenciar(expr) {
  let numeros = expr.split('^').map(Number);
  return numeros.reduce((acc, val) => Math.pow(acc, val));
}

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

function inserir(valor) {
  const display = document.getElementById('display');
  display.value += valor;
  document.getElementById('resultado').textContent = ''; // limpa resultado anterior
}

function limpar() {
  document.getElementById('display').value = '';
  document.getElementById('resultado').textContent = '';
}

function calcular() {
  const expr = document.getElementById('display').value;

  if (!expr) {
    document.getElementById('resultado').textContent = 'Digite uma expressão!';
    return;
  }

  let resultado;
  try {
    if (expr.includes('media')) {
      resultado = media(expr);
    } else if (expr.includes('+')) {
      resultado = somar(expr);
    } else if (expr.includes('-')) {
      resultado = subtrair(expr);
    } else if (expr.includes('*')) {
      resultado = multiplicar(expr);
    } else if (expr.includes('/')) {
      resultado = dividir(expr);
    } else if (expr.includes('^')) {
      resultado = potenciar(expr);
    } else {
      resultado = 'Operação inválida';
    }
  } catch {
    resultado = 'Erro na expressão';
  }

  document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
}