var t=document.querySelector("button");
var ispurple=false;
var c=0;
var h=document.querySelector("body");
t.addEventListener("click",function(){
	if(ispurple==false)
	
	h.style.background="white";
	ispurple=!ispurple;c++;}
else
{h.style.background="purple";
ispurple=!ispurple;c++;}


});

