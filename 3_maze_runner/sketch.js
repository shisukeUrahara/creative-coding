let rows,cols;
let w=40;
let grid=[];
let currentCell;
function setup() {
  createCanvas(400, 400);
  rows= floor(width/w);
  cols=floor(height/w);

  for(let i=0;i<rows;i++){
    for(let j=0;j<cols;j++){
      grid.push(new Cell(j,i))
    }
  }
  currentCell=grid[0];
}

function draw() {
  background(51);
  frameRate(5)

  for(let i=0;i<grid.length;i++){
    grid[i].show();
  }

  currentCell.visited=true
  currentCell.highlight()
  //  STEP1 -> choose a random cell which has not been visited
  let nextCell=currentCell.checkNeighbours();

  if(nextCell){
    //  STEP2-> Mark cell as visited
    nextCell.visited=true;
  //   STEP 3-> remove common wall between current and next cell
  removeWalls(currentCell,nextCell)
    currentCell=nextCell
  }


}

const removeWalls=(a,b)=>{
  let x= a.i-b.i;
  if(x===1){
    a.walls[3]=false;
    b.walls[1]=false;
  }
  else if(x===-1){
    a.walls[1]=false;
    b.walls[3]=false;
  }
  let y= a.j-b.j;
  if(y===1){
    a.walls[0]=false;
    b.walls[2]=false;
  }
  else if(y===-1){
    a.walls[2]=false;
    b.walls[0]=false;
  }
  else {
    return
  }
  

}
