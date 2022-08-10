function Cell(i,j){
    //  state variables
    this.i=i;
    this.j=j;
    //  0-> top
    //  1-> right
    //  2-> bottom
    //  3-> left
    this.walls=[true,true,true,true]
    this.visited=false;

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

   if(this.visited){
    noStroke()
    fill(255,0,255,100)
    rect(x,y,w,w);
   }
}

this.index=(i,j)=>{

    if(i<0 || j<0 || i>cols-1 || j>rows-1){
        return -1;
    }
    return i+(j*cols);
}

this.checkNeighbours=()=>{
    let neighbours=[];

    let topNeighbour= grid[this.index(i,j-1)]
    let rightNeighbour= grid[this.index(i+1,j)]
    let bottomNeighbour= grid[this.index(i,j+1)]
    let leftNeighbour= grid[this.index(i-1,j)];

    if(topNeighbour && !topNeighbour.visited){
        neighbours.push(topNeighbour);
    }if(rightNeighbour && !rightNeighbour.visited){
        neighbours.push(rightNeighbour);
    }if(bottomNeighbour && !bottomNeighbour.visited){
        neighbours.push(bottomNeighbour);
    }if(leftNeighbour && !leftNeighbour.visited){
        neighbours.push(leftNeighbour);
    }

    //  choose a random unvisited neighbur if any , else return undefined
    if(neighbours.length>0){
        let r= floor(random(0,neighbours.length));
        return neighbours[r]
    }
    else {
        return undefined;
    }

}

this.highlight=()=>{
    let x=this.i*w;
    let y=this.j*w;

    noStroke()
    fill(0,0,255,100);
    rect(x,y,w,w)
}

}