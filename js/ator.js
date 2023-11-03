//variaveis ator
let posicaoInicialXAtor = 100;
let posicaoInicialYAtor = 366;
let xAtor = posicaoInicialXAtor;
let yAtor = posicaoInicialYAtor;
let alturaAtor = 30;
let larguraAtor = 30;
let velocidadeAtor = 2;
let colisao = false;
let ponto = 0;
let xPonto = 50;
let yPonto = 25;

function mostraAtor() {
    image(imagemAtor, xAtor, yAtor, larguraAtor, alturaAtor);
  }

  function movimentaAtor() {
    if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
      yAtor -= velocidadeAtor;
    }
    if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
      yAtor += velocidadeAtor;
    }
    if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
      xAtor -= velocidadeAtor;
    }
    if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
      xAtor += velocidadeAtor;
    }
    yAtor = constrain(yAtor, 0, 370);
    xAtor = constrain(xAtor, 0, 570);
  }
  
  
function verificaColisao() {
  for (let i=0; i < imagemCarros.length; i++) {
    colisao = collideRectRect(xCarros[i], yCarros[i], larguraCarros, alturaCarros, xAtor, yAtor, larguraAtor, alturaAtor);
    if(colisao){
      atorPosicaoInicial();
      somColidiu.play();
      if (removePonto()) {
        ponto -= 1;
      }
    }
  }
  console.log(colisao);
}

function atorPosicaoInicial() {
  xAtor = posicaoInicialXAtor;
  yAtor = posicaoInicialYAtor;
}

function placar() {
  textAlign(CENTER);
  fill(color(255,255,0));
  textSize(25);
  text(ponto, xPonto, yPonto);
}

function somaPonto() {
  if (yAtor + alturaAtor < 39) {
    ponto += 1;
   atorPosicaoInicial();
   somPontos.play();
  }
}

function removePonto() {
  return ponto > 0;  
}

