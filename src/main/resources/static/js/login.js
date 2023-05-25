function userlogin() {
	alert("회원가입 요청됨");
	
	let loguser={
		username: document.getElementById("username").value,
		password: document.getElementById("pwd").value,
	}
	
	console.log(loguser);
	
	// POST localhost:8080/user JSON(newuser)
	var ajaxrequest = new XMLHttpRequest();
	ajaxrequest.open('POST', '/auth/login');
	ajaxrequest.onreadystatechange = function() {
		if(ajaxrequest.readyState == 4) {
			response = ajaxrequest.responseText;
			alert(response);
		}
	}
	ajaxrequest.setRequestHeader("content-type", "application/json");
	ajaxrequest.send(JSON.stringify(loguser));
}

let btnlogin = document.getElementById("btn-login");
btnlogin.onclick = userlogin;