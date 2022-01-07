
function preload(){
  pic = loadImage("disco.jpg")
  song1 = loadSound("BlueBird.mp3")
  song2 = loadSound("Spider Man.mp3")
  song3 = loadSound("Phineas and Ferb.mp3")
} 

function setup() {
  createCanvas(windowWidth, windowHeight);
  songslide = createSlider(0,1,0.1,0.1)
  songstart1 = createButton("Play Song 1")
  songstart2 = createButton("Play Song 2")
  songstart3 = createButton("Play Song 3")
  stop = createButton("Stop Song")
  songstart1.mousePressed(startsong1)
  songstart2.mousePressed(startsong2)
  songstart3.mousePressed(startsong3)
  stop.mousePressed(stopsong)
}

function draw() {
  background(pic);
  song1.setVolume(songslide.value())
}


function startsong1(){
  song1.play()
  song2.stop()
  song3.stop()
  
}

function startsong2(){
  song1.stop()
  song2.play()
  song3.stop()
  
}

function startsong3(){
  song1.stop()
  song2.stop()
  song3.play()
  
}

function stopsong(){
  song1.stop()
  song2.stop()
  song3.stop()
  
}