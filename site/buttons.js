// global variables declared here
let colors = ["GREEN", "RED", "YELLOW", "BLUE"]; // only four colors to choose from
let correctColor;
let gameInProgress = false;
let text = $('.counter').text();
let index = 0;
let sequence = [];

// Green
  $('.simon-button.green').on('mouseup', function() {
    $('.simon-button.green').removeClass('light-up');
    if (gameInProgress){
      onceUserClicked("GREEN");
    }
  });
  
  $('.simon-button.green').on('mousedown', function() {
    $('.simon-button.green').addClass('light-up');
    var audio = new Audio("malena.m4a");
    audio.play();
    console.log("GREEN");
  });

  // Red
  $('.simon-button.red').on('mouseup', function() {
    $('.simon-button.red').removeClass('light-up')
    if (gameInProgress){
      onceUserClicked("RED");
    }
  });
  
  $('.simon-button.red').on('mousedown', function() {
    $('.simon-button.red').addClass('light-up');
    var audio = new Audio("jesse.m4a");
    audio.play();
    console.log("RED");
  });

  // Yellow
  $('.simon-button.yellow').on('mouseup', function() {
    $('.simon-button.yellow').removeClass('light-up');
    if (gameInProgress) {
      onceUserClicked("YELLOW");
    }
  });
  
  $('.simon-button.yellow').on('mousedown', function() {
    $('.simon-button.yellow').addClass('light-up');
    var audio = new Audio("terra.m4a");
    audio.play();
    console.log("YELLOW");
  });

  // Blue
  $('.simon-button.blue').on('mouseup', function() {
    $('.simon-button.blue').removeClass('light-up');
    if (gameInProgress){
      onceUserClicked("BLUE");
    }
  });
  
  $('.simon-button.blue').on('mousedown', function() {
    $('.simon-button.blue').addClass('light-up');
    var audio = new Audio("isaac.m4a");
    audio.play();
    console.log("BLUE");
  });

function increaseCount() {
    let text = $('.counter').text()
    console.log(text)
    text = parseInt(text)
    console.log(text)
    $('.counter').text(text+1);
}

/* function used to determine if user has clicked the correct color */
function onceUserClicked(colorClicked) {
  if (colorClicked != correctColor){
    // game over! user clicked the wrong color!
    gameInProgress = false; 
    $('.end-game').removeClass('hide');
  }

  else if (colorClicked == correctColor && index == (sequence.length-1)){
    // successfully passed current level. 
    increaseCount();
    beginRound();
  }

  else {
    // clicked the right button in sequence, go to next color in sequence.
    index++;
    setTimeout(() => { simulation(); }, 500);
  }
}

/* function used to add another color to current sequence */
function addColor() {
  colorIndex = Math.floor( (Math.random() * colors.length));
  sequence.push(colors[colorIndex]);
}

/* function to begin a new round, or level of the current game */
function beginRound() {
  index = 0;
  addColor();

  // flash sequence on screen
  $('.sequence').text(sequence);
  $('.sequence').removeClass('hide');
  setTimeout(() => { $('.sequence').addClass('hide'); }, 2500);
  console.log(sequence); // record sequence in console.
  
  simulation();
}

/* updates the correct color the user should be pressing in sequence */
function simulation(){

  correctColor = sequence[index]; // identify which color shoudl be clicked this iteration.
  console.log("Correct Color: " + correctColor);

  // OLD CODE: 
  // generate one random color for the user to click.
  // colorIndex = Math.floor( (Math.random() * colors.length)); // picks an index, 0-3
  // correctColor = colors[colorIndex]; // correct color to click becomes the color at that index.
  // sequence = correctColor; // will eventually change to be an actual sequence
  // console.log("SEQUENCE: " + sequence); // right now, sequence is a single color. 
  // $('.sequence').text(sequence);
  // console.log(sequence);
  // $('.sequence').removeClass('hide');
  // setTimeout(() => { $('.sequence').addClass('hide'); }, 2000);
}

// GAME BEGINS - start button has been clicked!
$('.simon-button.start').on('click', function() {
  gameInProgress = true;    
  $('.end-game').addClass('hide');
  $('.counter').text(0);
  console.log("START");
  beginRound(); // call beginRound!
});
