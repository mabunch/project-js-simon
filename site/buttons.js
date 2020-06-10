/* $ is part of j.query library. Give all elements that match
the given CSS selector. When you click it, run following. 
Listening for events tied to certain parts of the page */

var countClicks = 0;

// Green
$('.simon-button.green').on('mouseup', function() {
  $('.simon-button.green').removeClass('light-up');
});

$('.simon-button.green').on('mousedown', function() {
  $('.simon-button.green').addClass('light-up');
  var audio = document.getElementById("green-sound");
  audio.play();
  console.log("GREEN");
});

// Blue
$('.simon-button.blue').on('mouseup', function() {
  $('.simon-button.blue').removeClass('light-up');
});

$('.simon-button.blue').on('mousedown', function() {
  $('.simon-button.blue').addClass('light-up');
  var audio = document.getElementById("blue-sound");
  audio.play();
  console.log("BLUE");
});

// Yellow 
$('.simon-button.yellow').on('mouseup', function() {
  $('.simon-button.yellow').removeClass('light-up');
});

$('.simon-button.yellow').on('mousedown', function() {
  $('.simon-button.yellow').addClass('light-up');
  var audio = document.getElementById("yellow-sound");
  audio.play();
  console.log("YELLOW");
});

// Red
$('.simon-button.red').on('mouseup', function() {
  $('.simon-button.red').removeClass('light-up');
});

$('.simon-button.red').on('mousedown', function() {
  $('.simon-button.red').addClass('light-up');
  var audio = document.getElementById("red-sound");
  audio.play();
  console.log("RED");
});




