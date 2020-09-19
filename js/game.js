class Game{
constructor(){

}
getState(){
    var gameStateRef =database.ref('gameState');
    gameStateRef.on("value",function(data){
        gameState=data.val();
    });

}
update(state){
    database.ref('/').update({
        gameState:state
    });
}
start(){
    if(gameState===0){
        player =new Player();
        player.getCount();
        form=new Form();
        form.display();
    }
    car1= createSprite(100,200);
    car1.addImage("car1",car_inage1);
    car2= createSprite(300,200);
    car2.addImage("car2",car_inage2);
    car3= createSprite(500,200);
    car3.addImage("car3",car_inage3);
    car4= createSprite(700,200);
    car4.addImage("car4",car_inage4);
    carssss=[car1,car2,car3,car4]
}
play(){
    form.hide();
    textSize(30);
    Player.getPlayerInfo();

    if(all_players!==undefined){
        //background(67,67,67);
       image(trackinage,0,-displayHeight*4,displayWidth,displayHeight*5)
        var index =0;
        var x=175;
        var y;
    for(var plr in all_players){
        index+=1;
        x+=200;
        y=displayHeight-all_players[plr].distance;
        carssss[index-1].x=x;
        carssss[index-1].y=y;
        if(index===player.index){
        //carssss[index-1].shapeColor="red";
        stroke(10);
        fill(255,0,0);
        ellipse(x,y,60,60);
        camera.position.x=displayWidth/2;
        camera.position.y=carssss[index-1].y;
        }
    }
}
if(keyIsDown(UP_ARROW)&&player.index!==null){
    player.distance+=50;
    player.update();
}
if(player.distance>3860){
    gameState=2;
}
drawSprites();
}
end(){
    console.log("end");
}
}
