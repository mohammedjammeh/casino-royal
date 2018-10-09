/*************************
		INDEX PAGE
*************************/

//function to check if user has entered first and last name
function checkName() {
	var firstName = document.getElementById("first_name").value;
	var lastName = document.getElementById("last_name").value;

	if (firstName === "" || lastName === "") {
		alert("Please fill in all the fields!");
		return false;
	} else {
		localStorage.setItem("secondName", lastName); //stores user's second name even after page is refreshed
		document.getElementById("my_form").setAttribute("action", "welcome.html");
		return true;
	}	
	
}

//this code will run the chceckname function when user clicks submit button
var submitBtn = document.getElementById("submit_btn");
if(submitBtn) {
  submitBtn.addEventListener('click', checkName, false);
}









 


 


