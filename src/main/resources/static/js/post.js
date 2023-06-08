let postObject = {
	init: function() {
		let _this = this;

		$("#btn-insertPost").on("click", () => {
			_this.insertPost();
		});
	},

	insertPost: function() {
		alert("포스트등록 요청됨");
		// 회원정보 추출
		let post = {
			title: $("#title").val(),
			content: $("#content").val()
		}
		
		console.log(post);

		$.ajax({
			type: "POST",
			url:"/post",  // 아직안되어있
			data: JSON.stringify(post),
			contentType: "application/json; charset=utf-8"
		}).done(function(response) {
			alert(response["data"]);
			location = "/";
		}).fail(function(error) {
			alert("!/js/post.js에서 에러발생: " + error);
		});
	},
}

postObject.init();