'use strict';

var userName = prompt('What\'s your name?');
alert('Welcome to my site ' + userName);

responseOne();
responseTwo();
responseThree();
responseFour();

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
  var answerTwo = prompt('Have I lived in Kent?').toLowerCase();
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
