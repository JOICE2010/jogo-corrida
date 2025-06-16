function setup() {
  createCanvas(400, 400);
}
let xjogador1 = 0;
let xjogador2 = 0;
let xjogador3 = 0;
function draw() {
  background('lightgreen');
 textSize(40);
  text("🐖",xjogador3,100);
  text("🐍",xjogador1,300);
  text("🐞",xjogador2,200);
 rect(350,0,10,400);
 xjogador1 = xjogador1 + random(5);
 xjogador2 = xjogador2 + random(5);
 xjogador3 = xjogador3 + random(5);
  
   if (xjogador1 >350){
      text("jogador 1 venceu!",50,200);
    }
 if(xjogador2>350){
 text("jogador 2 venceu!",50,200);
 }
  if (xjogador3> 350){
   text("jogador 3 venceu!",50,200);
    noLoop();
    
   }
}
 function keyReleased() {
  if (key == "a") {
    xJogador[0] += random(20);
  }
  if (key == "s") {
    xJogador[1] += random(20); 
  }
  if (key == "d") {
    xJogador[2] += random(20);
  }
}

