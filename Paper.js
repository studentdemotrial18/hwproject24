class Paper
{
    constructor(){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.rectangle(100,550,20,20,options);
        this.width=20;
        this.height=20;

        World.add(world,this.body);


    }
    display()
    {
        ellipseMode(RADIUS);
        fill ("deepPink");
        ellipse(this.body.position.x,this.body.position.y,20,20); 
    }
}