// Página 1
function tabuada(){
    const baseDaTabuada =  Number(document.getElementById ("baseTabuada").value);
    let termo1 = Number(document.getElementById("termo1").value);
    let termo2 = Number(document.getElementById("termo2").value);

    let calculos = [];
    let index;

    if(termo2 < termo1){
        for( index = termo1; index >= termo2; index--){
            calculos.push(`${baseDaTabuada} x ${index} = ${baseDaTabuada * index}`)
        }
    }else if(termo1 < termo2){ 
        for( index = termo1; index <= termo2; index++){
            calculos.push(`${baseDaTabuada} x ${index} = ${baseDaTabuada * index}`)
        }
    }
    
    document.getElementById("resultado").innerHTML = calculos.join("<br>");

}
 
// Página 2
function palindromo(){
    const verificar =  String(document.getElementById("termo").value);

    if(!verificar){
        document.getElementById("resultado").innerHTML = "O número não possui nenhum dígito"
    }else if(verificar.length == 1){
        document.getElementById("resultado").innerHTML = "O número só possui um dígito"
    }else{
        const normal = Number(verificar);
        const invertido = Number(verificar.split("").reverse().join(""));
 
        if(invertido == normal){
            document.getElementById("resultado").innerHTML = "O número é um palíndromo";
        }else{
            document.getElementById("resultado").innerHTML = "O número não é um palíndromo";
        }
    }
}

// Página 3
function calcPI(){
    const termo =  Number(document.getElementById("termo").value);

    let listaNumeros = [];
    let index;

    for( index = 1; index < termo; index++) {
        listaNumeros.push(index);

        if(index % 3 == 0){
            listaNumeros.push("PI");
        }
    }

    document.getElementById("resultado").innerHTML = listaNumeros.join(" - ")
}

// Página 4
function reforma(){
    const HAzulejo =  Number(document.getElementById("HAzulejo").value);
    const LAzulejo =  Number(document.getElementById("LAzulejo").value);
    const HParede =  Number(document.getElementById("HParede").value);
    const LParede =  Number(document.getElementById("LParede").value);

    const AAzulejo = HAzulejo * LAzulejo;
    const AParede = HParede * LParede;

    let numAzulejos = AParede / AAzulejo;

    numAzulejos = Math.ceil(numAzulejos)

    numFinal = (numAzulejos * 0.05) + numAzulejos;

    numFinal = Math.ceil(numFinal)

    document.getElementById('resultado').innerHTML = `
        Área da parede: ${AParede} cm²<br>
        Área do azulejo: ${AAzulejo} cm²<br>
        Quantidade necessária: ${numAzulejos}<br>
        Quantidade necessária com folga de 5%: ${numFinal}<br>
    `

}