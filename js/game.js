class Game {
    constructor() {}
    preloadGame() {

        // this.playerImage = loadImage("../assets/dimensiontest.png");
        // this.itemImage = loadImage("../assets/item1.png");
        // this.barrierImage = loadImage("../assets/barriertest.png")
      }
    
      setupGame() {

        this.player = new Player(this.playerImage);
        this.item = new Item(this.itemImage);    
        this.barrierArray = [];        
      }

      drawGame() {     

          this.player.drawPlayer();
          this.item.drawItem();
      
        
          this.barrierArray.forEach (function (barrier) {
            barrier.drawBarrier();
            barrier.collision(game.player);
            barrier.motion();
          })

          if (game.player.score > 0) {
            rect(225, 236.25, 450 , 68.75, 20, 20, 20, 20);
            textSize(50);            
            text(`${this.player.points * frameCount}`, 400, 290); 
          }
      }
}