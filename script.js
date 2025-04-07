// 1️⃣ Cálculo de Área de um Retângulo
const largura = Number(prompt("Digite a largura do retângulo (em metros):"));
const altura = Number(prompt("Digite a altura do retângulo (em metros):"));
const area = largura * altura;
console.log("A área do retângulo é:", area, "m²");

// 2️⃣ Média de Três Notas
const nota1 = Number(prompt("Digite a primeira nota:"));
const nota2 = Number(prompt("Digite a segunda nota:"));
const nota3 = Number(prompt("Digite a terceira nota:"));
const media = (nota1 + nota2 + nota3) / 3;
console.log("A média das notas é:", media.toFixed(2));

// 3️⃣ Cálculo de Troco
const valorCompra = Number(prompt("Digite o valor total da compra:"));
const valorPago = Number(prompt("Digite o valor pago:"));
const troco = valorPago - valorCompra;
console.log("O troco é: R$", troco.toFixed(2));
