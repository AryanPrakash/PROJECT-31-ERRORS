class Drop
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:1,
			friction:0.1,
			density:0.8
			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.Drops =[];
        this.maxDrops=100;
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			push()
			translate(this.body.position.x, this.body.position.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill("blue")
			//imageMode(CENTER);
			//image(this.image, 0,0,this.r, this.r)
            if(this.body.velocity.x > 10 && this.body.position.y > 200){
                var position = [this.body.position.x, this.body.position.y];
                this.trajectory.push(position);
                ellipse(70,400,this.r, this.r);
              }
             
              
              
			//ellipse(0,0,this.r, this.r);
			pop()
			
	}

}

