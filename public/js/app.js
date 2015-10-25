// CLIENT-SIDE JAVASCRIPT
// On page load
$(document).ready(function(){
  console.log('JS ready to GO!');

  //set class='san francisco' to list
  $('#west-coast').on('click', function (e) {
    e.preventDefault();
    console.log('city set to San Francisco');
  });

  //set class='chicago' to list
  $('#mid-west').on('click', function (e) {
    e.preventDefault();
    console.log('city set to Chicago');
  });

  //set class='new york' to list
  $('#east-coast').on('click', function (e) {
    e.preventDefault();
    console.log('city set to New York');
  });

  //click-handler for post-form to make list
  $('.postIdea').on('submit', function (e) {
  	e.preventDefault();
  	console.log('idea was added to list');

  	if ($('#post').val().trim().length > 0) {
  		var ideaContent = $('#post').val();
  		var newIdea = '<li class="list-group-item">' + ideaContent + '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>' + '</li>';
  		$('.itinerary').prepend(newIdea);
  		$('#post').val('');
  	}
  });

  //click handler for delete list-item
  $('.itinerary').on('click', '.glyphicon-remove', function (e) {
    e.preventDefault();
    var deletedPost = $(this).closest('li');

    $(deletedPost).remove();
    console.log('item removed');
  });

  //click handler for save button - save to database and render to Past Plans
  $('#save').on('click', function (e) {
    e.preventDefault();
    //console.log('itinerary saved to database');

    if ($('#title').val().trim().length > 0) {
      var title = $('#title').val();
      var newModal = '<a type="button" class="btn btn-lg" data-toggle="modal" data-target="#myModal">' + title +
         '</a>';
      //console.log(title);

      $('#SF').prepend(newModal);
    }
  });

});