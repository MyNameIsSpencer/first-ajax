document.addEventListener("DOMContentLoaded", function() {

  var button1 = document.getElementById('button1'),
      button3 = document.getElementById('button3'),
      button7 = document.getElementById('button7'),
      button8 = document.getElementById('button8');

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
      console.log('One way or the other, it`s done');
    });
  });

  button7.addEventListener( 'click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/count',
      method: 'GET',
      dataType: 'text'
    }).done(function (responseData) {
      console.log(responseData);
      var pingAddOn = responseData;
      step7.append(pingAddOn);
    }).fail(function () {
      console.log('Has anyone ever told you how incredibly patient you are? It is so nice to come across someone as considerate as you. Oh man, oh geez! It looks like something went wrong! You don`t mind waiting while we fix it do you?');
      var fail_message = 'Has anyone ever told you how incredibly patient you are? It is so nice to come across someone as considerate as you. Oh man, oh geez! It looks like something went wrong! You don`t mind waiting while we fix it do you?';
      step7.append(fail_message);
    }).always(function () {
      console.log('One way or the other, it`s done');
    });
  });

  button8.addEventListener( 'click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/time',
      method: 'GET',
      data: {timezone: 'Asia/Taipei'},
      dataType: 'text'
    }).done(function (responseData) {
      console.log(responseData);
      var pingAddOn = responseData;
      step8.append(pingAddOn);
    }).fail(function () {
      console.log('Has anyone ever told you how incredibly patient you are? It is so nice to come across someone as considerate as you. Oh man, oh geez! It looks like something went wrong! You don`t mind waiting while we fix it do you?');
      var fail_message = 'Has anyone ever told you how incredibly patient you are? It is so nice to come across someone as considerate as you. Oh man, oh geez! It looks like something went wrong! You don`t mind waiting while we fix it do you?';
      step8.append(fail_message);
    }).always(function () {
      console.log('One way or the other, it`s done');
    });
  });








});
