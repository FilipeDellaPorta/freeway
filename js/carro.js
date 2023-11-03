//variaveis carro
let yCarros = [40, 96, 150, 210, 262, 316];
let xCarros = [700, 700, 700, 700, 700, 700];
let velocidadeCarros = [4, 5, 3, 2, 7, 4.5];
let posicaoInicialXCarros = 700;
let alturaCarros = 40;
let larguraCarros = 50;


function mostraCarro() {
    for (let i=0; i < imagemCarros.length; i++) {
        image(imagemCarros[i], xCarros[i], yCarros[i], larguraCarros, alturaCarros);
    }
  }

  function movimentaCarro() {
    for (let i=0; i < imagemCarros.length; i++) {
    xCarros[i] -= velocidadeCarros[i];
    }
  }

  function loopCarro() {
    for (let i=0; i < imagemCarros.length; i++) {
    if (carroPassouDaTela(xCarros[i])) {
        xCarros[i] = posicaoInicialXCarros;
     }
    }
  }

  // o valor do xCarros[i] passa para o xCarro para verificar e gera o retorno para o if do loop carro

  function carroPassouDaTela(xCarro) {
   return xCarro < - larguraCarros;
  }

  