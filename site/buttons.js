/* $ is part of j.query library. Give all elements that match
the given CSS selector. When you click it, run following. 
Listening for events tied to certain parts of the page */


// Green
$('.simon-button.green').on('mouseup', function() {
  $('.simon-button.green').removeClass('light-up');
});

$('.simon-button.green').on('mousedown', function() {
  $('.simon-button.green').addClass('light-up');
  console.log("GREEN");
});

// Blue
$('.simon-button.blue').on('mouseup', function() {
  $('.simon-button.blue').removeClass('light-up');
});

$('.simon-button.blue').on('mousedown', function() {
  $('.simon-button.blue').addClass('light-up');
  console.log("BLUE");
});

// Yellow 
$('.simon-button.yellow').on('mouseup', function() {
  $('.simon-button.yellow').removeClass('light-up');
});

$('.simon-button.yellow').on('mousedown', function() {
  $('.simon-button.yellow').addClass('light-up');
  console.log("YELLOW");
});

// Red
$('.simon-button.red').on('mouseup', function() {
  $('.simon-button.red').removeClass('light-up');
});

$('.simon-button.red').on('mousedown', function() {
  $('.simon-button.red').addClass('light-up');
  console.log("RED");
});

$('.simon-button').on('click', function(){
  var audio = new Audio("scanner-beep.mp3");
  audio.play();
});
