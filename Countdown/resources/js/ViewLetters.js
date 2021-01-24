

Countdown.ViewLetters = function(allEmptySpaces){
  "use strict";
  var that={},
    nineLetters,
    allLetters=[];
  const POSSIBLE_SPACES = 9,
    EMPTY=0;

  function addLetter(letter){
    fillArray(letter);
    showLetter(letter);
  }


  function fillArray(letter){
    if(allLetters.length<=POSSIBLE_SPACES){
      allLetters.push(letter);
    }
    if(allLetters.length===POSSIBLE_SPACES){
      nineLetters(allLetters);
    }
  }

  function showLetter(letter){
    for(let space of allEmptySpaces){
      if(space.classList.contains("empty")){
        space.innerHTML=letter;
        space.classList.remove("empty");
        break;
      }
    }
  }

  function setLetterListener(listener){
    nineLetters=listener;
  }

  function removeLetters(){
    allLetters.length=EMPTY;
    for(let space of allEmptySpaces){
      space.innerHTML="";
      space.classList.add("empty");
    }
  }

  that.removeLetters=removeLetters;
  that.setLetterListener=setLetterListener;
  that.addLetter=addLetter;
  return that;
};
