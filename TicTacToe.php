<!Doctype html5>
<html>
<head>
	<title>Tic Tac Toe</title>
	<link rel="stylesheet" type="text/css" href="TicTacToe.css">
	
</head>
<body>

	<?php 
		$player1="Player 1 :";
		$player2="Player 2 :";
		if($_POST["player1_name"]!="")	{				//if user cancels the prompt,then default name will be player1
			$player1=$_POST["player1_name"]. " :";
		}
		if($_POST["player2_name"]!="")	{				//if user cancels the prompt,then default name will be player1
			$player2=$_POST["player2_name"]. " :";
		}
		
	?>

	<h1>Tic Tac Toe</h1>   <!--heading as Name of game-->
	<nav id="players">      <!--this navigation contains playes name,score,newgame button and reset wins button-->
		<div class="pname"><h2 id="p1name"><?php echo $player1;?></h2></div>
		<div class="pscore"><h2 id="p1score">0</h2></div>
		<div class="pname"><h2 id="p2name"><?php echo $player2;?></h2></div>
		<div class="pscore"><h2 id="p2score">0</h2></div>
		<div class="ties"><h2 id="tie">Ties :</h2></div>
		<div class="tieScore"><h2 id="tieScore">0</h2></div>
		<button id="newGame" type="button" onclick="newGame()">New Game</button>
		<button id="resetWins" type="button" onclick="resetButton()">Reset Wins</button>
		<h2 id="turn">It's Player1's turn to go</h2>
	</nav>
	
<section id="parent">		<!--This section is for 9 boxes of tic tac toe-->
	<nav id="div00" onclick="TicTacToe('img00')">   <!--Every box is a nav which contains an img-->
		<img id="img00" src="#" alt="00">			<!--top-right box is named as div00 then div01 and so on....-->
	</nav>

	<nav id="div01" onclick="TicTacToe('img01')">
		<img id="img01" src="#" alt="01">
	</nav>

	<nav id="div02" onclick="TicTacToe('img02')">
		<img id="img02" src="#" alt="02" >
	</nav>
	<nav id="div10" onclick="TicTacToe('img10')">
		<img id="img10" src="#" >
	</nav>

	<nav id="div11" onclick="TicTacToe('img11')">
		<img id="img11" src="#" >
	</nav>
	
	<nav id="div12" onclick="TicTacToe('img12')">
		<img id="img12" src="#" >
	</nav>

	<nav id="div20" onclick="TicTacToe('img20')">
		<img id="img20" src="#" alt="20" >
	</nav>

	<nav id="div21" onclick="TicTacToe('img21')">
		<img id="img21" src="#" alt="21">
	</nav>

	<nav id="div22" onclick="TicTacToe('img22')">
		<img id="img22" src="#" alt="22">
	</nav>
</section>


<script src="tic tac toe.js"></script>

</body>
</html>






