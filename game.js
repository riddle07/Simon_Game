var colors = ["red", "blue", "yellow", "green"];
document.addEventListener("keydown",function(event){
    start(1);
})

var ik = 0;
var toGive = "Maaz";
var given = "l";
var level;

var a;

function start(lev){
level = lev;   
$("h1").text("Level "+level);

var toGive = "Maaz";
var given = "l";

given = generator();


function generator(){
 var randomColor = colors[Math.floor(Math.random()*4)];
 $("."+randomColor).addClass("pressed");
 setTimeout(function (){$("."+randomColor).removeClass("pressed");},100);
 return randomColor;
}
if(given=="red"){
    var a1 = new Audio("sounds/red.mp3");
    a1.play();
}
if(given=="green"){
    var a1 = new Audio("sounds/green.mp3");
    a1.play();
}
if(given=="blue"){
    var a1 = new Audio("sounds/blue.mp3");
    a1.play();
}
if(given=="yellow"){
    var a1 = new Audio("sounds/yellow.mp3");
    a1.play();
}
$(".btn").click(taker);
function taker(){
    toGive = this.id;
    return;
}
setTimeout(function(){
    if(toGive===given)
    {
        start(level+1);
    }
    else{
        $("h1").text("Game Over. Press A key to start again.");
        var n = new Audio("/sounds/wrong.mp3");
        n.play();
    }
}, 200+5000/(level+1));
}
















