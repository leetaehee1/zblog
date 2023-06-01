

let userObject = {
    init: function(){
        let _this = this;

        $("#btn-save").on("click",() =>{
            _this.insertUser();
        });
    },

   insertUser: function() {
		alert("회원가입 요청됨");
		// 회원정보 추출
		let user = {
			username: $("#username").val(),
			password: $("#password").val(),
			email: $("#email").val()
		}
		
		console.log(user);

		$.ajax({
			type: "POST",
			// 시험으로는 /user로 함
			url: "/auth/insertUser",
			data: JSON.stringify(user),
			contentType: "application/json; charset=utf-8"
		}).done(function(response) {
			console.log(response);
			alert(response);
			location = "/";
		}).fail(function(error) {
			alert("!/js/user.js에서 에러발생: " + error);
		});
	}
}

userObject.init();