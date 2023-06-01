<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ include file="../layout/zblogheader.jsp" %>

<div class="container mt-3">
  <h2>회원가입 페이지, 환영합니다</h2>
	<form>
		<div class="mb-3 mt-3">
			<label for="username">Username:</label> <input type="text"
				class="form-control" id="username" placeholder="Enter username"
				name="email">
		</div>
		<div class="mb-3 mt-3">
			<label for="email">Email:</label> <input type="email"
				class="form-control" id="email" placeholder="Enter email"
				name="email">
		</div>
		<div class="mb-3">
			<label for="pwd">Password:</label> <input type="password"
				class="form-control" id="password v" placeholder="Enter password"
				name="pswd">
		</div>
		<button id="btn-save" class="btn btn-primary">회원가입</button>
	</form>
</div>

<script src="/js/user.js">
</script>
<%@ include file="../layout/zblogfooter.jsp" %>