class PowerUp {

    constructor(powerUpImage){
        this.x = Math.floor(Math.random()*width);
        this.y = Math.floor(Math.random()*height);
        // this.x = 500;
        // this.y = 300;
        this.height = 20;
        this.width = 20;
        this.image = powerUpImage;
    }

    drawPowerUp(){            
        image(this.image,this.x,this.y,this.height,this.width);
        
       // square(this.x, this.y, this.width);
    }

}
