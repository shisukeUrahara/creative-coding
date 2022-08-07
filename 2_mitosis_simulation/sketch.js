let cells = [];
let n=10;

function setup() {
  createCanvas(800, 800);
 for(let i=0;i<n;i++){
  cells.push(new Cell())

 }
}

function draw() {
  background(200);

  for(let i=0;i<cells.length;i++){
  cells[i].move();
  cells[i].show()
  }
}

function mousePressed(){
  for(let i=cells.length-1;i>=0;i--){
    if(cells[i].clicked(mouseX,mouseY)){
      //  split the cell
      console.log("**@ clicked")
      cells.push(cells[i].mitosis())
      cells.push(cells[i].mitosis())
      cells.splice(i,1)
    }

  }
}

