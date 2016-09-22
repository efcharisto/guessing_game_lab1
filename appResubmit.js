'use strict';

var userName = prompt('What\'s your name?');
alert('Welcome to my site ' + userName + '! I\'ll ask you some Qs if you don\'t mind.');

sizeFrance();
//country();
zeroAnswer();
responseOne();
responseTwo();
responseThree();
responseFour();
userAnswer();
anotherAnswer();
finalAnswer();

/* HELP! I wanted to have an object with countries but cant make it work
function country(){
  var countries = ['russia', 'canada', 'united utates', 'us', 'usa', 'china', 'brazil'];
  var countryGuess = prompt('Name the largest country in North America').toLowerCase();
  if (countryGuess == countries.indexOf('canada')) {
    return alert('Good job!');
  } else {
    alert('Wrong entry, try again!');
    country();
  }
} */
function sizeFrance(){
  var franceGuess = ['1', '2', '3', '4', '4.2', '5'];
  var sizeGuess = prompt('How many times can you fit France into Kazakhstan?');
  if (sizeGuess == franceGuess.indexOf('4') || franceGuess.indexOf('4.2')) {
    return alert('Good job! 4 times, or 4.2 to be exact');
  } else {
    alert('Wrong entry, try again!');
    country();
  }
}


function zeroAnswer() {
  var zeroAnswer = prompt(userName + ', do you like Seattle?').toLowerCase();
  if (zeroAnswer === 'yes' || zeroAnswer === 'y') {
    return alert('Seattle rocks!');
  } else if (zeroAnswer === 'no' || zeroAnswer === 'n') {
    alert('You should visit Seattle to like it. NEXT TIME SAY YES');
  } else {
    alert('That was a Yes or No question, ' + userName + '. Moving on...');
  }
}

function responseOne() {
  var answerOne = prompt('Was I born in Washington?').toLowerCase();
  if (answerOne === 'yes' || answerOne === 'y') {
    alert(userName + ', you\'re wrong!');
    responseOne();
  } else if (answerOne === 'no' || answerOne === 'n') {
    alert('Correct, I was born in Kazakhstan');
  } else {
    alert(userName + ', please answer Yes or No');
    responseOne();
  }
}

function responseTwo() {
  var answerTwo = prompt('Have I ever lived in Kent?').toLowerCase();
  if (answerTwo === 'yes' || answerTwo === 'y') {
    alert(userName + ', you\'re wrong!');
    responseTwo();
  } else if (answerTwo === 'no' || answerTwo === 'n') {
    alert('YEAH! I\'ve always lived in Tuk-town!');
  } else {
    alert(userName + ', please answer Yes or No');
    responseTwo();
  }
}

function responseThree() {
  var answerThree = prompt('Have I lived in other states?').toLowerCase();
  if (answerThree === 'yes' || answerThree === 'y') {
    alert(userName + '\', you\'re wrong! Try again');
    responseThree();
  } else if (answerThree === 'no' || answerThree === 'n') {
    alert(userName + '\', you\'re correct! Next question');
  } else {
    alert(userName + ', please answer Yes or No');
    responseThree();
  }
}

function responseFour() {
  var answerFour = prompt('Did I go to WSU?').toLowerCase();
  if (answerFour === 'yes' || answerFour === 'y') {
    alert(userName + ', you\'re wrong! Try again');
    responseFour();
  } else if (answerFour === 'no' || answerFour === 'n') {
    alert(userName + '\, you\'re correct! I went to UW');
  } else {
    alert(userName + ', please answer Yes or No');
    responseFour();
  }
}

function userAnswer() {
  var answerOne = prompt('Am I taller than you?').toLowerCase();
  if (answerOne === 'yes' || answerOne === 'y') {
    return alert('Yeah, probably! I\'m tall!');
  } else if (answerOne === 'no' || answerOne === 'n') {
    alert('Pretty sure I\'m taller. Accept it');
    userAnswer();
  } else {
    alert(userName + ', please answer Yes or No');
    userAnswer();
  }
}

function anotherAnswer() {
  var answerTwo = prompt('Do I cook?').toLowerCase();
  if (answerTwo === 'yes' || answerTwo === 'y') {
    return alert('Barely do. Can I have a bite of that pizza?..');
  } else if (answerTwo === 'no' || answerTwo === 'n') {
    alert('Right... I\'m starving. Anyway, you\'re partly wrong');
  } else {
    alert(userName + ', please answer Yes or No');
    anotherAnswer();
  }
}

//If user likes Qs, then they ALL repeat. Be sure to say NO
function finalAnswer() {
  var lastAnswer = prompt('Did you like these questions?').toLowerCase();
  if (lastAnswer === 'yes' || lastAnswer === 'y') {
    alert('That\'s great  ' + userName + '! Answer them again! :)');
    zeroAnswer();
    responseOne();
    responseTwo();
    userAnswer();
    responseThree();
    anotherAnswer();
    responseFour();
    finalAnswer();
  } else if (lastAnswer === 'no' || lastAnswer === 'n') {
    alert('It\'s all good my friend. Take care');
  } else {
    alert(userName + ', please answer Yes or No');
    finalAnswer();
  }
}
