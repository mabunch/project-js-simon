
//Green
  $('.simon-button.green').on('mouseup', function() {
    $('.simon-button.green').removeClass('light-up');
    let text = $('.counter').text()
    console.log(text)
    text = parseInt(text)
    console.log(text)
    $('.counter').text(text+1)
  });
  
  $('.simon-button.green').on('mousedown', function() {
    $('.simon-button.green').addClass('light-up');
    console.log("GREEN");
  });

  //Red
  $('.simon-button.red').on('mouseup', function() {
    $('.simon-button.red').removeClass('light-up')
    let text = $('.counter').text()
    console.log(text)
    text = parseInt(text)
    console.log(text)
    $('.counter').text(text+1);
  });
  
  $('.simon-button.red').on('mousedown', function() {
    $('.simon-button.red').addClass('light-up');
    console.log("RED");
  });

  //Yellow
  $('.simon-button.yellow').on('mouseup', function() {
    $('.simon-button.yellow').removeClass('light-up');
    let text = $('.counter').text()
    console.log(text)
    text = parseInt(text)
    console.log(text)
    $('.counter').text(text+1)
  });
  $('.simon-button.yellow').on('click', function(){
    var audio = new Audio("terra.m4a");
    audio.play();
  });
  
  $('.simon-button.yellow').on('mousedown', function() {
    $('.simon-button.yellow').addClass('light-up');
    console.log("YELLOW");
  });

  //Blue
  $('.simon-button.blue').on('mouseup', function() {
    $('.simon-button.blue').removeClass('light-up');
    let text = $('.counter').text()
    console.log(text)
    text = parseInt(text)
    console.log(text)
    $('.counter').text(text+1)
  });
  
  $('.simon-button.blue').on('mousedown', function() {
    $('.simon-button.blue').addClass('light-up');
    console.log("BLUE");
  });

  $('.simon-button.green').on('click', function(){
    var audio = new Audio("malena.m4a");
    audio.play();
  });  
  $('.simon-button.red').on('click', function(){
    var audio = new Audio("jesse.m4a");
    audio.play();
  });  
  $('.simon-button.blue').on('click', function(){
    var audio = new Audio("isaac.m4a");
    audio.play();
  });  
  