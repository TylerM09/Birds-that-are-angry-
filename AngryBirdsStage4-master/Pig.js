class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visibility = 255
  }
  display(){
    if (this.body.speed < 4){
      super.display()

      
    }
    else{

World.remove(world,this.body)

push()
this.visibility = this.visibility - 5
tint(0, this.visibility)
image(this.image, this.body.position.x, this.body.position.y, 75, 75)
pop()

    }

  }
score(){
if(this.visibility < 200 && this.visibility > -1000)

  score++
}
  

};