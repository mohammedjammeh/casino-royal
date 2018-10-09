/***************************
	FRUIT MACHINE PAGE
***************************/
// The array holds all the images to be used by the spinning machine
var fruits = [ "img/apple.jpg", "img/bananas.jpg", "img/pineapple.jpg", "img/plum.jpg" ];

//the play function is an event that takes place when fruit machine is spinned/clicked

function play () {
	document.getElementsByTagName("h2")[1].innerHTML = ""; //resets user's message
	document.getElementsByTagName("p")[0].setAttribute("class", "encouragement"); //resets player encouragement

	//the code below changes the source of the image at every certain time repeatedly and causes the images to spin accordingly
	//the first image in the array to be spinned 
	var currentImagecounter = 0;
	function firstPic() {
		if (currentImagecounter >= fruits.length) {
			currentImagecounter = 0;
		}
		document.getElementsByTagName("img")[0].setAttribute("src", fruits[currentImagecounter]);
		currentImagecounter++;
	}

	//the second image in the array to be spinned 
	var currentImagecounter1 = 1;
	function secondPic() {
		if (currentImagecounter1 >= fruits.length) {
			currentImagecounter1 = 0;
		}
		document.getElementsByTagName("img")[1].setAttribute("src", fruits[currentImagecounter1]);
		currentImagecounter1++;
	}

	//the third image in the array to be spinned 
	var currentImagecounter2 = 2;
	function thirdPic() {
		if (currentImagecounter2 >= fruits.length) {
			currentImagecounter2 = 0;
		}
		document.getElementsByTagName("img")[2].setAttribute("src", fruits[currentImagecounter2]);
		currentImagecounter2++;
	}

	//a function that generates random time (seconds) between 1 and 3
	function randomTime() {
		var randomNumber = Math.floor(Math.random() * 3);
		return randomNumberInSecs = randomNumber * 100;
	}

	var speed1 = randomTime(); //random second between 1 and 3 for image 1 (index 0)
	var speed2 = randomTime(); //random second between 1 and 3 for image 2 (index 1)
	var speed3 = randomTime(); //random second between 1 and 3 for image 3 (index 2)

	//calls the functions that spin the images, then spins them at random speeds, and saves this in each in a variable
	var firstPicSpeed =  setInterval(firstPic, speed1); 
	var secondPicSpeed = setInterval(secondPic, speed2);
	var thirdPicSpeed = setInterval(thirdPic, speed3);


	//stops image 1 from spinning
	function firstPicStop () { 
		clearInterval(firstPicSpeed);
	}

	//stops image 2 from spinning
	function secondPicStop () {
		clearInterval(secondPicSpeed);
	}

	//stops image 3 from spinning
	function thirdPicStop () {
		clearInterval(thirdPicSpeed);
	}

	//stops the images after each other, this happens after the images have spinned at different speeds to always generate different results
	setTimeout(firstPicStop, 1000);  
	setTimeout(secondPicStop, 2000);
	setTimeout(thirdPicStop, 3000);




	//determines if player is a winner or not
	function winnerOrLoser () {
		//stores the sources of the images have been randomly selected
		var picOneSrc = document.getElementsByTagName("img")[0].src; 
		var picTwoSrc = document.getElementsByTagName("img")[1].src; 
		var picThreeSrc = document.getElementsByTagName("img")[2].src; 

		if (picOneSrc === picTwoSrc && picTwoSrc === picThreeSrc) { //if all images have similar sources, then player is a winner
			document.getElementsByTagName("h2")[1].innerHTML = "JACKPOT!";
			var jackpotAud = new Audio(); 
			jackpotAud.src = "audio/jackpot.wav";
			jackpotAud.play();
		} else if (picOneSrc === picTwoSrc || picTwoSrc === picThreeSrc || picThreeSrc === picOneSrc) { //if two sources match, player is unlucky but still loeses
			document.getElementsByTagName("h2")[1].innerHTML = "Unlucky!";
			var unluckyAud = new Audio();
			unluckyAud.src = "audio/ricochet.wav";
			unluckyAud.play();
			document.getElementsByTagName("p")[0].setAttribute("class", "fullEncouragement");
		} else { //if no sources match, then player is a loser
			document.getElementsByTagName("h2")[1].innerHTML = "You Lost!";
			var lostAud = new Audio();
			lostAud.src = "audio/ricochet.wav";
			lostAud.play();
			document.getElementsByTagName("p")[0].setAttribute("class", "fullEncouragement");
		}

	}

	//the winner/loser is determined after 4 seconds
	setTimeout(winnerOrLoser, 4000);

	//when play button gets clicked(handle spinned), change the id of button to give it new CSS properties such as transitions to show movement of handle
	playBtn.setAttribute("id","playBtnClick");

	//play sould when play button is clicked/handle is spinned
	var spinAud = new Audio();
	spinAud.src = "audio/wheelspin.wav";
	spinAud.play();

	//finnaly, refresh page after 8 seconds
	setTimeout(function handleRest () {
    	playBtnClick.setAttribute("id","playBtn");
	}, 4500);
}



var PlayBtn = document.getElementById("playBtn"); //gets the play button or handle..
playBtn.addEventListener('click', play, false); //run the play function when playBtn/handle gets spinned