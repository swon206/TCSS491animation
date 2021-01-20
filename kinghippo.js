class KingHippo {
    constructor(game) {
        Object.assign(this, { game});

      // this.animations = [];


        // spritesheet
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/kingHippo2.png");
        this.animation = new Animator(this.spritesheet, 7, 758, 58, 98, 7, .20 , 3, false, true); 

     
    };

    update(){

    };

    

    draw(ctx) {

        this.animation.drawFrame(this.game.clockTick, ctx, 25, 25, 3);
        
 
    };
};