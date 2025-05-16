let x, y, nPos1, nPos2, nSpeed;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(130,140,80);
  x = width/5;
  y = height/2; 
  
  nPos1 = random(-1000,2000);
  nPos2 = random(-1000,2000);
  
  nSpeed = 0.01;

}

function draw() {
 
  let xNoise = noise(nPos1 += nSpeed);
  let yNoise = noise(nPos2 += nSpeed);
  
  let xRandom = random(0,width);
  
  let xMove = map(xNoise,0,0.9,0,width);
  let yMove = map(yNoise,0,0.9,0,height);
  
  strokeWeight(0.5);
  fill(30,20,20,2);
  circle(xMove,yMove,150);
  
  
  
  
  print('xNoise =', xNoise);
  print('xRandom =', xRandom);
  
}
