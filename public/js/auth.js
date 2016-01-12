$(document).ready(function() {
	// console.log("auth.js is working");

	// TO SHOW OR HIDE NAV-BTNS
	function checkAuth() {
		$.get('/current-user', function (data) {
			console.log(data);
			console.log(data.userId);
			if (data.userId || data.cookieId) {
				$("#sign-up-btn").hide();
				$("#log-in-btn").hide();
				$("#sign-up-modal").modal('hide');
				$('#log-in-modal').modal('hide');
				$("#log-out-btn").show();
				$("#trip-btn").show();
			} else {
				$("#sign-up-btn").show();
				$("#log-in-btn").show();
				$("#log-out-btn").hide();
				$("#trip-btn").hide();
			}
		});
	}

	checkAuth();

	// SIGN UP (CREATE NEW USER)
	$('#signup-form').submit(function (e) {
		e.preventDefault();
		var data = $(this).serialize();
		// console.log(data);

		$.ajax({
			url: '/api/users',
			type: 'POST',
			data: data
		})
		.done(function(data){
			console.log("user created", data);
			checkAuth();
			// console.log("after");
		})
		.fail(function(data){
			console.log('fail to create');
		});
	});

	// LOGIN (SAVED USER)
	$('#login-form').on('submit', function (e) {
		e.preventDefault();
		var user = $(this).serialize();
		console.log(user);

		$.post('/userlogin', user, function (data) {
			checkAuth();
		})

		.success(function (user) {
			console.log('logged in', user._id);
			// window.location.href = "/";
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
			window.location.href = "/";
			$("#sign-up-btn").show();
			$("#log-in-btn").show();
			$("#log-out-btn").hide();
			$("#trip-btn").hide();
		})
		.fail(function(data){
			console.log("failed to log out");
		});
	});

});



























