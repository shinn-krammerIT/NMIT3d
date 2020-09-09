// Global nmit text variable
let nmit;

function setup() {
  // WEBGL canvas
  createCanvas(500, 500, WEBGL);
  nmit = createGraphics(200, 200);
  nmit.textSize(60);
}

function draw() {
  background(255);
  nmit.background(255);
  // Blue colour fill eyedropped from NMIT logo
  nmit.fill('#007fad');
  nmit.text('NMIT', 0, 100);
  //pass image as texture
  texture(nmit);
  // Animates Rotation
  rotateX(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  // Plane No Stroke
  noStroke();
  // Plane
  plane(500);
}