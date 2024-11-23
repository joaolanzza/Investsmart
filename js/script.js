
const capitalInicial = document.getElementById("capitalInicial");
const taxaDeJurosMensal = document.getElementById("taxaDeJurosMensal");
const numeroDeMeses = document.getElementById("numeroDeMeses");
 

function calculoRetornoInvestimento(event) {

    event.preventDefault();

    let valorCapitalInicial = parseFloat(capitalInicial.value);
    let valorTaxaDeJurosMensal = parseFloat(taxaDeJurosMensal.value) / 100;
    let valorNumeroDeMeses = parseInt(numeroDeMeses.value);


    let calculoRetornoInvestimento = valorCapitalInicial * Math.pow(1 + valorTaxaDeJurosMensal, valorNumeroDeMeses);


    alert(
        "O investimento gerará um retorno de "+ calculoRetornoInvestimento.toFixed(2)
    );
}
