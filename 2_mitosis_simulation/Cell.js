//  representing a class
function Cell (pos,r,c){
    //  state variables
    this.position = pos ? pos.copy(): createVector(random(width),random(height));
    this.radius=r || 100;
    this.color= c || color(random(100,255),0,random(100,255),100)
  
    //  functions 
    this.move = function(){
     let velocity = p5.Vector.random2D();
     this.position.add(velocity)
    }
  
    this.show= function(){
        noStroke()
        fill(this.color)
        ellipse(this.position.x,this.position.y,this.radius,this.radius)
    }

    this.clicked= function(x,y){
        let distance = dist(this.position.x,this.position.y,x,y);
        if(distance<this.radius){
            return true;
        }
        else {
            return false;
        }

    }

    this.mitosis= function(){
        if(this.radius<5){
            return;
        }
        this.position.x+= random(-this.radius*0.5,this.radius*0.5)
        let cellA= new Cell(this.position,this.radius*0.8,this.color);

        return cellA;
    }
  }