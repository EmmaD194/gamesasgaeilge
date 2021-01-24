
var verbs = [ "Bris", "Dún", "Caith", "Glan", "Díol", "Gearr", "Caill", "Cuir", "Ól", "Fág", "Fan", "Ith", "Clois", "Déan", "Faigh", "Feic", "Tóg"];
var endings = [ "eann", "ann", "fidh", "faidh"];
var score = 0;
var username = "";
var game_time = 30;


var verb = document.getElementById("verb");
var verb_ending = document.getElementById("verb-ending");
var displayUser = document.getElementById("user");
var user_window = document.getElementById("user-window");
var game_window = document.getElementById("game-window");
var timer_value = document.getElementById("time");
var high_score_table = document.getElementById("highestScores");
var answerNo = document.getElementById("no-btn");
var answerYes = document.getElementById("yes-btn");

const scoreCount = (answer, text, text_ending) => {
  

    if  ( ((text == "Bris") || (text == "Caith") || (text == "Caill") || (text == "Cuir") || (text == "Ith") || (text == "Clois") || (text == "Déan") || (text == "Faigh")  || (text == "Feic"))  && ((text_ending == "eann") || (text_ending == "fidh")) == answer ){
      document.getElementById("score").innerHTML = (score += 100);
    }
    else if ( ((text == "Bris") || (text == "Caith") || (text == "Caill") || (text == "Cuir") || (text == "Ith") || (text == "Clois") || (text == "Déan") || (text == "Faigh")  || (text == "Feic"))  && ((text_ending == "ann") || (text_ending == "faidh")) == answer ){
      document.getElementById("score").innerHTML = (score -= 200);
    }
    else if ( ((text == "Bris") || (text == "Caith") || (text == "Caill") || (text == "Cuir") || (text == "Ith") || (text == "Clois") || (text == "Déan") || (text == "Faigh")  || (text == "Feic"))  && ((text_ending == "eann") || (text_ending == "fidh")) == !answer ){
      document.getElementById("score").innerHTML = (score -= 200);
    }
    else if ( ((text == "Bris") || (text == "Caith") || (text == "Caill") || (text == "Cuir") || (text == "Ith") || (text == "Clois") || (text == "Déan") || (text == "Faigh")  || (text == "Feic"))  && ((text_ending == "ann") || (text_ending == "faidh")) == !answer ){
      document.getElementById("score").innerHTML = (score += 100);
    }
    else if ( ((text == "Dún") || (text == "Glan") || (text == "Díol") || (text == "Gearr") || (text == "Ól") || (text == "Fág") || (text == "Fan") || (text == "Tóg"))  && ((text_ending == "ann") || (text_ending == "faidh")) == answer ){
      document.getElementById("score").innerHTML = (score += 100);
    }
    else if ( ((text == "Dún") || (text == "Glan") || (text == "Díol") || (text == "Gearr") || (text == "Ól") || (text == "Fág") || (text == "Fan") || (text == "Tóg"))  && ((text_ending == "ann") || (text_ending == "faidh")) == !answer ){
      document.getElementById("score").innerHTML = (score -= 200);
    }
    else if ( ((text == "Dún") || (text == "Glan") || (text == "Díol") || (text == "Gearr") || (text == "Ól") || (text == "Fág") || (text == "Fan") || (text == "Tóg"))  && ((text_ending == "eann") || (text_ending == "fidh")) == !answer ){
      document.getElementById("score").innerHTML = (score += 100);
    }
    else if ( ((text == "Dún") || (text == "Glan") || (text == "Díol") || (text == "Gearr") || (text == "Ól") || (text == "Fág") || (text == "Fan") || (text == "Tóg"))  && ((text_ending == "eann") || (text_ending == "fidh")) == answer ){
      document.getElementById("score").innerHTML = (score -= 200);
    }
    else{
      document.getElementById("score").innerHTML = (score -= 200);
    }
    
    
};


const getCardValues = id => {
  return document.getElementById(id);
};


const _scoreHandling = answer => {
  var verb = getCardValues("verb").innerHTML;
  var verb_ending = getCardValues("verb-ending").innerHTML;
  scoreCount(answer, verb, verb_ending);
  _setCardWordValues();
};


const _keyPressHandle = answer => {
  _scoreHandling(answer);
};

const debounce = (func, delay) => {
  let debounceTimer;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  };
};


function highScoreTable() {
  if (JSON.parse(localStorage.getItem("score_arr")) === null) {
    localStorage.setItem("score_arr", JSON.stringify([]));
    return;
  }
  var list = JSON.parse(localStorage.getItem("score_arr"));
  list =
    list !== null && list.length > 0
      ? list.sort((a, b) => b.score - a.score)
      : [];
  var count = 0;
  for (let i = 0; i < list.length; i++) {
    if (count < 10) {
      high_score_table.innerHTML += `<div class="row m-2">
            <div class="col">
              <span class="p-2 m-2 float-left">${list[i].user}</span>
              <span class="p-2 m-2 float-right">${list[i].score}</span>
            </div>
          </div> `;
    }
    count++;
  }
}


function timer_Count() {
  var timer = setInterval(countdown, 1000);
  function countdown() {
    if (game_time < 0) {
      score > 1000
        ? alert("Maith thú! \n Do scór : " + score)
        : alert(
            "Imir arís! Cleachtadh a dhéanann máistreacht! \n Do scór : " +
              score
          );
      clearTimeout(timer);
      var list = JSON.parse(localStorage.getItem("score_arr"));
      var scoreInfo = { user: username, score: score };
      list.push(scoreInfo);
      localStorage.setItem("score_arr", JSON.stringify(list));
      highScoreTable();
      location.reload();
    } else {
      timer_value.innerHTML = game_time;
      game_time--;
    }
  }
}


function _setCardWordValues() {
  verb.innerHTML = getRandomVerb();

  verb_ending.innerHTML = getRandomEnding();

}


function selectWindow(user) {
  if (user === "" || user === null || user === undefined || user.length < 3) {
    game_window.style.display = "none";
    user_window.style.display = "block";
  } else {
    user_window.style.display = "none";
    game_window.style.display = "block";
    timer_Count();
    _setCardWordValues();
  }
}


function getRandomVerb() {
  
  return verbs[Math.floor((Math.random() * verbs.length) / 2)];
  
}

function getRandomEnding() {
  return endings[Math.floor(Math.random() * endings.length)];
}


answerNo.addEventListener(
  "click",
  debounce(function() {
    _scoreHandling(false);
  }, 200)
);


answerYes.addEventListener(
  "click",
  debounce(function() {
    _scoreHandling(true);
  }, 200)
);


function getUserName() {
  let user = document.getElementById("username").value;
  if (user !== "" && user.length > 2) {
    username = user;
    displayUser.innerHTML = user;
  } else if (user === "") {
    return alert("Iontráil ainm nó ceannlitreacha chun súil a choinneáil ar do scór!");
  } else {
    return alert("Iontráil trí litir ar a laghad!");
  }
  selectWindow(displayUser.innerHTML);
}


function localStorageInit() {
  localStorage.setItem(
    "Color-Match",
    "Check if color written in first card is same of the second card's text color!"
  );
}


game_window.onkeydown = e => {
  if (e.keyCode === 39) {
    console.log("true");
    _keyPressHandle(true);
  }
  if (e.keyCode === 37) {
    console.log("false");
    _keyPressHandle(false);
  }
};


var start = null;
game_window.addEventListener("touchstart", function(event) {
  if (event.touches.length === 1) {
    
    start = event.touches.item(0).clientX;
    console.log(start);
  } else {
    
    start = null;
    console.log("there");
  }
});

game_window.addEventListener("touchend", function(event) {
  var offset = 50; 
  if (start) {
   
    var end = event.changedTouches.item(0).clientX;
    console.log(end);
    if (end > start + offset) {
      _scoreHandling(true); //Right swipe
    }
    if (end < start - offset) {
      _scoreHandling(false); //Left swipe
    }
  }
});


function main() {
  selectWindow(displayUser.value);
  if (game_window.style.display === "block") {
    timer_Count();
    _setCardWordValues();
  }
  highScoreTable();
}


window.onloadstart = localStorageInit();
window.onload = main();
