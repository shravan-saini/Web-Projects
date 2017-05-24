var resultstr="";
var num1=0.0;
var num2=0.0;
var flag=0;
var sig="";

function calc(val)
{
	
	resultstr+=val;
	document.getElementById("result1").value=resultstr;
	if(val=="=")
	{
		switch(sig)
		{
			case "+":
			document.getElementById("result1").value=num1+num2;
			break;
			case "-":
			document.getElementById("result1").value=num1-num2;
			break;
			case "*":
			document.getElementById("result1").value=num1*num2;
			break;
			case "/":
			document.getElementById("result1").value=num1/num2;
			break;
		}
		num1=0;
		num2=0;
		flag=0;
		resultstr="";
	}
	
	if(val=="+"||val=="-"||val=="*"||val=="/")
	{
		flag=1;
		sig=val;
	}
	
	if((val>=0 && val<=9)||val==".")
	{
		if(flag==0)
			num1=(num1*10)+val;
		if(flag==1)
			num2=(num2*10)+val;
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
	document.getElementById("result1").value=0;
	return;
}