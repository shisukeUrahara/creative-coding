let rows,cols;
let w=40;
let grid=[];
function setup() {
  createCanvas(400, 400);
  rows= floor(width/w);
  cols=floor(height/w);

  for(let i=0;i<rows;i++){
    for(let j=0;j<cols;j++){
      grid.push(new Cell(i,j))
    }

  }
}

function draw() {
  background(51);

  for(let i=0;i<grid.length;i++){
    grid[i].show();

  }
}
