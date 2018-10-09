var images = ["img/dice_zero.png", "img/dice_one.png", "img/dice_two.png", "img/dice_three.png", "img/dice_four.png", "img/dice_five.png", "img/dice_six.png"]; //list of image sources stored in the img folder
var playerBalance = 1000; //player's starting balance
document.getElementsByTagName("p")[1].innerHTML = "F" + playerBalance;

//the function below runs after player clicks play
function rollDice () {
	var diceInput = document.getElementById("roll_dice").value; //collects player's dice value between 1 and 6
	var stakeInput = document.getElementById("stake_value").value; //collects player's stake value which should always be equal to or less than player's balance
	var randomNumber; 

	//generates random number to randomly to choose a dice
	function randomDice () {
		randomNumber = Math.floor(Math.random() * 6) + 1;
		document.getElementsByTagName("img")[0].setAttribute("src", images[randomNumber]);
		return randomNumber;
	}


	//lines below to check if player's entry value have met the entry requirements of the input boxes
	if (diceInput === "" || stakeInput === "") { 
		document.getElementsByTagName("p")[0].innerHTML = "Please fill all fields.";
		return false;
	} else if (diceInput < 1 || diceInput > 6 ) {
		document.getElementsByTagName("p")[0].innerHTML = "Please enter a dice value between 1 and 6.";
		return false;
	} else if (parseInt(stakeInput) > playerBalance) {
		document.getElementsByTagName("p")[0].innerHTML = "You can only stake F" + playerBalance + " or lower.";
		return false;
	} else if (parseInt(stakeInput) <= 0 ) {
		document.getElementsByTagName("p")[0].innerHTML = "Please stake a value more than F1.";
		return false;
	} else if (playerBalance < 0) {
		document.getElementsByTagName("p")[0].innerHTML = "Sorry, but you have to top again.";
		return false;
	} else if ( isNaN(diceInput) ) {
		document.getElementsByTagName("p")[0].innerHTML = "Please enter a number or a dice value between 1 and 6.";
		return false;
	} else if ( isNaN(stakeInput) ) {
		document.getElementsByTagName("p")[0].innerHTML = "Please enter a money value in NUMBERS.";
		return false;
	} else if (diceInput != parseInt(diceInput) || stakeInput != parseInt(stakeInput)) {
		document.getElementsByTagName("p")[0].innerHTML = "Please only input whole numbers.";
		return false;
	} else {
		document.getElementsByTagName("p")[0].innerHTML = "";
	}

	//runs function to generate a random dice
	randomDice ();

	//checks if player has correctly guessed dice value and rewards the player based on the his/her results
	if (parseInt(diceInput) === randomNumber) {
		playerBalance = (stakeInput * 5) + playerBalance;
		document.getElementsByTagName("p")[1].innerHTML = "F" + playerBalance;
	} else {
		playerBalance = playerBalance - stakeInput;
		document.getElementsByTagName("p")[1].innerHTML = "F" + playerBalance;
	}

}

//gets the play button and runs the function above when it is clicked
var submitDice = document.getElementById("submit_dice");
submitDice.addEventListener('click', rollDice, false);

