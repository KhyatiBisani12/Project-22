class RedZone{
    constructor(x,y,width,height){
        var packageSprite_options ={
            restitution: 0.5,
            friction :1,
            density : 1
    }
        this.body = Bodies.rectangle(x,y,width,height,packageSprite_options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
        Display(){
           push ();
           translate (this.body.position.x , this.body.position.y);
           angleMode(RADIANS);
           rotate (this.body.angle);
           pop ();
        }
    }