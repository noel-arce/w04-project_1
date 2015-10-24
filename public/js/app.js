// CLIENT-SIDE JAVASCRIPT
// On page load
$(document).ready(function(){
  console.log('Ready to GO!');

  //set class='san francisco' to list
  $('#west-coast').on('click', function (e) {
    e.preventDefault();
    console.log('city set to San Francisco');
  });

  //set class='chicago' to list
  $('#mid-west').on('click', function (e) {
    e.preventDefault();
    console.log('city set to Chicgao');
  });

  //set class='new york' to list
  $('#east-coast').on('click', function (e) {
    e.preventDefault();
    console.log('city set to New York');
  });

  //click-handler for post-form to make list
  $('.trip-idea').on('submit', function (e) {
  	e.preventDefault();
  	console.log('idea was added to list');

  	if ($('#post').val().trim().length > 0) {
  		var ideaContent = $('#post').val();
  		var newIdea = '<li class="list-group-item">' + ideaContent + '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>' + '</li>';
  		$('#itinerary').prepend(newIdea);
  		$('#post').val('');
  	}
  });

  //click handler for save button - save to database and render to Past Plans
  $('#save').on('click', function (e) {
    e.preventDefault();
    console.log('itinerary saved to database');
  });

  //click thumbnail to get it to zoom in
  $('.thumbnail').on('click', function (e) {
    e.preventDefault();
    console.log('get the thumbnail to enlarge!!!');
  });

});