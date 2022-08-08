function Cell(i,j){

    //  state variables
    this.i=i;
    this.j=j;
    //  0-> top
    //  1-> right
    //  2-> bottom
    //  3-> left

    this.walls=[true,true,true,true]


    //  function
this.show= ()=>{
    let x = this.i*w;
    let y=this.j*w;

    stroke(255);
    if(this.walls[0]){
        line(x,y,x+w,y);
    }
    if(this.walls[1]){
        line(x+w,y,x+w,y+w);
    }  if(this.walls[2]){
        line(x+w,y+w,x,y+w);
    }  if(this.walls[3]){
        line(x,y+w,x,y)
    }

    // noFill()
    // rect(x,y,w,w);
}
}