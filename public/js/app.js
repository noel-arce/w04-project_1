$(document).ready(function(){
  // console.log("app.js is working");

  //CREATE NEW TRIP
  $('#new-trip').on('submit', function (e) {
    e.preventDefault();
    var trip = $(this).serialize();
    console.log(trip);

    $.post('/users/' + $(this).data().id + '/trips', trip)
      .success(function (trip) {
        console.log(trip);
        window.location.href = "/trips/" + trip._id; //redirects to trip page
      })
      .error(function (data) {
      });
  });

  //CREATE ACTIVITY IN TRIP
  $('#new-activity').on('submit', function (e) {
    e.preventDefault();
    var activity = $(this).serialize();

      $.post('/trips/' + $(this).data().id + '/activities', activity)
        .success(function (data) {
          if (data.err) {

          } else {
            var actTitle = data.title;
            var actDetails = data.details;
            // var actLocation = data.location;
            var newActivity = '<li><h5 id="act-title">' + actTitle + '</h5>' + actDetails + '</li>' + '<br>';
            
            $('#activity').append(newActivity);
            $("#new-activity")[0].reset();
          }
        });
  });

  //DELETE TRIP
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

