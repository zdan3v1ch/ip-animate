window.onload = function()
{
	slider1.init();
	setTimeout(function()
	{
		var hellopreloader = document.getElementById("hellopreloader_preload");
		fadeOut(hellopreloader);
	}
	,1000);

	let l1 = document.getElementById("logo");
    	l1.addEventListener("click", goUp);
			
	let s1 = document.getElementById("scrollToTop");
  		s1.addEventListener("click", goUp);

	let z1 = document.getElementById("zvuk");
  		z1.addEventListener("click", goPlay);

	let m1 = document.getElementById("for_play");
  		m1.addEventListener("click", goMult);
};

function fadeOut(el)
{
	el.style.opacity = 1;
	var interhellopreloader = setInterval(function()
	{
	el.style.opacity = el.style.opacity - 0.05;
		if (el.style.opacity <=0.05)
		{ 
			clearInterval(interhellopreloader);
			hellopreloader.style.display = "none";
		}
	},16);
}
					
	
var slider1 = 
{
	slides:['./pictures/ded/1.jpg','./pictures/ded/2.jpg','./pictures/ded/3.jpg','./pictures/ded/4.jpg'],
	frame:0,

	set: function(image) 
	{ 
		document.getElementById("slayder").style.backgroundImage = "url("+image+")";
		document.getElementById("slayder").style.backgroundPosition = "center";
		document.getElementById("slayder").style.backgroundSize = "100%";
	
	},
		
	init: function() 
	{ 
		this.set(this.slides[this.frame]);
	},

	left: function() 
	{ 
		this.frame--;
		if(this.frame < 0) this.frame = this.slides.length-1;
		this.set(this.slides[this.frame]);
	},

	right: function() 
	{ 
		this.frame++;
		if(this.frame == this.slides.length) this.frame = 0;
		this.set(this.slides[this.frame]);		
	}
};
	
	
window.onscroll = function() 
{
	var scrollElem = document.getElementById("scrollToTop");
	if (window.pageYOffset > 300)
	{
		scrollElem.style.visibility = "visible";
	}
	else 
	{
		scrollElem.style.visibility = "hidden";
	}
}
	
	 
function goUp() 
{
	var timeOut;	
	var top = Math.max(window.pageYOffset);

	if(top > 0) 
	{
		window.scrollBy(0,-30);
		timeOut = setTimeout('goUp()',20);
	} 
}
	
function goPlay() 
{
	var dir = document.getElementById("zvuk");
	var audio = document.querySelectorAll("audio");
	   
	if(audio[0].paused) 
	{
		audio[0].play();
		dir.style.backgroundImage = "url('./icons/on.png')";
	} 
	else
	{	
		audio[0].pause();
		dir.style.backgroundImage = "url('./icons/off.png')";
	}
}

function goMult() 
{
	var mmm = document.getElementById("multik");
	var mul = document.getElementById("for_play");

	mul.style.display = "none";
	mmm.style.backgroundImage = "url('./pictures/gotovo.gif')";
	mmm.style.display = "inline";
	mmm.style.width = "800px";
	mmm.style.height = "600px";
}
	
	
	