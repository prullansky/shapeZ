class Item {
    constructor(itemImage){
        this.x = 450;
        this.y = 275;
        this.height = 20;
        this.width = 20;
        this.image = itemImage; 
    }

    collision(playerInfo) {
        let obstacleX = this.x + this.width / 2;
        let obstacleY = this.y + this.height / 2;
        let playerX = playerInfo.x + playerInfo.width / 2;
        let playerY = playerInfo.y + playerInfo.height / 2;

        if (dist(obstacleX, obstacleY, playerX, playerY) > 20) {
            return false;
        } else {
            game.player.increasePoints();
            
            this.x = Math.floor(Math.random()*850);
            this.y = Math.floor(Math.random()*500);
            game.barrierArray.push(new Barrier(),new Barrier());
            console.log(this.x, this.y)
            return true;
        }
    }

    drawItem(){
        this.collision(game.player);
        image(this.image,this.x,this.y);
        // square(this.x, this.y, this.width);
    }


}

