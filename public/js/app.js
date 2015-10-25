// CLIENT-SIDE JAVASCRIPT
// On page load
$(document).ready(function(){
  console.log('JS ready to GO!');
  var city;
  //set class='san francisco' to list - SERVER ROUTE NEEDED?
  $('#west-coast').on('click', function (e) {
    e.preventDefault();

    city = 'golden';
    console.log('city set to ' + city);
  });

  //set class='chicago' to list - SERVER ROUTE NEEDED?
  $('#mid-west').on('click', function (e) {
    e.preventDefault();

    city = 'windy';
    console.log('city set to ' + city);
  });

  //set class='new york' to list - SERVER ROUTE NEEDED?
  $('#east-coast').on('click', function (e) {
    e.preventDefault();

    city = 'bigApple';
    console.log('city set to ' + city);
  });

  //click-handler for post-form to make list - SERVER ROUTE NEEDED
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

  //click handler for delete list-item - SERVER ROUTE NEEDED?
  $('.itinerary').on('click', '.glyphicon-remove', function (e) {
    e.preventDefault();
    var deletedPost = $(this).closest('li');

    $(deletedPost).remove();
    console.log('item removed');
  });

  //*******click handler for save button - save to database and render to Past Plans - SERVER ROUTE NEEDED
  $('#save').on('click', function (e) {
    e.preventDefault();
    //console.log('itinerary saved to database');

    if ($('#title').val().trim().length > 0) {
      var title = $('#title').val();
      var newModal = '<a type="button" class="btn btn-lg" data-toggle="modal" data-target="#myModal">' + title +
         '</a>';
      //console.log(title)
      if (city == 'golden') {
        $('#SF').prepend(newModal);
      }else if (city == 'windy') {
        $('#Chitown').prepend(newModal);
      }else if (city == 'bigApple') {
        $('#NY').prepend(newModal);
      }
    }$('#title').val('');

  });
});