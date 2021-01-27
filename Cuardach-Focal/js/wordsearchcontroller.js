"use strict";


function WordSearchController(gameId, listId, solveId, newGameId, instructionsId, themeId) {


	var searchTypes = {

		"Dathanna": [["Gorm", "Glas", "Dearg", "Buí"],
			["Bándearg", "Corcra", "Oráiste", "Dubh"],
			["Donn", "Liath", "Dúghorm", "Bán"]
			],
		"An Corp": [["Gruaig", "Súil", "Cos", "Srón"],
			["bolg", "béal", "muinéal", "lámh"],
			["uillinn", "méara", "glúin", "cluas"],
			],
	 	"Ábhair Scoile": [["béarla", "gaeilge", "mata", "eolaíocht"],
			["ealaín", "stair", "tíos", "tíreolaíocht"],
			["gnó", "Fraincis", "Corpoideachas", "Gearmáinis"],
			],
		"Ainmhithe": [["Cearc", "Madra", "capall", "sionnach"],
			["Feileachán", "luch", "Coinín", "Bó"],
			["Caora", "Gráinneog", "Péist", "Gabhar"],
			],
		"Na Míonna": [["Eanair", "Feabhra", "Márta", "Aibreán"],
			["Bealtaine", "Meitheamh", "Iúil", "Lúnasa"],
			["MeánFomhair", "DeireadhFomhair", "Samhain", "Nollaig"],
			],
		
		

		

	};

	
	var game;
	var view;

	
	var mainInstructions = "Cuardaigh liosta na bhfocal taobh istigh den bhosca agus cliceáil-agus-tarraing chun iad a roghnú!";

	
	alert("This game only works on computers/laptops for now, but don't worry I'll have it working on mobile soon!");

	setUpWordSearch();
	//alert("This game only works on computers/laptops, but don't worry i'll have it working on mobiloe soon!");

	
	function setUpWordSearch() {

		
		var searchTypesArray = Object.keys(searchTypes);
		var randIndex = Math.floor(Math.random()*searchTypesArray.length); 
		var listOfWords = searchTypes[searchTypesArray[randIndex]]; 

		
		convertToUpperCase(listOfWords); 

		
		updateHeadings(mainInstructions, searchTypesArray[randIndex]);

		
		game = new WordSearchLogic(gameId, listOfWords.slice());
		game.setUpGame();

		
		view = new WordSearchView(game.getMatrix(), game.getListOfWords(), gameId, listId, instructionsId);
		view.setUpView();
		view.triggerMouseDrag();

	}

	
	function convertToUpperCase(wordList)  {

		for (var i = 0; i < wordList.length; i++) {

			for(var j = 0; j < wordList[i].length; j++) {

				wordList[i][j] = wordList[i][j].toUpperCase();

			}

		}

	}

	
	function updateHeadings(instructions, theme) {

		$(instructionsId).text(instructions);
		$(themeId).text(theme);

	}

	
	$(solveId).on( "click", function() {

		view.solve(game.getWordLocations(), game.getMatrix());

	});

	
	$(newGameId).on("click",function() {

		
		$(gameId).empty();
		$(listId).empty();
		$(themeId).empty();

		
		setUpWordSearch();

	})

}