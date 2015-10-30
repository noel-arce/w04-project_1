// console.log('auth.js working');
// $(document).ready(function() {

// 	// CREATE NEW USER [x]
// 	$('#signup-form').submit(function (e) {
// 		e.preventDefault();
// 		var user = $(this).serialize();
// 		//console.log(user);

// 		$.post('/users', user, function (data) {
			
// 		})
// 		.done(function (data) {
// 			console.log("user created", data);
// 			window.location.href = "/";
// 		})
// 		.fail(function (data) {
// 			console.log('fail to create');
// 		});
// 	});

// 	// LOGIN
// 	$('#login-form').on('submit', function (e) {
// 		e.preventDefault();

// 		var user = $(this).serialize();
// 		console.log(user);

// 		$.post('/userlogin', user, function (data) {
// 		})

// 		.success(function (data) {
// 			console.log('logged in', data);
// 			//window.location.href = "/";
// 		})
// 		.error(function (data) {
// 			console.log(data.responseText);
// 			alert("wrong username or password");
// 		});

// 	});

// 	// LOGOUT
// 	$('#logout').on('click', function (e) {
// 		//e.preventDefault();

// 		$.get('/logout', function (data) {
// 			console.log();
// 		});
// 	});

// 	function checkAuth() {
// 		$.get('/current-user', function (data) {
// 			if (data.user) {
// 				$('.not-logged-in').hide();
// 				$('.logged-in').show();
// 			} else {
// 				$('.not-logged-in').show();
// 				$('.logged-in').hide();
// 			}
// 		});
// 	}

// 	checkAuth();

// });



























