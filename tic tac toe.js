/*var player1="Player 1";
var player2="Player 2";
*/
var turn=1;
var m00='',m01='',m02='',m10='',m11='',m12='',m20='',m21='',m22='';

var check=[0,0,0,0,0,0,0,0,0];
var p1score=0,p2score=0,tieScore=0;
/*var x=prompt("Enter Player1's name-");*/

var allboxes=0;  //tie will occur only after all the boxes all accupied
/*if(x!="")	{				//if user cancels the prompt,then default name will be player1
	player1=x;
	document.getElementById("p1name").innerHTML=player1;
	document.getElementById("turn").innerHTML="It's "+ player1+"'s turn to go-"; 		//first die will be of player1 
}*/
/*x=prompt("Enter player2's name-");*/
/*if(x!="")	{
	player2=x;
	document.getElementById("p2name").innerHTML=player2;
}*/
var telCheckWinToStop=0;		/*it is used as a flag for not incrementing pscores more than once*/
function jaam(){				/*once a player wins, it will prevent to click on any  box...*/
	var i=0;
	for(i=0;i<9;i++)
		check[i]=1;
	telCheckWinToStop=1;
}
function TicTacToe(index)	{		/*every click on any box will invoke this function*/
	clicked(index);					/*it will show image of x or o and prevents reclicking on the same box*/
	var flag=checkWins();			/*it will check if a player won or not.*/
	if(flag==1)
		jaam();
}


function clicked(index){
	switch(index)	
	{
		case 'img00':
		if(check[0]==1)
			return;
		m00=turn==1?'x':'o';
		check[0]=1;
		allboxes++;
		break;
		
		case 'img01':
		if(check[1]==1)
			return;
		m01=turn==1?'x':'o';
		check[1]=1;
		allboxes++;
		break;
		
		case 'img02':
		if(check[2]==1)
			return;
		m02=turn==1?'x':'o';
		check[2]=1;
		allboxes++;
		break;
		
		case 'img10':
		if(check[3]==1)
			return;
		m10=turn==1?'x':'o';
		check[3]=1;
		allboxes++;
		break;
		
		case 'img11':
		if(check[4]==1)
			return;
		m11=turn==1?'x':'o';
		check[4]=1;
		allboxes++;
		break;
		
		case 'img12':
		if(check[5]==1)
			return;
		m12=turn==1?'x':'o';
		check[5]=1;
		allboxes++;
		break;
		
		case 'img20':
		if(check[6]==1)
			return;
		m20=turn==1?'x':'o';
		check[6]=1;
		allboxes++;
		break;
		
		case 'img21':
		if(check[7]==1)
			return;
		m21=turn==1?'x':'o';
		check[7]=1;
		allboxes++;
		break;
		case 'img22':
		if(check[8]==1)
			return;
		m22=turn==1?'x':'o';
		check[8]=1;
		allboxes++;
		break;
	}
	
	if(turn==1)
	{
		document.getElementById(index).style.display="block";
		document.getElementById(index).src="xx.png";
		document.getElementById("turn").innerHTML="It's "+player2+"'s turn to go-";
		turn=0;
		return;
	}
	if(turn==0)
	{
		document.getElementById(index).style.display="block";
		document.getElementById(index).src="Sundanese_digit_0.png";
		document.getElementById("turn").innerHTML="It's "+player1+"'s turn to go-";
		turn=1;
		
	}
}

function checkWins(){
	if(telCheckWinToStop==1)
		return(0);
	
	if((m00=='x'&&m01=='x'&&m02=='x')||(m00=='o'&&m01=='o'&&m02=='o'))
	{
		if(m00=='x')
		{
			p1score++;
			document.getElementById("p1score").innerHTML=p1score;
		}
		if(m00=='o')
		{
			p2score++;
			document.getElementById("p2score").innerHTML=p2score;
		}
		return(1);
	}
	if((m10=='x'&&m11=='x'&&m12=='x')||(m10=='o'&&m11=='o'&&m12=='o'))
	{
		if(m10=='x')
		{
			p1score++;
			document.getElementById("p1score").innerHTML=p1score;
		}
		if(m10=='o')
		{
			p2score++;
			document.getElementById("p2score").innerHTML=p2score;
		}
		return(1);
	}

	if((m20=='x'&&m21=='x'&&m22=='x')||(m20=='o'&&m21=='o'&&m22=='o'))
	{
		if(m20=='x')
		{
			p1score++;
			document.getElementById("p1score").innerHTML=p1score;
		}
		if(m20=='o')
		{
			p2score++;
			document.getElementById("p2score").innerHTML=p2score;
		}
		return(1);
	}
	
	if((m00=='x'&&m11=='x'&&m22=='x')||(m00=='o'&&m11=='o'&&m22=='o'))
	{
		if(m00=='x')
		{
			p1score++;
			document.getElementById("p1score").innerHTML=p1score;
		}
		if(m00=='o')
		{
			p2score++;
			document.getElementById("p2score").innerHTML=p2score;
		}
		return(1);
	}

	if((m02=='x'&&m11=='x'&&m20=='x')||(m02=='o'&&m11=='o'&&m20=='o'))
	{
		if(m02=='x')
		{
			p1score++;
			document.getElementById("p1score").innerHTML=p1score;
		}
		if(m02=='o')
		{
			p2score++;
			document.getElementById("p2score").innerHTML=p2score;
		}
		return(1);
	}
	
	if((m00=='x'&&m10=='x'&&m20=='x')||(m00=='o'&&m10=='o'&&m20=='o'))
	{
		if(m00=='x')
		{
			p1score++;
			document.getElementById("p1score").innerHTML=p1score;
		}
		if(m00=='o')
		{
			p2score++;
			document.getElementById("p2score").innerHTML=p2score;
		}
		return(1);
	}
	
	if((m01=='x'&&m11=='x'&&m21=='x')||(m01=='o'&&m11=='o'&&m21=='o'))
	{
		if(m01=='x')
		{
			p1score++;
			document.getElementById("p1score").innerHTML=p1score;
		}
		if(m01=='o')
		{
			p2score++;
			document.getElementById("p2score").innerHTML=p2score;
		}
		return(1);
	}
	
	if((m02=='x'&&m12=='x'&&m22=='x')||(m02=='o'&&m12=='o'&&m22=='o'))
	{
		if(m02=='x')
		{
			p1score++;
			document.getElementById("p1score").innerHTML=p1score;
		}
		if(m02=='o')
		{
			p2score++;
			document.getElementById("p2score").innerHTML=p2score;
		}
		return(1);
	}
	if(allboxes==9)
	{
		tieScore++;
		document.getElementById("tieScore").innerHTML=tieScore;
		allboxes=0;
	}
}

function newGame()
{
	m00='';m01='';m02='';m10='';m11='';m12='';m20='';m21='';m22='';
	allboxes=0;
	telCheckWinToStop=0;
	
	var i=0;
	for(i=0;i<9;i++)
		check[i]=0;
	document.getElementById("img00").src="#";
	document.getElementById("img00").style.display="none";
	
	document.getElementById("img01").src="#";
	document.getElementById("img01").style.display="none";
	
	document.getElementById("img02").src="#";
	document.getElementById("img02").style.display="none";
	
	document.getElementById("img10").src="#";
	document.getElementById("img10").style.display="none";
	
	document.getElementById("img11").src="#";
	document.getElementById("img11").style.display="none";
	
	document.getElementById("img12").src="#";
	document.getElementById("img12").style.display="none";
	
	document.getElementById("img20").src="#";
	document.getElementById("img20").style.display="none";
	
	document.getElementById("img21").src="#";
	document.getElementById("img21").style.display="none";
	
	document.getElementById("img22").src="#";
	document.getElementById("img22").style.display="none";
}
