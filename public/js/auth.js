console.log('auth.js working');
$(document).ready(function() {

	// CREATE NEW USER [x]
	$('#signup-form').submit(function (e) {
		e.preventDefault();
		var data = $(this).serialize();
		console.log(data);

		$.ajax({
			url: '/api/users',
			type: 'POST',
			data: data
		})
		.done(function(data){
			console.log("user created", data);
			checkAuth();
			console.log("after");
		})
		.fail(function(data){
			console.log('fail to create');
		});
	});

	// LOGIN
	$('#login-form').on('submit', function (e) {
		e.preventDefault();
		var user = $(this).serialize();
		console.log(user);

		$.post('/userlogin', user, function (data) {
			checkAuth();
		})

		.success(function (data) {
			console.log('logged in', data);
			//window.location.href = "/";
		})
		.error(function (data) {
			console.log(data.responseText);
			alert("wrong username or password");
		});

	});

	// LOGOUT
	$('#log-out-btn').on('click', function (e) {
		e.preventDefault();

		$.post('/logout', function (data) {
		})
		.success(function(data){
			console.log("log out form submitted to server");
			$("#sign-up-btn").show();
			$("#log-in-btn").show();
			$("#log-out-btn").hide();
		})
		.fail(function(data){
			console.log("failed to log out");
		});
	});

	function checkAuth() {
		$.get('/current-user', function (data) {
			if (data.user || data.cookie) {
				$("#sign-up-btn").hide();
				$("#log-in-btn").hide();
				$("#log-out-btn").show();
				$("#sign-up-modal").modal('hide');
				$('#log-in-modal').modal('hide');
			} else {
				$("#sign-up-btn").show();
				$("#log-in-btn").show();
				$("#log-out-btn").hide();
			}
		});
	}

	checkAuth();

});



























