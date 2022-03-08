//10.Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
const valorCusto = 200;
let totalCusto = valorCusto * 120 / 100;
const valorVenda = 250;
let totalVendas = 1000;

if(valorCusto < 0 || valorVenda < 0) {
    console.log("Os valores informados não podem ser negativos.");
} else {
    let lucroVendas = (valorVenda - totalCusto) * totalVendas;
    console.log("O lucro total foi de " + lucroVendas + "reais.")
}
