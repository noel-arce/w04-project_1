// CLIENT-SIDE JAVASCRIPT
// On page load
$(document).ready(function(){
  console.log('JS ready to GO!');

  //CREATE NEW TRIP [x]
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

  //CREATE LIST IN TRIP
  $('#new-activity').on('submit', function (e) {
    e.preventDefault();
    //console.log('item-saved') - check click handler working;
      var activity = $(this).serialize();

      $.post('/trips/' + $(this).data().id +'/activities', activity)
        .success(function (data) {
          if (data.err) {

          } else {
            var actTitle = data.title;
            var actDesc = data.desc;
            var actLocation = data.location;
            var newActivity = '<li>' + actTitle + '<div>' + actDesc + '</div>' + '<div>' + actLocation + '</div>' + '</li>';
            
            $('#activity').append(newActivity);
          }
        });
  });

  //DELETE TRIP [x]
  $('#remove-trip').on('click', function (e) {
    e.preventDefault();
    //console.log('removed');
    var trip = $(this).closest('.trip');
    var tripId = $(this).data("id");

    $.ajax ({
      url:'/trips/' + tripId,
      type: 'DELETE',
      success: function (data) {
        console.log(data);
        trip.remove();
        window.location.href = "/";
      },
      error: function(err) {
        console.log(err);
      }
    });
  });

});





  //PREPEND ITEM TO TRIP LIST [x]
  // $('.trip-item').on('submit', function (e) {
  //   e.preventDefault();
  //   console.log('item was added');

  //   if ($('#item').val().trim().length > 0) {
  //     var itemContent = $('#item').val();
  //     var newItem = '<li class="list-group-item">' + itemContent + '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>' + '</li>';
  //     $('.trip-list').append(newItem);
  //     $('#item').val('');
  //   }
  // });

  //CREATE DESCRIPTION IN TRIP BY ID
  // $('.trip-description').on('click', function (e) {
  //   e.preventDefault();

  //   var desc = $(this).serialize();

  //   $.post('/trips/:id/desc', desc) //fix the path
  //     .success(function (data) {
  //       console.log(data);
  //     })
  //     .error(function (data) {
  //       console.log('did not work');
  //     });

  // });



















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