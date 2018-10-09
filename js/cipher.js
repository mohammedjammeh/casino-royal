//firstly checks if textarea is empty or not
var userInput;
function inputChecker () {
	userInput = document.getElementsByTagName("textarea")[0].value;
	if (userInput === "") {
		document.getElementsByTagName("p")[0].innerHTML = "Please enter a message!";
	} else {
		document.getElementsByTagName("p")[0].innerHTML = "";
	}

}


//encryption
var encryptBtn = document.getElementsByTagName("button")[0];
	//original encryption method from solution: http://stackoverflow.com/questions/33084862/js-how-to-shift-each-letter-in-the-given-string-n-places-down-in-the-alphabet
function encrypt() {
	inputChecker();
    userInput = userInput.toLowerCase();
    var result = '';
    var charcode = 0;

    for (i = 0; i < userInput.length; i++) {
        charcode = (userInput[i].charCodeAt() + 5);
        result += String.fromCharCode(charcode); //converts charcode value into a character
    }
    
	document.getElementsByTagName("p")[1].innerHTML = result;
	
}

encryptBtn.addEventListener('click', encrypt, false);


//decryption
var decryptBtn = document.getElementsByTagName("button")[1];

function decrypt() {
	inputChecker();
	document.getElementsByTagName("p")[1].innerHTML = userInput;
}

decryptBtn.addEventListener('click', decrypt, false);