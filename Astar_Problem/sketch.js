var cols = 5;
var rows = 5;
var grid;

function build2DArray(){
    grid = new Array(cols);
    for( var i=0; i<cols; i++){
        grid[i] = new Array(rows);
    }
    //console.log(grid);
}

function Spot(){
    this.f = 0;
    this.g = 0;
    this.h = 0;
}

function makeSpotObjects(){
    for( var i=0; i<cols; i++){
        for( var j=0; j<rows; j++){
            grid[i][j] = new Spot();
        }
    }
    console.log(grid);
}


function setup(){
    createCanvas(400,400);
    console.log("A*");

    build2DArray();
    makeSpotObjects();

}

function draw(){
    background(0);

}