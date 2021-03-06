class BaseClass{
    constructor(x,y,width,height,angle) {
        var options={
            'density':1.5,
             'friction': 1.0,
             'restitution':0.5
        }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 50;
      this.height = 50;
      this.image=loadImage("sprites/base.png");

      World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
    
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        
        imageMode(CENTER);
        image(this.image, 0,0, this.width, this.height);
        pop();
      };
}