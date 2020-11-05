class Barrier {
    constructor(barrierImage){
        this.x = Math.floor(Math.random()*width);
        this.y = Math.floor(Math.random()*height);
        this.height = 30;
        this.width = 30;
        this.r = 15;
        this.directionx = 1;
        this.directiony = -1;
        this.speed= 1;
        this.image = barrierImage;
    }


    collision(playerInfo) {
        let obstacleX = this.x + this.width / 3;
        let obstacleY = this.y + this.height / 3;
        let playerX = playerInfo.x + playerInfo.width / 2;
        let playerY = playerInfo.y + playerInfo.height / 2;

        if (dist(obstacleX, obstacleY, playerX, playerY) > 20) {
            return false;
        } else {
            game.player.increaseScore();
            song.stop();
            noLoop();
            return true;
        }
    }

    drawBarrier(){
        ellipse(this.x, this.y, this.height, this.width)
        // image(this.image,this.x,this.y);
    }

    motion(){
        this.x = this.x + (this.directionx * this.speed)
        this.y = this.y + (this.directiony * this.speed) 
        if (this.x < 0) {
            this.directionx = this.directionx * -1;
           }
        if (this.x > width) {
            this.directionx = this.directionx * -1;
           }
        if (this.y < 0) {
            this.directiony = this.directiony * -1;
           }
        if (this.y > height) {
            this.directiony = this.directiony *-1;
        }
       }
} 
