console.log('auth.js working');
$(document).ready(function() {

	//CREATE NEW USER
	$('#signup-form').submit(function (e) {
		e.preventDefault();
		var user = $(this).serialize();
		console.log(user);

		$.post('/users', user, function(data) {

		})
		.done(function(data) {
			console.log('success user', data);
		})
		.fail(function(data) {
			console.log('fail to create');
		});
	});

});