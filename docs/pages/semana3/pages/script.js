// Página 1
function calcHmaxETempo() {
  let v0 = document.getElementById("velocidadeInicial").value;
  let hMax;
  let tempo;
  let gravidade = 10;

  tempo = v0 / gravidade;
  hMax = Math.pow(v0, 2) / (gravidade * 2);

  let resultado = `Tempo = ${tempo} segundos e hMax =  ${hMax} metros.`;

  document.getElementById("valorInserido").innerHTML = resultado;
}

// Página 2
function calculoDeMaximoEMinimo() {
  let a = document.getElementById("valorDeA").value;
  let b = document.getElementById("valorDeB").value;
  let c = document.getElementById("valorDeC").value;
  let ladoDaParabola;

  if (a < 0) {
    ladoDaParabola = `Como a é menor que zero, a parábola será invertida. Com isso, o caso será de ponto Máximo.`;
  } else {
    ladoDaParabola = `Como a é maior que zero, a parábola será voltada para cima. Com isso, o caso será de ponto Mínimo.`;
  }

  document.getElementById("ladoDaParabola").innerHTML = ladoDaParabola;

  let delta = Math.pow(b, 2) - (4 * a * c);
  let xv = -(b / (2 * a));
  let yv = -(delta / (4 * a));

  let valoresXvYv = `Os valores de (Xv, Yv) são: (${xv},${yv})`;

  document.getElementById("Resultado").innerHTML = valoresXvYv;
}

// Página 3
function converter(){
    let escalaEscolhida = document.getElementById("escalaEscolhida").value; 
    let valorTemp = document.getElementById("valorTemp").value;
    let valorConvertido;

    if (escalaEscolhida !="celsius" && escalaEscolhida != "fahrenheit" && escalaEscolhida != "CELSIUS" && escalaEscolhida != "FAHRENHEIT"){
        alert(`insira uma escala: celsius ou fahrenheit`)
    }
    else if(escalaEscolhida == "celsius" || escalaEscolhida == "CELSIUS"){
        valorConvertido = (1.8 * valorTemp) + 32;
        document.getElementById("escalaFornecida").innerHTML = `Escala escolhida: ${escalaEscolhida}`
        document.getElementById("valorConvertido").innerHTML = ` ${valorTemp}° Celsius = ${valorConvertido}° Fahrenheit.` 
    } 
    else if (escalaEscolhida == "fahrenheit" || escalaEscolhida == "FAHRENHEIT"){
        valorConvertido = (valorTemp - 32)/1.8
        document.getElementById("escalaFornecida").innerHTML = `Escala escolhida: ${escalaEscolhida}`
        document.getElementById("valorConvertido").innerHTML = `${valorTemp}° Fahrenheit = ${valorConvertido}° Celsius.` 
    }
}

// Página 4
function calculoConsumo(){
    let valorkWh = document.getElementById("valorkWh").value;
    let quantidadeConsumida = document.getElementById("quantidadeConsumida").value;
    
    if(valorkWh == 0 || quantidadeConsumida == 0){
        alert("Insira os dados necessários")
    } else{
        if(quantidadeConsumida > 100 && quantidadeConsumida <= 200){
            valorkWh *= 1.25;
        }
        else if(quantidadeConsumida > 200){
            valorkWh *= 1.50;
        }
        let valorFinal = valorkWh * quantidadeConsumida;
        document.getElementById("valorGasto").innerHTML = `O valor de kWh gasto é de R$${valorFinal}.`
    } 
}