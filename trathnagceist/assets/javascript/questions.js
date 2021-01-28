var question1 = new quiz.questions("ainmfhocal", "Roghnaigh an t-ainmfhocal:", 1);
var question2 = new quiz.questions("forainm", "Roghnaigh an forainm", 2);
var question3 = new quiz.questions("aidiacht", "Roghnaigh an aidiacht:", 3);
var question4 = new quiz.questions("briathar", "Roghnaigh an briathar:", 4);
//var question5 = new quiz.questions("dobhriathar", "Roghnaigh an dobhriathar:", 5);
var question6 = new quiz.questions("réamhfhocal", "Roghnaigh an réamhfhocal:", 6);
//var question7 = new quiz.questions("cónasc", "Roghnaigh an cónasc:", 7);
//var question8 = new quiz.questions("interjection", "Please select the interjection:", 8);

var answer1 = new quiz.answers("ainmfhocal");
var answer2 = new quiz.answers("forainm");
var answer3 = new quiz.answers("aidiacht");
var answer4 = new quiz.answers("briathar");
//var answer5 = new quiz.answers("dobhriathar");
var answer6 = new quiz.answers("réamhfhocal");
//var answer7 = new quiz.answers("cónasc");
//var answer8 = new quiz.answers("interjection");

answer1.atextarray = ["bean", "fear", "dán", "madra", "amhrán", "eolas", "peann", "ciseán", "clann", "rialtas", "fón", "éan", "ríomhaire", "feoil", "bliain", "bláth", "ceol", "duine", "leabhar", "ainm", "caife", "bia", "scoil", "múinteoir", "ábhar", "gabhar", "leabharlann", "fadhb", "cluiche", "lámh", "gruaig", "srón", "péist", "crann", "ubh", "idirlíon", "teilifís", "eolaíocht", "cistin", "nadúr"];


answer2.atextarray = ["mé", "tú", "sé", "sí", "sinn", "sibh", "siad"];

answer3.atextarray = ["cáiliúil", "bocht", "brónach", "cróga", "ciúin", "greannmhar", "foirfe", "feargach", "cabhrach", "beag", "caintach", "tinn", "deas"];

answer4.atextarray = ["tá", "fuair", "feic", "gortaigh", "caill", "beidh", "bhí", "tóg", "ceannaigh", "ól", "foghlaim", "éirigh", "chuaigh", "tháinig", "thug", "déan", "rinne", "dún", "déan", "duirt", "D'fhan", "cuimhnigh", "socraigh", "d'fhág", "bris", "bhailigh", "chuala", "tiocfaidh", "cuireann", "thosaigh"];


//answer5.atextarray = ["not", "also", "very", "often", "however", "too", "usually", "really", "early", "never", "always", "sometimes", "together", "likely", "simply", "generally", "instead", "actually", "again", "rather", "almost", "especially", "ever", "quickly", "probably", "already", "below", "directly", "therefore", "else", "thus", "easily", "eventually", "exactly", "certainly", "normally", "currently", "extremely", "finally", "constantly", "properly", "soon", "specifically", "ahead", "daily", "highly", "immediately", "relatively", "slowly", "fairly", "primarily", "completely", "ultimately", "widely", "recently", "seriously", "frequently", "fully", "mostly", "naturally", "nearly", "occasionally", "carefully", "clearly", "essentially", "possibly", "slightly", "somewhat", "equally", "greatly", "necessarily", "personally", "rarely", "regularly", "similarly", "basically", "closely", "effectively", "initially", "literally", "mainly", "merely", "gently", "hopefully", "originally", "roughly", "significantly", "totally", "twice", "elsewhere", "everywhere", "obviously", "perfectly", "physically", "successfully", "suddenly", "truly", "virtually", "altogether", "anyway", "automatically", "deeply", "definitely", "deliberately", "hardly", "readily", "terribly", "unfortunately", "forth", "briefly", "moreover", "strongly", "honestly", "previously"];

answer6.atextarray = ["le", "ag", "ón", "ar", "tríd", "chuig", "thar", "as", "faoi", "roimh", "chun", "idir", "i", "in"];

//answer7.atextarray = ["agus", "chomh maith le", "ach", "nó", "seachas", "mar", "nuair", "mar gheall ar", "le linn","tar éis", "anois"];

//answer8.atextarray = ["ah", "a-ha", "ahem", "alas", "amen", "aw", "awesome", "bada bing", "bah", "baloney", "big deal", "bingo", "boo", "boo hoo", "booya", "boy oh boy", "bravo", "brillliant", "brrr", "bull", "bye", "cheers", "come on", "cool", "cowabunga", "dang", "darn", "dear me", "duck", "duh", "eh", "enjoy", "excellent", "fabulous", "fantastic", "fiddle dee dee", "finally", "for heaven's sake", "fore", "foul", "freeze", "gee whiz", "giddyap", "golly", "goodbye", "good grief", "good heavens", "gosh", "great", "great balls of fire", "ha", "hallelujah", "heavens", "heigh ho", "hello", "help", "hey", "hi", "hip, hip, hooray", "hmm", "ho ho ho", "holy mackerel", "ho hum", "hooray ", "howdy ", "huh", "ick", "indeed", "jeez", "kaboom", "kapow", "lordy ", "mama mia", "man", "marvelous", "my", "my goodness", "nah", "no problem", "no way", "nope", "nuts", "oh ", "OK", "ouch", "ow", "please", "poof", "sh", "super", "swell", "welcome", "well", "whoop-de-doo", "woo-hoo", "wow", "yabba dabba do", "yadda yadda", "yippee", "yummy"];
