'use strict';

var userName = prompt('What\'s your name?');
alert('Welcome to my site ' + userName + '! I\'ll ask you some Qs if you don\'t mind.');

myBday();
country();
sizeFrance();
questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();
questionSix();
questionSeven();
finalAnswer();
//gamesCount();

function myBday() {
  var guessDay = prompt('What day was born? Enter a number 1-31');
  if (guessDay > 0 && guessDay <= 12) {
    alert('Too low, try again');
    myBday();
  } else if (guessDay > 12 && guessDay <= 17) {
    alert('Close, try again');
    myBday();
  } else if (guessDay >= 19 && guessDay <= 31) {
    alert('Too high, try again!');
    myBday();
  } else if (guessDay == 18){
    return alert('GREAT SUCCESS!');
  }
  else {
    alert('Please enter a valid number between 1 and 31.');
    myBday();
  }
}

//make a global variable. maybe IF statement: IF user says yes,
//incrimnet i and run evetyhing again. If user says NO, stop and
//dipslay how many time user played.
function gamesCount() {
  for (var i = 1; i <= 4;) {
    alert('you played ' + i + ' games total');
    i++;
    console.log(i);
  }
}

function country() {
  var countries = ['russia', 'canada', 'united utates', 'us', 'usa', 'china', 'brazil'];
  var countryGuess = prompt('Name ONE of the 5 largest countries in the world').toLowerCase();
  if (countries.indexOf(countryGuess) > -1) {
    return alert('Good job!');
  } else {
    alert('Wrong entry, try again!');
    country();
  }
}

function sizeFrance() {
  var franceGuess = ['4', '4.2'];
  var sizeGuess = prompt('How many times can you fit France into Kazakhstan?');
  if (franceGuess.indexOf(sizeGuess) > -1) {
    console.log('user guessed 4 or 4.2 OK');
    return alert('Good job! 4 times, or 4.2 to be exact');
  } else {
    console.log('wrong answer or input. make user guess again');
    alert('Wrong entry, try again!');
    sizeFrance();
  }
}

function questionOne() {
  var answerOne = prompt(userName + ', do you like Seattle?').toLowerCase();
  if (answerOne === 'yes' || answerOne === 'y') {
    console.log('answered yes');
    return alert('Seattle rocks!');
  } else if (answerOne === 'no' || answerOne === 'n') {
    console.log('answered no');
    alert('You should visit Seattle to like it. NEXT TIME SAY YES');
  } else {
    console.log('wrong input or answer, move to the next question');
    alert('That was a Yes or No question, ' + userName + '. Moving on...');
  }
}

function questionTwo() {
  var answerTwo = prompt('Was I born in Washington?').toLowerCase();
  if (answerTwo === 'yes' || answerTwo === 'y') {
    console.log('wrong guess, ask user again');
    alert(userName + ', you\'re wrong!');
    questionTwo();
  } else if (answerTwo === 'no' || answerTwo === 'n') {
    console.log('right guess, congrats!');
    alert('Correct, I was born in Kazakhstan');
  } else {
    alert(userName + ', please answer Yes or No');
    console.log('wrong answer or input, repeat the Q');
    questionTwo();
  }
}

function questionThree() {
  var answerThree = prompt('Have I ever lived in Kent?').toLowerCase();
  if (answerThree === 'yes' || answerThree === 'y') {
    alert(userName + ', you\'re wrong!');
    console.log('wrong answer, make user guess again');
    questionThree();
  } else if (answerThree === 'no' || answerThree === 'n') {
    alert('YEAH! I\'ve always lived in Tuk-town!');
    console.log('right answer');
  } else {
    alert(userName + ', please answer Yes or No');
    console.log('wrong input, make user guess again');
    questionThree();
  }
}

function questionFour() {
  var answerFour = prompt('Have I lived in other states?').toLowerCase();
  if (answerFour === 'yes' || answerFour === 'y') {
    alert(userName + '\', you\'re wrong! Try again');
    console.log('make guess again. wrong answer');
    questionFour();
  } else if (answerFour === 'no' || answerFour === 'n') {
    alert(userName + '\', you\'re correct! Next question');
    console.log('correct, next Q');
  } else {
    alert(userName + ', please answer Yes or No');
    console.log('invalid input, ask again');
    questionFour();
  }
}

function questionFive() {
  var answerFive = prompt('Did I go to WSU?').toLowerCase();
  if (answerFive === 'yes' || answerFive === 'y') {
    console.log('wrong answer, ask user again');
    alert(userName + ', you\'re wrong! Try again');
    questionFive();
  } else if (answerFive === 'no' || answerFive === 'n') {
    console.log('correct answer');
    alert(userName + '\, you\'re correct! I went to UW');
  } else {
    alert(userName + ', please answer Yes or No');
    console.log('invalid input. ask again');
    questionFive();
  }
}

function questionSix() {
  var answerSix = prompt('Am I taller than you?').toLowerCase();
  if (answerSix === 'yes' || answerSix === 'y') {
    console.log('correct guess');
    return alert('Yeah, probably! I\'m tall!');
  } else if (answerSix === 'no' || answerSix === 'n') {
    alert('Pretty sure I\'m taller. Accept it');
    console.log('wrong answer. redo');
    questionSix();
  } else {
    alert(userName + ', please answer Yes or No');
    console.log('invalid input. redo');
    questionSix();
  }
}

function questionSeven() {
  var answerSeven = prompt('Do I cook?').toLowerCase();
  if (answerSeven === 'yes' || answerSeven === 'y') {
    console.log('correct');
    return alert('Barely do. Can I have a bite of that pizza?..');
  } else if (answerSeven === 'no' || answerSeven === 'n') {
    console.log('wrong answer');
    alert('Right... I\'m starving. Anyway, you\'re partly wrong');
  } else {
    console.log('invalid input, redo');
    alert(userName + ', please answer Yes or No');
    questionSeven();
  }
}

//If user likes Qs, then they ALL repeat. Be sure to say NO
function finalAnswer() {
  var lastAnswer = prompt('Did you like these questions?').toLowerCase();
  if (lastAnswer === 'yes' || lastAnswer === 'y') {
    console.log('start all over again!');
    alert('That\'s great  ' + userName + '! Answer them again! :)');
    myBday();
    country();
    sizeFrance();
    questionOne();
    questionTwo();
    questionThree();
    questionFour();
    questionFive();
    questionSix();
    questionSeven();
    finalAnswer();
    //gamesCount();

  } else if (lastAnswer === 'no' || lastAnswer === 'n') {
    console.log('Ze End');
    alert('It\'s all good my friend. Take care');
  } else {
    alert(userName + ', please answer Yes or No');
    console.log('invalid input, redo');
    finalAnswer();
  }
}
