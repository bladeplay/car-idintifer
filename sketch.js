var canvas;
var gameState=0;
var playerCount;
var form,player,game;
var database,position;
var all_players;
var car1,car2,car3,car4;
var carssss;
var car_inage1,car_inage2,car_inage3,car_inage4,trackinage;
function preload(){
    car_inage1=loadImage("../images/car1.png")
    car_inage2=loadImage("../images/car2.png")
    car_inage3=loadImage("../images/car3.png")
    car_inage4=loadImage("../images/car4.png")
    trackinage=loadImage("../images/track.jpg")
}
function setup(){
    database=firebase.database();
    canvas=createCanvas(displayWidth-20,displayHeight-30);
    game = new Game();
    game.getState();
    game.start();

}

function draw(){
if(playerCount===4){
    game.update(1);
}
if(gameState===1){
clear();
game.play();
}
if (gameState===2){
    game.end();

}
}