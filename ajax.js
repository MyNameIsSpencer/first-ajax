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
      var pingAddOn = responseData;
      step3456.append(pingAddOn);
    }).fail(function () {
      console.log('Has anyone ever told you how incredibly patient you are? It is so nice to come across someone as considerate as you. Oh man, oh geez! It looks like something went wrong! You don`t mind waiting while we fix it do you?');
      var fail_message = 'Has anyone ever told you how incredibly patient you are? It is so nice to come across someone as considerate as you. Oh man, oh geez! It looks like something went wrong! You don`t mind waiting while we fix it do you?';
      step3456.append(fail_message);
    }).always(function () {
      console.log('All I know is, it`s done');
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
