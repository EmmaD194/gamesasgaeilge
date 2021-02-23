(function () {
  'use strict';

  battleshipsApp.controller('BattleshipsController',
    function BattleshipsController($scope, $interval, boardService, dictionaryService, ngDialog) {
      var pronounsTried = [],
        locationsTried = [],
        blown,
        interval;

      interval = $interval(function() {
        $('.inputWord').focus();
      }, 100);

      $scope.$on('$destroy', function() {
        $interval.cancel(interval);
        interval = undefined;
      });

      function isUpperCase (char) {
        return !!/[A-Z]/.exec(char[0]);
      }

      

      $scope.selectedTense = "present";
      $scope.showBoard = true;
      $scope.showCompleted = false;
      $scope.movesCount = 0;

      $scope.fiveLongASunk = false;
      $scope.fiveLongBSunk = false;
      $scope.fourLongASunk = false;
      $scope.fourLongBSunk = false;
      $scope.threeLongASunk = false;
      $scope.threeLongBSunk = false;
      $scope.twoLongSunk = false;

      $scope.inputText = "";
      $scope.filteredInputText = "";
      $scope.showFilteredInputText = false;
      $scope.divText = '';
      $scope.divTextColor = 'red';
      $scope.faighColour = 'black';

      $scope.showDefinition = function (pronounName) {
        var pronounData = dictionaryService.getpronounData(pronounName, $scope.selectedTense);
        $scope.pronounName = pronounName;
        $scope.meaning = pronounData.meaning;
        $scope.conjugations = pronounData.conjugations;

        ngDialog.open({
          className: 'ngDialog-theme-default',
          template: 'pronounDefinitionTemplate',
          scope: $scope
        });
      };

      $scope.switchTense = function (tense) {
        $scope.selectedTense = tense;
        $scope.boardpronouns = dictionaryService.getSwitchedpronouns($scope.selectedTense, $scope.numberOfpronouns);
      };

      $scope.resetBoard = function (numberOfpronouns) {
        
        
        if (numberOfpronouns !== undefined) {
          $scope.numberOfpronouns = numberOfpronouns;
        }
        $scope.boardpronouns = dictionaryService.getpronouns($scope.selectedTense, $scope.numberOfpronouns);
        $scope.boardLayout = boardService.layout($scope.numberOfpronouns);
        $scope.ships = boardService.ships();
        pronounsTried = [],
        locationsTried = [];
        $scope.fiveLongASunk = false;
        $scope.fiveLongBSunk = false;
        $scope.fourLongASunk = false;
        $scope.fourLongBSunk = false;
        $scope.threeLongASunk = false;
        $scope.threeLongBSunk = false;
        $scope.twoLongSunk = false;
        $scope.movesCount = 0;
        $scope.showBoard = true;
        $scope.showCompleted = false;
      };

      $scope.keydown = function (e) {
        if (e.keyCode === 8) {
          $scope.showFilteredInputText = false;
        }
      };

      $scope.keyup = function (e) {
        var allpronouns,
          enteredChar;

        if (e.keyCode === 13) {
          return;
        }

        allpronouns = dictionaryService.getProvidedpronouns();
        enteredChar = $scope.inputText.slice(-1);

        

        $scope.inputText = $scope.inputText.toLowerCase();
        $scope.filteredInputText = $scope.inputText;

        if (allpronouns.indexOf($scope.filteredInputText) !== -1) {
          $scope.divTextColor = "green";
        } else {
          $scope.divTextColor = "red";
        }

        $scope.showFilteredInputText = true;

        window.scrollTo(0, document.body.scrollHeight);
      };

      $scope.onShotAttempt = function () {
        var inputText = $scope.inputText,
          that = this,
          location;
        $scope.inputText = "";
        $scope.validationMessage = "";

        if(inputText === "") {
          $scope.validationMessage = "You haven't entered a word!";
          return;
        }

        var coord = null;
        angular.forEach($scope.boardpronouns, function (boardpronoun, boardpronounIndex) {
          var pronouns = boardpronoun.pronouns;
          angular.forEach(pronouns, function (pronoun, pronounIndex) {
            if (inputText === pronoun) {
              coord = {
                x: boardpronounIndex,
                y: pronounIndex
              };
            }
          });
        });

        if (coord === null) {
          $scope.validationMessage = inputText + " not found!";
          $scope.filteredInputText = "";
          return;
        }

        if (pronounsTried.indexOf(inputText) !== -1) {
          $scope.validationMessage = "You have already tried " + inuputText + "!";
          $scope.filteredInputText = "";
          return;
        }
        pronounsTried.push(inputText);

        location = "x" + coord.x + "y" + coord.y;
        if (locationsTried.indexOf(location) !== -1) {
          $scope.validationMessage = "You have already tried there!";
          $scope.filteredInputText = "";
          return;
        }
        locationsTried.push(location);
        $scope.movesCount++;

        angular.forEach($scope.ships, function(ship) {
          if(ship.sunk === false) {
            var i = ship.coords.length,
              shipCoord;
            while (i--) {
              shipCoord = ship.coords[i];
              if(shipCoord.x === coord.x && shipCoord.y === coord.y) {
                $scope.boardLayout.rows[coord.y][coord.x].colour = 'red';
                blown = true;
                ship.coords.splice(i, 1);
                if(ship.coords.length === 0) {
                  ship.sunk = true;
                  switch (ship.shipId) {
                    case "fiveLongA": $scope.fiveLongASunk = true;
                      break;
                    case "fiveLongB": $scope.fiveLongBSunk = true;
                      break;  
                    case "fourLongA": $scope.fourLongASunk = true;
                      break;
                    case "fourLongB": $scope.fourLongBSunk = true;
                      break;
                    case "threeLongA": $scope.threeLongASunk = true;
                      break;
                    case "threeLongB": $scope.threeLongBSunk = true;
                      break;  
                    case "twoLong": $scope.twoLongSunk = true;
                      break;
                  }
                  faighInterval(50, 20);
                  if ($scope.fiveLongASunk && $scope.fiveLongBSunk && $scope.fourLongBSunk && $scope.fourLongASunk && $scope.threeLongASunk && $scope.threeLongBSunk && $scope.twoLongSunk) {
                    $scope.showCompleted = true;
                    $scope.showBoard = false;
                  }
                }
              }
            }
          }
        });
        if(!blown) {
          $scope.boardLayout.rows[coord.y][coord.x].colour = 'yellow';
        }
        blown = false;

        window.scrollTo(0, 0);

        function faighInterval(delay, count) {
          $scope.showBoard = false;
          $interval(function () {
            if($scope.faighColour === 'red') {
              $scope.faighColour = 'red';
            } else {
              $scope.faighColour = 'red';
            }
          }, delay, count).then(function () {$scope.showBoard = true;});
        }
      };
    }  
  );
}());