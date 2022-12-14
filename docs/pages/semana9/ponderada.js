function calcular1(){
    let vpvf = Number(document.getElementById("vpvf").value);
    let periodo = Number(document.getElementById("periodo").value);
    let taxa = Number(document.getElementById("taxa").value);
    let selecao = document.getElementById("selecao").value;
    let resultado;
    let taxasomada = 1 + (taxa/100)
    
    if(selecao == "valorFuturo") {
        resultado = vpvf * Math.pow(taxasomada, periodo);
        let valorFinal = Math.round(resultado)
        document.getElementById("resultado").innerHTML += `<p> O valor Futuro é: ${valorFinal}$ </p>`
    }
    
    else{
        resultado = vpvf/Math.pow(taxasomada, periodo);
        let valorFinal = Math.round(resultado)
        document.getElementById("resultado").innerHTML += `<p> O valor presente é: ${valorFinal}$ </p>`  
    }
    }

function calcular2(){
    let capital = document.getElementById("capital").value;
    let taxa = document.getElementById("taxa").value;
    let periodo = document.getElementById("periodo").value;
    let resultado
    let taxaVezesPeriodo = (periodo/360)*(taxa/100)

    resultado = capital*(1 + taxaVezesPeriodo)

    document.getElementById("resultado").innerHTML += `<p> O montante é: ${resultado}$ </p>`
}

function calcular3() {
    let numero = String(document.getElementById("numero").value);
    array = numero.split("");
    for (let i = 0; i < array.length; i++) {
      document.getElementById("resultado").innerHTML += `<p style = "margin-left: ${i*20}px;">${array[i]}</p>`;
    }
}

function calcular4(){
    let numero = document.getElementById("numero").value
    
    let array=[]
    
    if (numero>=128 ){
        array.push(1)
        numero = numero -128
    }else{
        array.push(0)
    
    }
    if (numero>=64){
        array.push(1)
        numero = numero -64
    }else{
        array.push(0)
    }
    if(numero>=32){
    array.push(1)
    numero = numero -32
    }else{
        array.push(0)
    }
    if(numero>=16){
        array.push(1)
        numero = numero -16
    }else{
        array.push(0)
    }
    if(numero>=8){
        array.push(1)
        numero = numero -8
    }else{
        array.push(0)
    }
    if (numero>=4){
        array.push(1)
        numero = numero -4
    }else{
        array.push(0)
    }
    if(numero>=2){
        array.push(1)
        numero=numero - 2
    }else{
        array.push(0)
    }
    if(numero>=1){
        array.push(1)
        numero = numero -1
    }else{
        array.push(0)
    }
        let resultado = array.join('')
    
        document.getElementById("resultado").innerHTML+= `<p> O número em Binário é: ${resultado} </p>`
    
    }