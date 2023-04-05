var gameState = 2;
var form, game, player;
var backgroundImg;
var store1Img;
var chicken, cow;



function preload(){
    backgroundImg = loadImage('assets/fundoParaJogo.png');
    store1Img = loadImage('assets/Luis.png');
    store2Img = loadImage('assets/Marcos.png');
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    game = new Game();
    game.start();
}

function draw(){

    if (gameState === 1){
        game.history();
    }
    if (gameState === 2){
        game.play();
    }
    if (gameState === 3){
        game.end();
    }
}

function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
}
