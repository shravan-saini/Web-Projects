var flag=0;
/*localStorage.p01="bgh";		//p[teamNo][PlayerNo]
localStorage.p11="";
localStorage.p21="";
localStorage.p31="";
localStorage.p41="";
localStorage.p51="";
localStorage.p61="";
localStorage.p71="";
localStorage.p81="";
localStorage.p91="";

localStorage.p02="";
localStorage.p12="";
localStorage.p22="";
localStorage.p32="";
localStorage.p42="";
localStorage.p52="";
localStorage.p62="";
localStorage.p72="";
localStorage.p82="";
localStorage.p92="";

*/
document.getElementById("list0").innerHTML=localStorage.p01+" vs "+localStorage.getItem("p02");
document.getElementById("list1").innerHTML=localStorage.getItem("p11")+" vs "+localStorage.getItem("p12");
document.getElementById("list2").innerHTML=localStorage.getItem("p21")+" vs "+localStorage.getItem("p22");
document.getElementById("list3").innerHTML=localStorage.getItem("p31")+" vs "+localStorage.getItem("p32");
document.getElementById("list4").innerHTML=localStorage.getItem("p41")+" vs "+localStorage.getItem("p42");
document.getElementById("list5").innerHTML=localStorage.getItem("p51")+" vs "+localStorage.getItem("p52");
document.getElementById("list6").innerHTML=localStorage.getItem("p61")+" vs "+localStorage.getItem("p62");
document.getElementById("list7").innerHTML=localStorage.getItem("p71")+" vs "+localStorage.getItem("p72");
document.getElementById("list8").innerHTML=localStorage.getItem("p81")+" vs "+localStorage.getItem("p82");
document.getElementById("list9").innerHTML=localStorage.getItem("p91")+" vs "+localStorage.getItem("p92");



function selectTeamButton()	{
	if(flag%2==0)
	document.getElementById("teamList").style.display="block";
	else
		document.getElementById("teamList").style.display="none";
	flag++;
}
sessionStorage.setItem("player1","Player 1");
sessionStorage.setItem("player2","Player 2");
function createNewTeam()	{
	var x=prompt("Enter Player1's name-");
	if(x!="")	{				/*if user cancels the prompt,then default name will be player1//first die will be of player1*/
								
		{
			localStorage.p91=localStorage.p81;localStorage.p81=localStorage.p71;
			localStorage.p71=localStorage.p61;localStorage.p61=localStorage.p51;
			localStorage.p51=localStorage.p41;localStorage.p41=localStorage.p31;
			localStorage.p21=localStorage.p11;localStorage.p11=localStorage.p01;
		}
		sessionStorage.setItem("player1",x);		 
		localStorage.p01=x;
	}
	x=prompt("Enter player2's name-");
	
	if(x!="")	{
		{
			localStorage.p92=localStorage.p82;localStorage.p82=localStorage.p72;
			localStorage.p72=localStorage.p62;localStorage.p62=localStorage.p52;
			localStorage.p52=localStorage.p42;localStorage.p42=localStorage.p32;
			localStorage.p22=localStorage.p12;localStorage.p12=localStorage.p02;
		}
		sessionStorage.setItem("player2",x);
		localStorage.p02=x;
	}
}