function show_user() {
	alert(localStorage.getItem("username");
}
function add_user() {
	let username = prompt("Enter your new username > ");
	localStorage.removeItem("username");
	localStorage.setItem("username", username);
	let p = document.getElementById("username");
	let message = `username ${username} has been saved`;
	p.innerText = message;
	p.style.color = "green";
	p.style.textAlign = "center";
  
}

function remove_user(){
	localStorage.removeItem("username");
	alert("You have been signed out! Refresh the page to see the changes");
	let p = document.getElementById("username");
	let message = '&nbsp;';
	p.innerHTML = message;
}
