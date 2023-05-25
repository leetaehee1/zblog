function usersubmit() {
	alert("회원가입 요청됨");
	
	let newuser={
		username: document.getElementById("username").value,
		password: document.getElementById("pwd").value,
		email: document.getElementById("email").value
	}
	
	console.log(newuser);
	
	// POST localhost:8080/user JSON(newuser)
	var ajaxrequest = new XMLHttpRequest();
	ajaxrequest.open('POST', '/user');
	ajaxrequest.onreadystatechange = function() {
		if(ajaxrequest.readyState == 4) {
			response = ajaxrequest.responseText;
			alert(response);
		}
	}
	ajaxrequest.setRequestHeader("content-type", "application/json");
	ajaxrequest.send(JSON.stringify(newuser));
}

let btnsave = document.getElementById("btn-save");
btnsave.onclick = usersubmit;