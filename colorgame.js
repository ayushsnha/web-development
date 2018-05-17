function getRandomInt(min, max) {
    return String(Math.floor(Math.random() * (max - min + 1)) + min);
}
var randNo=[];
for(var i=0;i<18;i++)
{
	 randNo[i]=getRandomInt(0, 255);
}
var colors=[]

for(var i=0;i<6;i++)
{
	 var j=0+i
		 colors[i]="rgb("+randNo[j]+", "+randNo[j+i+3]+", "+randNo[17-2*i]+")";
}


// var colors= [
// 			"rgb(255, 0, 0)",
// 			"rgb(255, 255, 0)",
// 			"rgb(255, 255, 255)",
// 			"rgb(0, 255, 255)",
// 			"rgb(0, 0, 255)",
// 			"rgb(255, 0, 255)"
// 			]

var squares= document.querySelectorAll(".square");
var pickedColor=colors[getRandomInt(0, 5)];
var colorDisplay=document.querySelector("span"); 

colorDisplay.textContent=pickedColor;
for(var i=0; i<squares.length; i++)
{
	squares[i].style.backgroundColor=colors[i];
	squares[i].addEventListener("click",function(){
		var clickedColor=this.style.backgroundColor;
		if(clickedColor===pickedColor)
		{
			changeColor(pickedColor);
		}
		else
		{
			this.style.backgroundColor="#232323";
		}
	});
}


function changeColor(h)
{

	for(var i=0; i<squares.length; i++)
	{
		squares[i].style.backgroundColor=h;
	}



}
