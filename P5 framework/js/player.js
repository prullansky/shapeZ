class Player {
    constructor(playerImage){
        this.image = playerImage;
        this.x = 450;
        this.y = 10;
        this.height = 25;
        this.width = 25;
        this.score = 0;
        this.points = 0;
    }

    drawPlayer(){
        image(this.image,this.x,this.y);
    }

    moveUp(){
        if (this.y > 0){ 
        this.y -= 3;
        // this.image = loadImage('/assets/up.png');
        }
    }

    moveDown(){
        if (this.y < 520){
            this.y += 3;    
        // this.image = loadImage('/assets/down.png');
        }

    }

    moveLeft(){
        if (this.x > 0){
            this.x -= 3;
            // this.image = loadImage('/assets/left.png');
        }

    }

    moveRight(){
        if (this.x < 870){
            this.x += 3;
            // this.image = loadImage('/assets/left.png');
        }

    }

    increaseScore (){
        this.score += 1;
        console.log(this.score);
    }

    increasePoints(){
        this.points += 1;
    }
}

