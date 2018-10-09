var picDiv = document.getElementsByTagName("div")[0]; //targets the first div and only

var pic1 = document.getElementsByTagName("img")[0]; //targets the first image
var pic2 = document.getElementsByTagName("img")[1]; //targets the second image
var pic3 = document.getElementsByTagName("img")[2]; //targets the third image on the page

//this functions sets a new attribute value for the images
function changer(pic, attr, attrValue) {
	pic.setAttribute(attr, attrValue);
}

//this function sets a new attribute value for the div which contains the images which shows transition/movement
function idChanger(actudalId, attrID, attrIdValue) {
	document.getElementById(actudalId).setAttribute(attrID, attrIdValue);
}

//this is where the images actually start moving
function slideImgs () {
	//checks the id of the div and changes attribute of the images and div based on the result from if/else statement
	if (picDiv.id == "canCanGirl") {
		function toTheRight () {
			idChanger("canCanGirl", "Id", "canCanGirlRight");

			changer(pic1, "class", "can1");
			changer(pic2, "class", "can1");
			changer(pic3, "class", "can1");
		}
		setTimeout(toTheRight, 100); 
	}  else if (picDiv.id == "canCanGirlRight") {
		function toTheLeft () {
			idChanger("canCanGirlRight", "Id", "canCanGirl");

			changer(pic1, "class", "can2");
			changer(pic2, "class", "can2");
			changer(pic3, "class", "can2");
		}
		setTimeout(toTheLeft, 100);
	}  else {
		return false;
	}
}

slideImgs(); //calls the function to slide the images across by changing attributes in CSS
setInterval(slideImgs, 4100); //then calls the function after every 4.1 seconds


//checks the src attribute of the pictures and then changes them
function changePic () {

	if (pic1.getAttribute('src') == "img/can1.jpg") {
		changer(pic1, "src", "img/can2.jpg");
		changer(pic2, "src", "img/can2.jpg");
		changer(pic3, "src", "img/can2.jpg");
	} else if (pic1.getAttribute('src') == "img/can2.jpg") {
		changer(pic1, "src", "img/can1.jpg");
		changer(pic2, "src", "img/can1.jpg");
		changer(pic3, "src", "img/can1.jpg");
	} else {
		return false;
	}

}

setInterval(changePic, 500); //calls changePic every 5 seconds


//the original audio is from: https://www.youtube.com/watch?v=4Diu2N8TGKA
var canCanAud = new Audio();
canCanAud.src = "audio/cancan.mp3";

// this solution loops the music and it is from: http://stackoverflow.com/questions/3273552/html5-audio-looping
canCanAud.addEventListener('ended', function() { //continously plays music even after when it is done
    this.currentTime = 0;
    this.play();
}, false);
canCanAud.play();