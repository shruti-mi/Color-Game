var mode = 6;
var colors ;
var pickedColor ;
var squares=document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var h1= document.querySelector("h1");
var messageDisplay=document.querySelector("#message");
var resetButton=document.getElementById("reset");
var currMode = document.querySelectorAll(".mode");


quickStart(mode);

for(var i = 0; i < currMode.length ; ++ i ) {
currMode[i].addEventListener("click",function() {
currMode[0].classList.remove("selected");
currMode[1].classList.remove("selected");
this.classList.add("selected");
mode=3*(i+1);
});
quickStart(mode);
}


resetButton.addEventListener("click",function(){
quickStart(mode);
});


for(var i = 0 ; i < mode ; ++ i){
	squares[i].style.backgroundColor=colors[i];

//click Listener to square
squares[i].addEventListener("click",function(){
        
        var clickedColor=this.style.backgroundColor;
       
        if(clickedColor==pickedColor){
        	changeColors(pickedColor);
        	resetButton.textContent="Play Again?"
        	
       }       
        else{
            this.style.backgroundColor="#232323"; 
        	messageDisplay.textContent="TRY AGAIN";
        }
});
}

function changeColors(color){
	messageDisplay.innerHTML="CORRECT!";
	h1.style.backgroundColor=color;
	for(var i = 0 ; i < mode ; ++ i ){
		squares[i].style.backgroundColor=color;
	}
}

function pickColor(mode) {
	var random = Math.floor(Math.random()*mode); //between 0 and 1
   return colors[random];
}

function generateRandomColors(num) {
//retun num number of random colors
var arr = [];
for(var i = 0 ; i < num ; ++ i ) {
arr.push(randomColor());
}
return arr;
}


function randomColor() {
//pick r g b 
var r = Math.floor(Math.random()*256);
var g = Math.floor(Math.random()*256);
var b = Math.floor(Math.random()*256);
return "rgb("+r+", "+g+", "+b+")";
} 

function quickStart(mode){
	
messageDisplay.textContent="";
resetButton.textContent="NEW COLORS";
colors = generateRandomColors(mode); 
pickedColor = pickColor(mode);
colorDisplay.textContent=pickedColor; 

for(var i = 0 ; i < mode ; ++ i )
squares[i].style.backgroundColor=colors[i];

for(var i = mode ; i<6 ; ++ i )
	squares[i].style.backgroundColor="#232323";

h1.style.backgroundColor="steelblue";
}