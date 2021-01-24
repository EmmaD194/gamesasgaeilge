/* global Countdown */


Countdown.ClockView = function(clock){
  "use strict";
  var that={},
    checkInput;
  const THIRTY_SECONDS = 30000,
    ANIMATION_DURATION= "30s";

  function start(){
    clock.classList.add("hand-animated");
    clock.style.animationDuration = ANIMATION_DURATION;
    setTimeout(function(){stop();}, THIRTY_SECONDS);
    playAudio("sounds/countdown.mp3");
  }

  function stop(){
    clock.classList.remove("hand-animated");
    checkInput();
  }

  function setTimeOver(listener){
    checkInput = listener;
  }

  that.setTimeOver=setTimeOver;
  that.start=start;
  return that;

  function playAudio(url){
    var element = document.createElement('audio');
    element.style.display = "none";
    element.src = url;
    element.autoplay = true;
    return element;
  }
};

