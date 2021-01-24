


Countdown.StatusView = function(menuScreen, menuButton){
  "use strict";
  var that = {},
    startGame;
  const GAME_DESCRIPTION = "Form a word from the nine available letters. Click 'Guta' for a vowel or 'Consain' for a consonant. \n The more letters you use, the more points you can get. The time will start automatically when all 9 letters have been selected";

  function init(){
    menuButton.addEventListener("click",start,true);
  }


  function start(){
    menuScreen.classList.add("hidden");
    //alert(GAME_DESCRIPTION); 
    menuButton.removeEventListener("click",start,true);
    startGame();
  }

  function setOnStartGameListener(listener){
    startGame=listener;
  }

  function nextGame(){
    
    menuScreen.classList.remove("hidden");
  }

  that.nextGame=nextGame;
  that.setOnStartGameListener=setOnStartGameListener;
  that.init = init;
  return that;
};
