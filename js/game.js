class Game {
    constructor() {}
    preloadGame() {

        // this.playerImage = loadImage("../assets/player.png");
        this.itemImage = loadImage("assets/item1.png");
        this.powerUpImage = loadImage("assets/powerUp.png")
        // this.barrierImage = loadImage("../assets/barriertest.png")
      }
    
      setupGame() {
        song.play();
        this.player = new Player();
        this.item = new Item(this.itemImage); 
        this.powerUp = new PowerUp(this.powerUpImage); 
        this.barrierArray = [];
        this.powerUpArray = [];        
      }

      drawGame() {     

          this.player.drawPlayer();
          this.item.drawItem();
          // this.powerUp.drawPowerUp();

          // this.powerUpArray.forEach (function (powerUp) {
          //   powerUp.drawPowerUp();         
          // })
      
      
          this.barrierArray.forEach (function (barrier) {
            barrier.drawBarrier();
            barrier.collision(game.player);
            barrier.motion();            
          })

          for (let i = 0; i - this.barrierArray.length; i++) {
             if (this.barrierArray.length > 10) {
              this.barrierArray[i].speed = 1.5;
              this.barrierArray[11].height = 60;
              this.barrierArray[11].width = 60;

            } else if (this.barrierArray.length > 22) {
              this.barrierArray[i].speed = 2;
            } else if (this.barrierArray.length > 36) {
              this.barrierArray[i].speed = 3;
            }
          }



          if (game.player.score > 0) {
            rect(225, 236.25, 450 , 68.75, 20, 20, 20, 20);
            textSize(50);            
            text(`${this.player.points - (Math.floor(frameCount / 60))}`, 398, 288); 
          }
      }
}