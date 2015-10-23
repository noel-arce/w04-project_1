// CLIENT-SIDE JAVASCRIPT
// On page load
$(document).ready(function(){
  console.log('Hey, Earth!');

  //click-handler for input-form
  $('.trip-idea').on('submit', function (e) {
  	e.preventDefault();
  	console.log('idea was added');

  	if ($('#blog').val().trim().length > 0) {
  		var ideaContent = $('#blog').val();
  		var newIdea = '<li class="list-group-item">' + ideaContent + '</li>';
  		$('#itinerary').prepend(newIdea);
  		$('#blog').val('');
  	}
  });

  //click handler for save button
  $('#save').on('click', function (e) {
    e.preventDefault();
    console.log('itinerary was saved');

    
  });
});