var aud=document.getElementById("speakNum");
function playWelcome()
{
	aud.play();
}
function playSound(val)
{
	switch(val)
	{
		case 0:
		document.getElementById("speakNum").src="0.mp3";
		break;
		case 1:
		document.getElementById("speakNum").src="1.mp3";
		break;
		case 2:
		document.getElementById("speakNum").src="2.mp3";
		break;
		case 3:
		document.getElementById("speakNum").src="3.mp3";
		break;
		case 4:
		document.getElementById("speakNum").src="4.mp3";
		break;
		case 5:
		document.getElementById("speakNum").src="5.mp3";
		break;
		case 6:
		document.getElementById("speakNum").src="6.mp3";
		break;
		case 7:
		document.getElementById("speakNum").src="7.mp3";
		break;
		case 8:
		document.getElementById("speakNum").src="8.mp3";
		break;
		case 9:
		document.getElementById("speakNum").src="9.mp3";
		break;
		case '.':
		document.getElementById("speakNum").src="14051033.mp3";
		break;
		case '+':
		document.getElementById("speakNum").src="14050944.mp3";
		break;
		case '-':
		document.getElementById("speakNum").src="14050959.mp3";
		break;
		case '*':
		document.getElementById("speakNum").src="14050974.mp3";
		break;
		case '/':
		document.getElementById("speakNum").src="14050991.mp3";
		break;
		case 'c':
		document.getElementById("speakNum").src="14050999.mp3";
		break;
		case '=':
		document.getElementById("speakNum").src="14051012.mp3";
		break;
	}
	var sound=document.getElementById("speakNum");
	sound.play();
}
var resultstr="";
var num1=0.0;
var num2=0.0;
var flag=0;
var sig="";
var decimal=0;
var decipos=0;
function equalsign()
{
	switch(sig)
	{
		case "+":
		document.getElementById("showResult").innerHTML=num1+num2;
		break;
		case "-":
		document.getElementById("showResult").innerHTML=num1-num2;
		break;
		case "*":
		document.getElementById("showResult").innerHTML=num1*num2;
		break;
		case "/":
		document.getElementById("showResult").innerHTML=num1/num2;
		break;
	}
	num1=0;
	num2=0;
	flag=0;
	resultstr="";
	decimal=0;
	decipos=0;
}

function number(val)
{
	if(decimal==0)
	{
		if(flag==0)
		num1=(num1*10)+val;
		if(flag==1)
		num2=(num2*10)+val;
	}
	if(decimal==1)
	{
		if(flag==0)
		{
			var i;
			for(i=0;i<decipos;i++){
			num1=num1*10; }
			num1=num1+val;
			for(i=0;i<decipos;i++)
			{ num1=num1/10; }
		    decipos++;
		}
		if(flag==1)
		{
			var i;
			for(i=0;i<decipos;i++)
			num2=num2*10;
			num2+=val;
			for(i=0;i<decipos;i++)
				num2/=10;
			decipos++;
		}
	}
}
function calc(val)
{
	
	resultstr+=val;
	document.getElementById("showResult").innerHTML=resultstr;
	if(val=="=")
	equalsign();
	
	if(val=="+"||val=="-"||val=="*"||val=="/")
	{
		flag=1;
		sig=val;
		decimal=0;
		decipos=0;
	}
	
	if((val>=0 && val<=9)||val==".")
	{
		if(val=="."&&decipos==0)
		{	
			decimal=1;
			decipos=1;
			return;
		}
		number(val);
	}
		
	if(val=="c")
		clear();
		
}


function clear()
{
	num1=0.0;
	num2=0.0;
	flag=0;
	sig="";
	resultstr="";
	document.getElementById("showResult").innerHTML=0;
	return;
}