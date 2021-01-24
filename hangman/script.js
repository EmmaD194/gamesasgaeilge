

window.onload = function () {

  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'l', 'm', 'n', 'o', 'p', 'r', 's',
    't', 'u', 'v','á', 'é', 'í', 'ó', 'ú'];

  var dictionary = {
    categories: [
      {
        category: "Géibheann",
        words: [
          {
            word: "éadochas",
            hint: "despair"
          },
          {
            word: "príosúnach",
            hint: "prisoner"
          },
          {
            word: "frustrachas",
            hint: "frustration"
          },
          {
            word: "fiáin",
            hint: "wild"
          },
          {
            word: "cruálach",
            hint: "cruel"
          },
          {
            word: "saorvéarsaíocht",
            hint: "free verse"
          }
        ]
      },
      {
        category: "tearmaí ginearálta",
        words: [
          {
            word: "íomhanna",
            hint: "images"
          },
          {
            word: "meafar",
            hint: "metaphor"
          },
          {
            word: "téama",
            hint: "theme"
          },
          {
            word: "mothúcháin",
            hint: "emotions"
          },
          {
            word: "ábhar",
            hint: "subject"
          },
          {
            word: "éifeacht",
            hint: "effect"
          }
        ]
      },
      {
        category: "Colscaradh",
        words: [
          {
            word: "grá_casta",
            hint: "complicated love"
          },
          {
            word: "fuarchúiseach",
            hint: "cold-blooded"
          },
          {
            word: "tiomantas",
            hint: "commitment"
          },
          {
            word: "sean-aimseartha",
            hint: "old fashioned"
          },
          {
            word: "réiteach",
            hint: "solution"
          },
          {
            word: "rím",
            hint: "rhyme"
          }
        ]
      },
      {
        category: "Mo Ghrása idir lúibíní",
        words: [
          {
            word: "drochmheas",
            hint: "contempt"
          },
          {
            word: "gránna",
            hint: "ugly"
          },
          {
            word: "smaointeach",
            hint: "thoughtful"
          },
          {
            word: "ag magadh",
            hint: "mocking"
          },
          {
            word: "aisteach",
            hint: "strange"
          }
        ]
      },
      {
        category: "An Spailpín Fánach",
        words: [
          {
            word: "mí-úsáide",
            hint: "abuse"
          },
          {
            word: "smacht",
            hint: "control"
          },
          {
            word: "maslach",
            hint: "insulting"
          },
          {
            word: "sclábhaithe_feirme",
            hint: "farm slaves"
          },
          {
            word: "pá_íseal",
            hint: "low pay"
          },
          {
            word: "tiarnaí_talún",
            hint: "landlords"
          },
          {
            word: "náire",
            hint: "shame"
          }
        ]
      },
      {
        category: "An tEarrach Thiar",
        words: [
          {
            word: "áit_dhúchais",
            hint: "birth place"
          },
          {
            word: "uaigneas",
            hint: "loneliness"
          },
          {
            word: "cumha",
            hint: "nostalgia"
          },
          {
            word: "créafóg",
            hint: "clay"
          },
          {
            word: "ciseán",
            hint: "basket"
          },
          {
            word: "bataí_rámha",
            hint: "oars"
          },
          {
            word: "niamhrach",
            hint: "bright/shining"
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
    context.strokeStyle = "#fff";
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