"use strict";

var canvas = document.getElementById("tela");
var ctx = canvas.getContext("2d");
var x =200, y = 200, larg = 80, alt = 45,ang=0;
var x1 =200 ,y1 = 200, larg1 = 35, alt1 = 33;
// var x2 =200 ,y2 = 200, larg2 = 10, alt2 = 10;

function desenhar () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
///-----CODIGO IMPORTANTE------------
    ctx.save();
    ctx.translate(x,y);
    ctx.rotate(ang);
 ///---------------------------------   
    
 //--INULTO POR ENQUANTO--------
  //  ctx.fillStyle = "rgb(20, 20, 0)";
 //----------------------------------------   


   ctx.arc(-25, 26, 10, 0, 2 * Math.PI); //roda traseira 
// ctx.fillStyle = "rgb(255,64,0 )"; //deixar a roda vermelha
   ctx.fill(); //mostrar na tela a roda traseira
   ctx.beginPath(); //iniciar um novo caminho

   ctx.arc(50, 26, 10, 0, 2 * Math.PI); //roda da frente
// ctx.fillStyle = "rgb(255,64,0 )"; //deixar a roda vermelha
  ctx.fill(); //mostrar na tela a roda da frebte
  //ctx.beginPath();
 ctx.fillStyle = "rgb(255, 64, 0)"; //  deixa a carroseria vermelha
 ctx.fillRect(-larg/2,-alt/2,larg,alt); // desenha a o retangulo a carroseria 
 ctx.beginPath();



 ctx.fillStyle = "rgb(25, 60, 0)"; 
   ctx.fillRect(larg1,alt1/1.5,larg1,-alt1);
   ctx.fillStyle = "rgb(10, 60, 0)"; 
   ctx.beginPath();
   ctx.fillRect(larg1,alt1/1.5,larg1,-alt1);
   ctx.fillRect(-larg/2,-alt/2,larg/1.3,alt);
   
 
   ctx.arc(51,4,4, 0, 2 * Math.PI); //janelaa
   ctx.fillStyle = "#0000FF"; //deixar a janela azul
      ctx.fill(); 
      //ctx.beginPath(); //iniciar um novo caminho

    ctx.fillStyle = "rgb(255, 60, 0)"; 
    ctx.fillRect(larg1/2.5,-alt1/1.50,larg1/-1.50,alt1);
    
   ctx.stroke();
     ctx.restore();

  

    requestAnimationFrame (desenhar);

}
 
requestAnimationFrame(desenhar); 

document.onkeydown = function(evt){
    console.log("Nome da tecla " + evt.key +" Numero" + evt.keyCode)
    switch (evt.keyCode){
        case 38:
            
            x+=Math.cos(ang)*5
            y+=Math.sin(ang)*5
            break; 
        case 40:
            x-=Math.cos(ang)*5
            y-=Math.sin(ang)*5
             break; 
        case 37:
            ang-=0.1;  
            break; 
        case 39:
            ang+=0.1;  
            break;
     



     
    }
}