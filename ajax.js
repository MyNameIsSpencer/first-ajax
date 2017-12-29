document.addEventListener("DOMContentLoaded", function() {

  var request_to_root = document.getElementById( 'request_to_root')

  request_to_root.addEventListener( 'click', function() {

    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/',
      method: 'GET',
      dataType: 'text'
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
