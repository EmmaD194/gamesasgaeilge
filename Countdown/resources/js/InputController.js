/* global Countdown */



Countdown.InputController =function(input){
  "use strict";
  var that={},
    rightComposition,
    word,
    letters;

  const NULL_POINTS =0,
    NINE_LETTERS=9,
    EIGHTEEN_POINTS=18,
    WRONG_LETTERS = "Litreacha míchearta a úsáidtear",
    NO_INPUT ="Níor ionchur tú",
    WRONG_WORD="Níl an focal sin ann",
    METHOD = "get",
    URL = "https://en.wiktionary.org/w/api.php?action=query&origin=*&format=json&titles=",
    READY_STATE_RESPONSE_READY= 4,
    HTTP_CODE_OK=200,
    NO_EXISTENCE= "-1";

  function results(){
    word =input.value.toLowerCase();
    checkWord();
  }

  function checkWord(){
    var hint="";
    if(proofingLength()){
      if(proofingLetters()){
        proofingExistence();
        return;
      }
      hint=WRONG_LETTERS;

    }else{
      hint=NO_INPUT;
    }
    rightComposition(NULL_POINTS,hint);
  }


  function proofingExistence(){
    var req = new XMLHttpRequest();
    req.open(METHOD,URL+word,true);
    req.onreadystatechange = evaluate;
    req.send();
  }

  function evaluate(e){
    var answer,
      allPropertyNames,
      length=word.length;
    if(e.target.readyState===READY_STATE_RESPONSE_READY && e.target.status ===HTTP_CODE_OK){
      answer=JSON.parse(e.target.responseText);
      allPropertyNames=Object.getOwnPropertyNames(answer.query.pages);
      if(allPropertyNames[0] ===NO_EXISTENCE){
        rightComposition(NULL_POINTS,WRONG_WORD);
      }else{
        if(word.length===NINE_LETTERS){
          length=EIGHTEEN_POINTS;
        }
        rightComposition(length,"");
      }
    }
  }

  
  function proofingLetters(){
    var index;
    for(let i=0; i<word.length; i++){
      index= letters.indexOf(word.charAt(i));
      if(index!==-1){
        letters.splice(index,1);
      }else {
        return false;
      }
    }
    return true;
  }

  function proofingLength(){
    if(word.length===NULL_POINTS){
      return false;
    }
    return true;
  }


  function clearInput(){
    input.value="";
  }


  function possibleLetters(array){
    letters=array;
  }

  function setProofingWordListener(listener){
    rightComposition =listener;
  }

  that.setProofingWordListener=setProofingWordListener;
  that.possibleLetters=possibleLetters;
  that.clearInput=clearInput;
  that.results=results;
  return that;
};
