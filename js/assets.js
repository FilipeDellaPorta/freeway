let imagemEstrada;
let imagemAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;
let somColidiu;
let somPontos;
let somTrilha;


function preload() {
  imagemEstrada = loadImage("./assets/images/estrada.png");
  imagemAtor = loadImage("./assets/images/ator-1.png");
  imagemCarro = loadImage("./assets/images/carro-1.png");
  imagemCarro2 = loadImage("./assets/images/carro-2.png");
  imagemCarro3 = loadImage("./assets/images/carro-3.png");
  somColidiu = loadSound("./assets/sounds/colidiu.mp3");
  somPontos = loadSound("./assets/sounds/pontos.wav");
  somTrilha = loadSound("./assets/sounds/trilha.mp3");
  
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3];
}


