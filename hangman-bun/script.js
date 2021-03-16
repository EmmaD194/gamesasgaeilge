

window.onload = function () {

  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'l', 'm', 'n', 'o', 'p', 'r', 's',
    't', 'u', 'v','á', 'é', 'í', 'ó', 'ú'];

  var dictionary = {
    categories: [
      {
        category: "Dathanna - Colours",
        words: [
          {
            word: "gorm",
            hint: "blue"
          },
          {
            word: "dearg",
            hint: "red"
          },
          {
            word: "buí",
            hint: "yellow"
          },
          {
            word: "corcra",
            hint: "purple"
          },
          {
            word: "glas",
            hint: "green"
          },
          {
            word: "oráiste",
            hint: "orange"
          }
        ]
      },
      {
        category: "Ainmhithe - Animals",
        words: [
          {
            word: "madra",
            hint: "dog"
          },
          {
            word: "capall",
            hint: "horse"
          },
          {
            word: "luch",
            hint: "mouse"
          },
          {
            word: "coinín",
            hint: "rabbit"
          },
          {
            word: "gráinneog",
            hint: "hedgehog"
          },
          {
            word: "caora",
            hint: "sheep"
          }
        ]
      },
      {
        category: "An Corp - The Body",
        words: [
          {
            word: "gruaig",
            hint: "hair"
          },
          {
            word: "súil",
            hint: "eye"
          },
          {
            word: "lámh",
            hint: "hand"
          },
          {
            word: "srón",
            hint: "nose"
          },
          {
            word: "cluas",
            hint: "ear"
          },
          {
            word: "béal",
            hint: "mouth"
          }
        ]
      },
      {
        category: "Ábhair Scoile - School Subjects",
        words: [
          {
            word: "mata",
            hint: "maths"
          },
          {
            word: "béarla",
            hint: "English"
          },
          {
            word: "Gaeilge",
            hint: "Irish"
          },
          {
            word: "ealaín",
            hint: "art"
          },
          {
            word: "stair",
            hint: "history"
          },
          {
            word: "corpoideachas",
            hint: "P.E"
          }
        ]
      }
      

    ]
  };

  var categories;         
  var chosenCategory;    
  var word;              
  var guess;              
  var guesses = [];      
  var lives;              
  var counter;            
  var space;              


  var showLives = document.getElementById("mylives");
  var showClue = document.getElementById("clue");


  var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }


  result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      }
      else if (word[i] == "_") {
        guess.innerHTML = " ";
        space = 1;
      }
      else {
        guess.innerHTML = "_";
      }

      guesses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }


  comments = function () {
    showLives.innerHTML = "You have <b>" + lives + "</b> lives";
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
      showClue.innerHTML = "The word was " + word_data.word;
    }
    for (var i = 0; i < guesses.length; i++) {
      if (counter + space === guesses.length) {
        showLives.innerHTML = "<span class='victory'>You Win!</span>";
      }
    }
  }


  var animate = function () {
    var drawMe = lives;
    drawArray[drawMe]();
  }



  canvas = function () {

    myStickman = document.getElementById("stickman");
    context = myStickman.getContext('2d');
    context.beginPath();
    context.strokeStyle = "#000";
    context.lineWidth = 2;
  };

  torse = function () {
    myStickman = document.getElementById("stickman");
    context = myStickman.getContext('2d');
    context.beginPath();
    context.arc(60, 25, 10, 0, Math.PI * 2, true);
    context.stroke();
  }

  draw = function ($pathFromx, $pathFromy, $pathTox, $pathToy) {
    context.moveTo($pathFromx, $pathFromy);
    context.lineTo($pathTox, $pathToy);
    context.stroke();
  }

  frame1 = function () {
    draw(0, 150, 150, 150);
  };

  frame2 = function () {
    draw(10, 0, 10, 600);
  };

  frame3 = function () {
    draw(0, 5, 70, 5);
  };

  frame4 = function () {
    draw(60, 5, 60, 15);
  };

  head = function () {
    draw(60, 36, 60, 70);
  };

  rightArm = function () {
    draw(60, 46, 100, 50);
  };

  leftArm = function () {
    draw(60, 46, 20, 50);
  };

  rightLeg = function () {
    draw(60, 70, 100, 100);
  };

  leftLeg = function () {
    draw(60, 70, 20, 100);
  };

  drawArray = [
    rightLeg,
    leftLeg,
    rightArm,
    leftArm,
    head,
    torse,
    frame4,
    frame3,
    frame2,
    frame1
  ];


  check = function () {
    list.onclick = function () {
      var geuss = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === geuss) {
          guesses[i].innerHTML = geuss;
          counter += 1;
        }
      }
      var j = (word.indexOf(geuss));
      if (j === -1) {
        lives -= 1;
        comments();
        animate();
      } else {
        comments();
      }
    }
  }


  var selectCat = function () {
    catagoryName.innerHTML = "The category is<br/><b>" + chosenCategory.category + "</b>";
  }

 
  play = function () {
    chosenCategory = dictionary.categories[Math.floor(Math.random() * dictionary.categories.length)];
    word_data = chosenCategory.words[Math.floor(Math.random() * chosenCategory.words.length)];
    word = word_data.word.replace(/\s/g, "-");
    console.log(word);
    buttons();

    guesses = [];
    lives = 10;
    counter = 0;
    space = 0;
    result();
    comments();
    selectCat();
    canvas();
  }

  play();

  // Hint

  hint.onclick = function () {
    showClue.innerHTML = "Clue: " + word_data.hint;
  };

  // Reset

  document.getElementById('reset').onclick = function () {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    showClue.innerHTML = "";
    context.clearRect(0, 0, 400, 400);
    play();
  }
}