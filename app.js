var userAnswer;
var points = 0;
var listElement = document.getElementById('list1');
var ansElement = document.getElementById('ans1');

userAnswer = prompt('Do you want to play my guessing game?');
userAnswer = userAnswer.toUpperCase();
console.log(userAnswer);

if(userAnswer === 'YES') {
  alert('That\'s the spirit! Let\'s play!');
} else if(userAnswer === 'NO') {
  alert('You need to play this game anyways.');
} else {
  alert('Please input YES or NO in the field');
  prompt('Do you want to play my guessing game?');
  userAnswer = userAnswer.toUpperCase()
}


function question1() {
userAnswer = prompt('Cherry Blossomes are mostly pink and white. True or False?');
listElement.textContent = 'Cherry Blossomes are mostly pink and white. True or False?';
listElement.innerHTML = listElement.textContent;
userAnswer = userAnswer.toUpperCase();
} question1();

function ConditionCheck1() {
  if(userAnswer === 'TRUE') {
    alert('That is correct!');
    var reviel = 'You answered '+ userAnswer +', and that\'s correct!';
    ansElement.innerHTML = reviel;
    var imgEl = document.getElementById('img1');
    imgEl.src = 'img/correct.jpeg';
    points += 1;
    console.log(points);
  } else if(userAnswer === 'FALSE') {
    alert('That\'s incorrect.');
    var reviel = 'You answered ' + userAnswer + ', and that is incorrect.';
    ansElement.innerHTML = reviel;
  } else {
    alert('Try Again. You can enter either True or False.');
    question1();
    ConditionCheck1();
  }
} ConditionCheck1();


listElement = document.getElementById('list2');
ansElement = document.getElementById('ans2');

function question2() {
userAnswer = prompt('Sugar is bad for your bones. True or False?');
listElement.textContent = 'Sugar is bad for your bones. True or False?';
listElement.innerHTML = listElement.textContent;
userAnswer = userAnswer.toUpperCase();
} question2();

function ConditionCheck2() {
  if(userAnswer === 'TRUE') {
    alert('That is correct!');
    var reviel = 'You answered '+ userAnswer +', and that\'s correct!';
    ansElement.innerHTML = reviel;
    var imgEl2 = document.getElementById('img2');
    imgEl2.src = 'img/correct.jpeg';
    points += 1;
    console.log(points);
  } else if(userAnswer === 'FALSE') {
    alert('That\'s incorrect.');
    var reviel = 'You answered ' + userAnswer + ', and that is incorrect.';
    ansElement.innerHTML = reviel;
  } else {
    alert('Try Again. You can enter either True or False.');
    question2();
    ConditionCheck2();
  }
} ConditionCheck2();

listElement = document.getElementById('list3');

function question3() {
userAnswer = prompt('Airplane doesn\'t fly. True or False?');
listElement.textContent = 'Airplane doesn\'t fly. True or False?';
listElement.innerHTML = listElement.textContent;
userAnswer = userAnswer.toUpperCase();
}
question3();
ansElement = document.getElementById('ans3');

function ConditionCheck3() {
  if(userAnswer === 'FALSE') {
    alert('That is correct!');
    var reviel = 'You answered '+ userAnswer +', and that\'s correct!';
    ansElement.innerHTML = reviel;
    var imgEl3 = document.getElementById('img3');
    imgEl3.src = 'img/correct.jpeg';
    points += 1;
    console.log(points);
  } else if(userAnswer === 'TRUE') {
    alert('That\'s incorrect.');
    var reviel = 'You answered ' + userAnswer + ', and that is incorrect.';
    ansElement.innerHTML = reviel;
  } else {

    alert('Try Again. You can enter either True or False.');
    question3();
    ConditionCheck3();
  }
}

ConditionCheck3();

alert('You answered ' + points + ' out of 3 correctly.');
var finalScoreEl = document.getElementById('finalscore');
 finalscore.textContent = 'You answered ' + points + ' out of 3 correctly.';














