

Countdown.ChooseLetters = function(vowelButton, consonantButton){
  "use strict";
  var that={},
    specificLetter,
    vowel =["a","e","i","o","u","á","é","í","ó","ú","a","e","i","o","u","a","e","i","o","u"],
    consonant = ["b","c","d","f","g","h","l","m","n","p","r","s","t"];

  const VOWEL_NUM = 20,
    VOWEL ="Guta",
    CONSONANT_NUM = 13;

  function startButtonListener(){
    vowelButton.addEventListener("click",buttonClicked,true);
    consonantButton.addEventListener("click",buttonClicked,true);
  }

  function stopButtonListener(){
    vowelButton.removeEventListener("click",buttonClicked,true);
    consonantButton.removeEventListener("click",buttonClicked,true);

  }

  function buttonClicked(event){
    var position = getRandomPosition(event.target.innerHTML),
      letter = getLetter(event.target.innerHTML,position);
    specificLetter(letter);
  }
  function getLetter(clickedButtonText, letterPosition){
    var letter;
    if(clickedButtonText===VOWEL){
      letter=vowel[letterPosition];
    }else{
      letter=consonant[letterPosition];
    }
    return letter;
  }


  function getRandomPosition(clickedButtonText){
    var numOfLetters;
    if(clickedButtonText===VOWEL){
      numOfLetters=VOWEL_NUM;
    }else{
      numOfLetters=CONSONANT_NUM;
    }
    return Math.floor(Math.random()*numOfLetters);
  }

  function setLetterButtonListener(listener){
    specificLetter=listener;
  }

  that.stopButtonListener=stopButtonListener;
  that.setLetterButtonListener=setLetterButtonListener;
  that.startButtonListener=startButtonListener;
  return that;
};
