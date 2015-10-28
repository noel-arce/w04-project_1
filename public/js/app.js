// CLIENT-SIDE JAVASCRIPT
// On page load
$(document).ready(function(){
  console.log('JS ready to GO!');

  //CREATE NEW TRIP
  $('#new-trip').on('submit', function (e) {
    e.preventDefault();

    var trip = $(this).serialize();

    $.post('/trips', trip)
      .success(function (data) {
        console.log(data);
        window.location.href = "/trips/" + data._id; //redirects to trip page
      })
      .error(function (data) {
      });
  });

  //PREPEND ITEM TO TRIP LIST
  $('.trip-item').on('submit', function (e) {
    e.preventDefault();
    console.log('item was added');

    if ($('#item').val().trim().length > 0) {
      var itemContent = $('#item').val();
      var newItem = '<li class="list-group-item">' + itemContent + '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>' + '</li>';
      $('.trip-list').append(newItem);
      $('#item').val('');
    }
  });

  //CREATE ACTIVITY IN TRIP BY ID
  $('.trip-list').on('click', function (e) {
    e.preventDefault();

    var tripItems = $('form.trip-list li');
    var list = [];

    tripItems.each(function() { 
      list.push($(this).text());
    });
    console.log(list);

  });

});



















  // var city;
  // //set list for SF
  // $('#west-coast').on('click', function (e) {
  //   e.preventDefault();

  //   city = 'golden';
  //   console.log('city set to ' + city);
  // });

  // //set list for CHICAGO
  // $('#mid-west').on('click', function (e) {
  //   e.preventDefault();

  //   city = 'windy';
  //   console.log('city set to ' + city);
  // });

  // //set list for NEW YORK
  // $('#east-coast').on('click', function (e) {
  //   e.preventDefault();

  //   city = 'bigApple';
  //   console.log('city set to ' + city);
  // });

  // //submit for ADD to list
  // $('.postIdea').on('submit', function (e) {
  // 	e.preventDefault();
  // 	console.log('idea was added to list');

  // 	if ($('#post').val().trim().length > 0) {
  // 		var ideaContent = $('#post').val();
  // 		var newIdea = '<li class="list-group-item">' + ideaContent + '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>' + '</li>';
  // 		$('.itinerary').prepend(newIdea);
  // 		$('#post').val('');
  // 	}
  // });

  // //click handler for DELETE icon
  // $('.itinerary').on('click', '.glyphicon-remove', function (e) {
  //   e.preventDefault();
  //   var deletedPost = $(this).closest('li');

  //   $(deletedPost).remove();
  //   console.log('item removed');
  // });

  // //lick handler for SAVE button
  // $('.postIdea').on('click', '#save', function (e) {
  //   e.preventDefault();
  //   var itinerary = $('ul.itinerary').children();
  //   //console.log('itinerary saved to database');

  //   if ($('#title').val().trim().length > 0) {
  //     var title = $('#title').val();
  //     var newModal = '<a type="button" class="btn btn-lg" data-toggle="modal" data-target="#myModal">' + title +
  //        '</a>';
  //     //console.log(title)
  //     if (city == 'golden') {
  //       $('#SF').prepend(newModal);
  //     }else if (city == 'windy') {
  //       $('#Chitown').prepend(newModal);
  //     }else if (city == 'bigApple') {
  //       $('#NY').prepend(newModal);
  //     }
  //   }$('#title').val('');
  // });