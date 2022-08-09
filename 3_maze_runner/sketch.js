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
  let nextCell=currentCell.checkNeighbours();

  if(nextCell){
    nextCell.visited=true;
    currentCell=nextCell
  }
}
