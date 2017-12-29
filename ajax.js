document.addEventListener("DOMContentLoaded", function() {

  var button1 = document.getElementById( 'button1'),
      button3 = document.getElementById( 'button3' );

  button1.addEventListener( 'click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/',
      method: 'GET',
      dataType: 'text'
    });
  });

  button3.addEventListener( 'click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/ping',
      method: 'GET',
      dataType: 'text'
    }).done(function (responseData) {
      console.log(responseData);
      var pingAddOn = responseData
      step3456.append(pingAddOn);
    });
  });









});




// button.addEventListener( 'click', function() {
//     console.log('Button is CLICKED');
//
//     console.log('BEFORE AJAX');
//
//     //AJAX REQUEST HERE
//     var request = $.ajax( {
//       url: 'https://monsters-api.herokuapp.com/monsters',
//       method: 'GET',
//       dataType: 'html',
//
//     });
//
//     // console.log('Logging out `request.responseText`');
//     // console.log( request.responseText );
//
//     request.done( function( data ) {
//       console.log( 'REQUEST SUCCESS');
//       // console.log( data );
//
//       var myElement = document.createElement( 'div');
//       myElement.innerHTML = data;
//       document.body.append(myElement);
//     }).fail(function( jqXHR, textStatus, errorThrown) {
//       console.log ( 'REQUEST FAILED' );
//       console.log ( textStatus, errorThrown );
//
//       var msg = document.createElement( 'p' );
//       msg.innerText = 'Whoopsi!';
//       document.body.append( msg );
//
//     }).always(function() {
//       console.log('REQUES;T COMPLETE');
//     });
//
//     console.log('AFTER AJAX');
//   });
