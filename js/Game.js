class Game{
    constructor(){
        this.resetTitle = createElement("h2");
        this.resetButton = createButton("");
        this.leaderBoard = createElement("h2");
        this.leader1 = createElement("h2");
        this.leader2 = createElement("h2");
        this.carMove = false;
        this.leftButtonDown = false;
        this.store = false;
        this.scene = 1;
    }
    history(){
        console.log("Historinha acontecendo...")
    }
    start(){
         player = new Player();
         chicken = new Animals('assets/imgGalinha.png');
         cow = new Animals('assets/imgVaquinha.png');
    }
    play(){
        if(this.store){
            console.log("Entrei na loja");
            //image(store1Img, 0, 0, width, height);
            this.handleStoreControle();
            switch (this.scene) {
                case 1:
                    background(store1Img);
                    break;
            
                case 2:
                    background(store2Img);
                    break;

                default:
                    //background(backgroundImg);
                    this.store = false;
                    this.scene = 1;
                    player.body.y += 10;
                    break;
            }
            
        }
        else{
         image(backgroundImg, -width, -height, width*2, height*2);
         if(player.body.x < width/2 && player.body.x > -width/2){
            camera.x = player.body.x;
         }
         if(player.body.y < height/2 && player.body.y > -height/2){
            camera.y = player.body.y;
         }
           //console.log("x:"+ player.body.x);
           //console.log("y:"+ player.body.y);
         drawSprites();
         this.handleControls();
         this.handleStores();
        }
    }
    handleControls(){
        if(keyDown(87)&& player.body.y>-height){
            player.body.y -= 6;
        }
        if(keyDown(83)&& player.body.y<height){
            player.body.y += 6;
        }
        if(keyDown(68) && player.body.x<width){
            player.body.x += 6;
        }
        if(keyDown(65)&& player.body.x>-width){
            player.body.x -= 6;
        }
    }
    handleStoreControle(){
        if(keyDown(32)){
            this.scene += 1;
        }
    }
    handleStores(){
        if(player.body.x < -370 && player.body.x > -562 &&
            player.body.y < 32 && player.body.y > -70  ){
                this.store = true;
            }
        if(player.body.x < -394 && player.body.x > -604 &&
            player.body.y < 740 && player.body.y > 482  ){
                this.store = true;
            }
    }
    showCake() {
        // swal({
        //   text: "Você conseguiu fazer seu bolo ",
        //   imageUrl:
        //     "https://w7.pngwing.com/pngs/644/532/png-transparent-colouring-pages-coloring-book-birthday-cake-cake-child-food-candle.png",
        //   imageSize: "100x100",
        //   confirmButtonText: "Ok"
        // });
      }
      showIngredients() 
      {
        // push();
        // image(lifeImage, width / 2 - 130,player.positionY - height/2 + 10, 20, 20);
        // fill("white");
        // rect(width / 2 - 100,player.positionY - height/2 + 10, 185, 20);
        // fill("#f50057");
        // rect(width / 2 - 100, player.positionY - height/2 + 10, player.life, 20);
        // noStroke();
        // pop();
      }
     
    handleMousePressed() {
        // this.resetButton.mousePressed(() => {
        //     database.ref("/").update({
        //         'carsAtEnd': 0,
        //         'gameState': 0,
        //         'playerCount': 0,
        //         'players': {}
        //     });
        //     window.location.reload();
        // });
      }
      handleCows(index){
        // cars[index].overlap(goldCoin,function(collector,collected){
        //     player.score += 10;
        //     collected.remove();
        //     player.update();
        // })
      }
      handleChickens(index){
        // cars[index].overlap(goldCoin,function(collector,collected){
        //     player.score += 10;
        //     collected.remove();
        //     player.update();
        // })
    
      }
    
}
