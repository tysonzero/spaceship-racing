var spaceship = {
  //amount of friction
  friction:0.02,
  
  //amount of acceleration
  acceleration:0.4,
  
  //whether the spaceship is accelerating
  accelerate:false,
  
  //whether the spaceship is turning
  turn:{
    left:false,
    right:false,
  },
  
  //direction of the spaceship in radians
  direction:0,
  
  //speed of the spaceship in pixels per frame
  speed:{
    x:0,
    y:0,
  },
  
  //position of the spaceship in pixels
  pos:{
    x:400,
    y:300,
  },
  
  //variable manipulation
  update:function() {
    //rotates left when turn.left is true
    if(this.turn.left) {
      this.direction -= Math.PI / 120;
    }
    
    //rotates right when turn.right is true
    if (this.turn.right) {
      this.direction += Math.PI / 120;
    }
    
    //increases speed in direction of spaceship if accelerate is true
    if(this.accelerate) {
      this.speed.x += Math.cos(this.direction) * this.acceleration;
      this.speed.y += Math.sin(this.direction) * this.acceleration;
    }
    
    //decrease speed by friction
    this.speed.x *= 1 - this.friction;
    this.speed.y *= 1 - this.friction;
    
    //increases position by speed
    this.pos.x += this.speed.x;
    this.pos.y += this.speed.y;
    
    //Horizontal screen wrapping
    if (this.pos.x > game.width + 40) {
      this.pos.x -= game.width + 80;
    }
    else if (this.pos.x < -40) {
      this.pos.x += game.width + 80;
    }
    
    //Vertical screen wrapping
    if (this.pos.y > game.height + 40) {
      this.pos.y -= game.height + 80;
    }
    else if (this.pos.y < -40) {
      this.pos.y += game.height + 80;
    }
  },
  
  //drawing to screen
  draw:function() {
    //draw spaceship
		game.ctx.beginPath();
		game.ctx.fillStyle="#0000FF";
		game.ctx.strokeStyle="#0000FF";
		game.ctx.arc(this.pos.x, this.pos.y, 20, 0, 2*Math.PI)
		game.ctx.fill();
		game.ctx.stroke();
		game.ctx.closePath();
    
    //draw spaceship flame
    game.ctx.beginPath();
		game.ctx.fillStyle="#FF0000";
		game.ctx.strokeStyle="#FF0000";
		game.ctx.arc(this.pos.x - 20 * Math.cos(this.direction), this.pos.y - 20 * Math.sin(this.direction), 10, 0, 2*Math.PI)
		game.ctx.fill();
		game.ctx.stroke();
		game.ctx.closePath();
    
    //draw speed
    game.ctx.font="30px Arial";
    game.ctx.textAlign="center";
    game.ctx.fillStyle="#000000";
    game.ctx.fillText(Math.pow(Math.pow(this.speed.x, 2) + Math.pow(this.speed.y, 2), 0.5).toFixed(2), 400, 30);
  },
}