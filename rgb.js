var num = 6; //The number of squares
var count = 0; //try counter
var display = 2; 
var color = arrgenerator(num);
var selected = selectcolor();
var squares = document.querySelectorAll(".square");
var span = document.querySelector("span");
var p = document.querySelector("#p");
var h1 = document.querySelector("h1");
var reset = document.querySelector(".reset");
var bttn = document.querySelectorAll(".btn");	
	span.textContent = selected;
	create();
	verify();
	buttons();
	//RESET BUTTON
	reset.addEventListener("click",function()
	{
		changer();
	});
//SETTING BG OF THE SQAURES 
function create()
{
	for (var i = 0; i < color.length; i++) 
	{
		squares[i].style.background = color[i];
	}
}
// TO CHECK IF THE PICKED COLOR IS CORRECT OR NOT
function verify()
{		
	for (var i = 0; i < color.length; i++) 
	{
		squares[i].addEventListener("click", function()
		{
			count++;
			if (this.style.background==selected && count <3) 
			{
				win();
			}

			else if (this.style.background==selected && count==3) 
			{
				win();
			}
			else if(count >= 3) 
			{
				lose();
			}
			else
			{
				this.style.background= "#232323";
				p.style.color = "red";
				if(display == 2)
					p.textContent = "you have "+ display+ " more tries left";
				else if(display == 1)
					p.textContent = "you have "+ display +" more try left";
				display--;
			}
		});	
	}
}
function lose()
{
	for (var i = 0; i < color.length; i++) 
	{
		squares[i].style.background = selected;
		p.textContent = "The color is";
		p.style.color = "red";
	}
	reset.textContent = "Play again?"
	h1.style.background = selected;
	reset.textContent = "NEW COLORS";
}
function win()
{
	for (var i = 0; i < color.length; i++) 
	{
		squares[i].style.background = selected;
	}
	p.textContent = "You WIN";
	p.style.color = "green";
	reset.textContent = "Play again?"
	h1.style.background = selected;
}
//RANDOM RGB GENERATOR
function randomcolor()
{
	var red = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var rgb = "rgb("+red+", "+green+", "+blue +")";
	return rgb;
}
function selectcolor()
{
	var random = Math.floor(Math.random() * color.length);
	return color[random];

}
// RANDOM COLOR ARRAY GENERATOR
function arrgenerator(number)
{
	var array = [];
	for (var i = 0; i < number; i++) 
	{	
		array.push(randomcolor());
	}
	return array;

}
function buttons()
{
	for(var i = 0; i < bttn.length; i++)
	{
		bttn[i].addEventListener("click", function()
		{
		bttn[0].classList.remove("selected");
		bttn[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "EASY" ? num = 3: num = 6;
			changer();
		});
	}
}
function changer()
{
	color = arrgenerator(num);
	selected = selectcolor();
	span.textContent = selected;
	reset.textContent = "NEW COLORS";
	p.textContent = "";
	count= 0;
	display =2;			
	for(var i = 0; i < squares.length; i++)
	{
		if(color[i])
		{
			squares[i].style.display = "block"
			squares[i].style.background = color[i];
		}
		else 
		{
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
}