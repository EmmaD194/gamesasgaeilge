battleshipsApp.factory('dictionaryService', function () {
  var pronounDictionary = [
    {
      pronoun: 'ag',
      meaning: 'at',
      present: ['agam', 'agat', 'aige', 'aici', 'againn', 'agaibh', 'acu']
    },
    {
      pronoun: 'ar',
      meaning: 'on',
      present: ['orm', 'ort', 'air', 'uirthi', 'orainn', 'oraibh', 'orthu']
      
    },
    {
      pronoun: 'as',
      meaning: 'from',
      present: ['asam', 'asat', 'as', 'aisti', 'asainn', 'asaibh', 'astu']
    },
    {
      pronoun: 'chuig',
      meaning: 'to',
      present: ['chugam', 'chugat', 'chuige', 'chuici', 'chugainn', 'chugaibh', 'chucu']
     
    },
    {
      pronoun: 'de',
      meaning: 'of',
      present: ['díom', 'díot', 'de', 'di', 'dínn', 'díbh', 'díobh']
    },
    {
      pronoun: 'do',
      meaning: 'for',
      present: ['dom', 'duit', 'dó', 'di', 'dúinn', 'daoibh', 'dóibh']
    },
    {
      pronoun: 'faoi',
      meaning: 'under',
      present: ['fúm', 'fút', 'faoi', 'fúithi', 'fúinn', 'fúibh', 'fúthu']
    },
    {
      pronoun: 'i',
      meaning: 'in',
      present: ['ionam', 'ionat', 'ann', 'inti', 'ionainn', 'ionaibh', 'iontu']
    },
    {
      pronoun: 'le',
      meaning: 'with',
      present: ['liom', 'leat', 'leis', 'léi', 'linn', 'libh', 'leo']
    },
    {
      pronoun: 'ó',
      meaning: 'from',
      present: ['uaim', 'uait', 'uaidh', 'uaithi', 'uainn', 'uaibh', 'uathu']
    },
    {
      pronoun: 'roimh',
      meaning: 'before',
      present: ['romham', 'romhat', 'roimhe', 'roimpi', 'romhainn', 'romhaibh', 'rompu']
    },
    {
      pronoun: 'thar',
      meaning: 'over',
      present: ['tharam', 'tharat', 'tharis', 'thairsti', 'tharainn', 'tharaibh', 'tharstu']
    }
    
  ];

  var providedpronouns = [],
    randomDictionarySet = [];


  return {
    getpronouns: function getpronouns (tense, number) {
      var pronounsToReturn = [];
      providedpronouns = [];
      // var slicedpronounsFromDiciionary = pronounDictionary.slice(-number);
      randomDictionarySet = getRandomSubarray(pronounDictionary, number);
      angular.forEach(randomDictionarySet, function (entry) {
        switch (tense) {
          case "present": pronounsToReturn.push({ pronoun: entry.pronoun, pronouns: entry.present });
            providedpronouns.push.apply(providedpronouns, entry[tense]);
            break;
          case "past": pronounsToReturn.push({ pronoun: entry.pronoun, pronouns: entry.past });
            providedpronouns.push.apply(providedpronouns, entry[tense]);
            break;
          case "future": pronounsToReturn.push({ pronoun: entry.pronoun, pronouns: entry.future });
            providedpronouns.push.apply(providedpronouns, entry[tense]);
            break;
          case "conditional": pronounsToReturn.push({ pronoun: entry.pronoun, pronouns: entry.conditonal });
            providedpronouns.push.apply(providedpronouns, entry[tense]);
            break;
        }
      });
      
      return pronounsToReturn;
    },
    getProvidedpronouns: function () {
      return providedpronouns;
    },
    getSwitchedpronouns: function getpronouns (tense, number) {
      var pronounsToReturn = [];
      providedpronouns = [];
      angular.forEach(randomDictionarySet, function (entry) {
        switch (tense) {
          case "present": pronounsToReturn.push({ pronoun: entry.pronoun, pronouns: entry.present });
            providedpronouns.push.apply(providedpronouns, entry[tense]);
            break;
          case "past": pronounsToReturn.push({ pronoun: entry.pronoun, pronouns: entry.past });
            providedpronouns.push.apply(providedpronouns, entry[tense]);
            break;
          case "future": pronounsToReturn.push({ pronoun: entry.pronoun, pronouns: entry.future });
            providedpronouns.push.apply(providedpronouns, entry[tense]);
            break;
          case "conditional": pronounsToReturn.push({ pronoun: entry.pronoun, pronouns: entry.conditional });
            providedpronouns.push.apply(providedpronouns, entry[tense]);
            break;
        }
      });
      return pronounsToReturn;
    },
    getpronounData: function (pronoun, tense) {
      var returnpronounData = {};
      angular.forEach(pronounDictionary, function (entry) {
        if (entry.pronoun === pronoun) {
          returnpronounData.meaning = entry.meaning;
          returnpronounData.conjugations = entry[tense];
        }
      });
      return returnpronounData;
    }
  };

  function getRandomSubarray(arr, size) {
    var shuffled = arr.slice(0), i = arr.length, temp, index;
    while (i--) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(0, size);
  }
});