class Player {
    constructor()
    {
        this.name = null;
        this.life = 5;
        this.body = createSprite(200,50,44,44);
        this.image = loadImage('assets/personagemJogoDeCimaM.png');
        this.body.addImage(this.image);
        this.body.scale = 0.5;
        }
    
}
