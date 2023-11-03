function setup() {
    createCanvas(600, 400);
    // somTrilha.loop();
  }
  
  function draw() {
    background(imagemEstrada);
    mostraAtor();
    movimentaAtor();
    mostraCarro();
    movimentaCarro();
    loopCarro();
    carroPassouDaTela();
    verificaColisao();
    placar();
    somaPonto();
    removePonto();
  }

 

