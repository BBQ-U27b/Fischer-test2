

const readline = require('node:readline');
 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
 
function plus(zahl1, zahl2) {
  return zahl1 + zahl2;
}
 
function minus(zahl1, zahl2) {
  return zahl1 - zahl2;
}
 
function multiply(zahl1, zahl2) {
  return zahl1 * zahl2;
}
 
function divide(zahl1, zahl2) {
  return zahl1 / zahl2;
}
 
function init() {
  rl.question(`Was wollen Sie machen?
  1. Plus
  2. Minus
  3. Multiply
  4. Divide
  `, value => {
    const operation = parseInt(value);
 
    if (!operation) {
      console.log('Bitte gib eine Gültige Zahl ein. :)');
    }
 
    rl.question('Was ist Ihre erste Zahl?', zahl1 => {
      rl.question('Was ist Ihre zweite Zahl?', zahl2 => {
 
        const operationZahl1 = parseInt(zahl1);
        const operationZahl2 = parseInt(zahl2);
 
        let ergebnis = 0;
 
        switch (operation) {
          case 1:
            ergebnis = plus(operationZahl1, operationZahl2);
            break;
          case 2:
            ergebnis = minus(operationZahl1, operationZahl2);
            break;
          case 3:
            ergebnis = multiply(operationZahl1, operationZahl2);
            break;
          case 4:
            ergebnis = divide(operationZahl1, operationZahl2);
          default:
            console.log('Bitte gib eine Gültige Zahl ein. :)');
            break;
        }
 
        console.log(ergebnis);
      })
    })
  });
 
}
 
init();




