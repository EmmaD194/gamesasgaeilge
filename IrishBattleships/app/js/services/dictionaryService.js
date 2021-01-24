battleshipsApp.factory('dictionaryService', function () {
  var verbDictionary = [
    {
      verb: 'Bí',
      meaning: 'to be',
      present: ['táim/bím', 'tá tú/bíonn tú', 'tá sé/bíonn sé', 'tá sí/bíonn sí', 'táimid/bímid', 'tá sibh/bíonn sibh', 'tá siad/bíonn siad', 'níl mé', 'an bhfuil tú?', 'táthar/bítear'],
      past: ['bhí mé', 'bhí tú', 'bhí sé', 'bhí sí', 'bhíomar', 'bhí sibh', 'bhí siad', 'ní raibh mé', 'an raibh tú?', 'bhíothas'],
      future: ['beidh mé', 'beidh tú', 'beidh sé', 'beidh sí', 'beimid', 'beidh sibh', 'beidh siad', 'ní bheidh mé', 'an mbeadh tú?', 'beifear'],
      conditional: ['bheinn', 'bheifeá', 'bheadh sé', 'bheadh sí', 'bheimis', 'bheadh sibh', 'bheidís', 'ní bheinn', 'an mbeadh?', 'bheifí']
    },
    {
      verb: 'Téigh',
      meaning: 'to go',
      present: ['téim', 'téann tú', 'téann sé', 'téann sí', 'téimid', 'téann sibh', 'téann siad', 'ní théim', 'an dtéann tú?', 'téitear'],
      past: ['chuaigh mé', 'chuaigh tú', 'chuaigh sé', 'chuaigh sí', 'chuamar', 'chuaigh sibh', 'chuaigh siad', 'ní dheachaigh mé', 'an ndeachaigh tú?', 'chuathas'],
      future: ['rachaidh mé', 'rachaidh tú', 'rachaidh sé', 'rachaidh sí', 'rachaimid', 'rachaidh sibh', 'rachaidh siad', 'ní rachaidh mé', 'an rachaidh tú?', 'rachfar'],
      conditional: ['rachainn', 'rachfá', 'rachadh sé', 'rachadh sí', 'rachaimis', 'rachadh sibh', 'rachaidís', 'ní rachainn', 'an rachfá?', 'rachfaí']
    },
    {
      verb: 'Ól',
      meaning: 'to drink',
      present: ['ólaim', 'ólann tú', 'ólann sé', 'ólann sí', 'ólaimid', 'ólann sibh', 'ólann siad', 'ní ólaim', 'an ólann tú?', 'óltar'],
      past: ['d\'ól mé', 'd\'ól tú', 'd\'ól sé', 'd\'ól sí', 'd\'ólamar', 'd\'ól sibh', 'd\'ól siad', 'níor ól mé', 'ar ól tú?', 'óladh'],
      future: ['ólfaidh mé', 'ólfaidh tú', 'ólfaidh sé', 'ólfaidh sí', 'ólfaimid', 'ólfaidh sibh', 'ólfaidh siad', 'ní ólfaidh mé', 'an ólfaidh tú?', 'ólfar'],
      conditional: ['ólfainn', 'ólfá', 'ólfadh sé', 'ólfadh sí', 'ólfaimis', 'ólfadh sibh', 'ólfaidís', 'ní ólfainn', 'an ólfá?', 'ólfaí']
    },
    {
      verb: 'Dún',
      meaning: 'to close',
      present: ['dúnaim', 'dúnann tú', 'dúnann sé', 'dúnann sí', 'dúnaimid', 'dúnann sibh', 'dúnann siad', 'ní dhúnaim', 'an ndúnann tú?', 'dúntar'],
      past: ['dhún mé', 'dhún tú', 'dhún sé', 'dhún sí', 'dhúnamar', 'dhún sibh', 'dhún siad', 'níor dhún mé', 'ar dhún tú?', 'dúnadh'],
      future: ['dúnfaidh mé', 'dúnfaidh tú', 'dúnfaidh sé', 'dúnfaidh sí', 'dúnfaimid', 'dúnfaidh sibh', 'dúnfaidh siad', 'ní dhúnfaidh mé', 'an ndúnfaidh tú?', 'dúnfar'],
      conditional: ['dhúnfainn', 'dhúnfá', 'dhúnfadh sé', 'dhúnfadh sí', 'dhúnfaimis', 'dhúnfadh sibh', 'dhúnfaidís', 'ní dhúnfainn', 'an ndúnfá?', 'dhúnfaí']
    },
    {
      verb: 'Bris',
      meaning: 'to break',
      present: ['brisim', 'briseann tú', 'briseann sé', 'briseann sí', 'brisimid', 'briseann sibh', 'briseann siad', 'ní bhrisim', 'an mbriseann tú?', 'bristear'],
      past: ['bhris mé', 'bhris tú', 'bhris sé', 'bhris sí', 'bhriseamar', 'bhris sibh', 'bhris siad', 'níor bhris mé', 'ar bhris tú?', 'briseadh'],
      future: ['brisfidh mé', 'brisfidh tú', 'brisfidh sé', 'brisfidh sí', 'brisfimid', 'brisfidh sibh', 'brisfidh siad', 'ní bhrisfidh mé', 'an mbrisfidh tú?', 'brisfear'],
      conditional: ['bhrisfinn', 'bhrisfeá', 'bhrisfeadh sé', 'bhrisfeadh sí', 'bhrisfimis', 'bhrisfeadh sibh', 'bhrisfidís', 'ní bhrisfinn', 'an mbrisfeá?', 'bhrisfí']
    },
    {
      verb: 'Faigh',
      meaning: 'to get',
      present: ['faighim', 'faigheann tú', 'faigheann sé', 'faigheann sí', 'faighimid', 'faigheann sibh', 'faigheann siad', 'ní fhaigheann mé', 'an bhfaigheann tú?', 'faightear'],
      past: ['fuair mé', 'fuair tú', 'fuair sé', 'fuair sí', 'fuaireamar', 'fuair sibh', 'fuair siad', 'ní bhfuair mé', 'an bhfuair tú?', 'fuarthas'],
      future: ['gheobhaidh mé', 'gheobhaidh tú', 'gheobhaidh sé', 'gheobhaidh sí', 'gheobhaimid', 'gheobhaidh sibh', 'gheobhaidh siad', 'ní bhfaighidh mé', 'an bhfaighidh tú?', 'gheofar'],
      conditional: ['gheobhainn', 'gheofá', 'gheobhadh sé', 'gheobhadh sí', 'gheobhaimis', 'gheobhadh sibh', 'gheobhaidís', 'ní bhfaighfinn', 'an bhaighfeá?', 'gheofaí']
    },
    {
      verb: 'Ceannaigh',
      meaning: 'to buy',
      present: ['ceannaím', 'ceannaíonn tú', 'ceannaíonn sé', 'ceannaíonn sí', 'ceannaímid', 'ceannaíonn sibh', 'ceannaíonn siad', 'ní cheannaím', 'an gceannaíonn tú?', 'ceannaítear'],
      past: ['cheannaigh mé', 'cheannaigh tú', 'cheannaigh sé', 'cheannaigh sí', 'cheannaíomar', 'cheannaigh sibh', 'cheannaigh siad', 'níor cheannaigh mé', 'ar cheannaigh tú?', 'ceannaíodh'],
      future: ['ceannfaidh mé', 'ceannóidh tú', 'ceannóidh sé', 'ceannóidh sí', 'ceannóimid', 'ceannóidh sibh', 'ceannóidh siad', 'ní cheannfaidh mé', 'an gceannóidh tú?', 'ceannófar'],
      conditional: ['cheannóinn', 'cheannófá', 'cheannódh sé', 'cheannódh sí', 'cheannóimis', 'cheannódh sibh', 'cheannóidís', 'ní cheannóinn', 'an gceannófá?', 'cheannófaí']
    },
    {
      verb: 'Inis',
      meaning: 'to tell',
      present: ['insím', 'insíonn tú', 'insíonn sé', 'insíonn sí', 'insímid', 'insíonn sibh', 'insíonn siad', 'ní insím', 'an insíonn tú?', 'insítear'],
      past: ['d\'inis mé', 'd\'inis tú', 'd\'inis sé', 'd\'inis sí', 'd\'insíomar', 'd\'inis sibh', 'd\'inis siad', 'níor inis mé', 'ar inis tú?', 'insíodh'],
      future: ['inseoidh mé', 'inseoidh tú', 'inseoidh sé', 'inseoidh sí', 'inseoimid', 'inseoidh sibh', 'inseoidh siad', 'ní inseoidh mé', 'an inseoidh tú?', 'inseofar'],
      conditional: ['d\'inseoinn', 'd\'inseofá', 'd\'inseodh sé', 'd\'inseodh sí', 'd\'inseoimis', 'd\'inseodh sibh', 'd\'inseoidís', 'ní inseoinn', 'an inseofá?', 'd\'inseofaí']
    },
    {
      verb: 'Fan',
      meaning: 'to stay',
      present: ['fanaim', 'fanann tú', 'fanann sé', 'fanann sí', 'fanaimid', 'fanann sibh', 'fanann siad', 'ní fhanaim', 'an bhfanann tú?', 'fantar'],
      past: ['d\'fhan mé', 'd\'fhan tú', 'd\'fhan sé', 'd\'fhan sí', 'd\'fhanamar', 'd\'fhan sibh', 'd\'fhan siad', 'níor fhan mé', 'ar fhan tú?', 'fanadh'],
      future: ['fanfidh mé', 'fanfidh tú', 'fanfidh sé', 'fanfidh sí', 'fanfimid', 'fanfidh sibh', 'fanfidh siad', 'ní fhanfidh mé', 'an bhfanfidh tú?', 'fanfar'],
      conditional: ['d\'fhanfainn', 'd\'fhanfá', 'd\'fhanfadh sé', 'd\'fhanfadh sí', 'd\'fhanfaimis', 'd\'fhanfadh sibh', 'd\'fhanfaidís', 'ní fhanfainn', 'an bhfhanfá?', 'd\'fhanfaí']
    },
    {
      verb: 'Tosaigh',
      meaning: 'to start',
      present: ['tosaím', 'tosaíonn tú', 'tosaíonn sé', 'tosaíonn sí', 'tosaímid', 'tosaíonn sibh', 'tosaíonn siad', 'ní thosaím', 'an dtosaíonn tú?', 'tosaítear'],
      past: ['thosaigh mé', 'thosaigh tú', 'thosaigh sé', 'thosaigh sí', 'thosaíomar', 'thosaigh sibh', 'thosaigh siad', 'níor thosaigh mé', 'ar thosaigh tú?', 'tosaíodh'],
      future: ['tosóidh mé', 'tosóidh tú', 'tosóidh sé', 'tosóidh sí', 'tosóimid', 'tosóidh sibh', 'tosóidh siad', 'ní thosóidh mé', 'an dtosóidh tú?', 'tosófar'],
      conditional: ['thosóinn', 'thosófá', 'thosódh sé', 'thosódh sí', 'thosóimis', 'thosódh sibh', 'thosóidís', 'ní thosóinn', 'an dtosófá?', 'thosófaí']
    },
    {
      verb: 'Cuir',
      meaning: 'to put',
      present: ['cuirim', 'cuireann tú', 'cuireann sé', 'cuireann sí', 'cuirimid', 'cuireann sibh', 'cuireann siad', 'ní chuirim', 'an gcuireann tú?', 'cuirtear'],
      past: ['chuir mé', 'chuir tú', 'chuir sé', 'chuir sí', 'chuireamar', 'chuir sibh', 'chuir siad', 'níor chuir mé', 'ar chuir tú?', 'cuireadh'],
      future: ['chuirfidh mé', 'chuirfidh tú', 'cuirfidh sé', 'cuirfidh sí', 'cuirfimid', 'cuirfidh sibh', 'cuirfidh siad', 'ní chuirfidh mé', 'an gcuirfidh tú?', 'cuirfear'],
      conditional: ['chuirfinn', 'chuirfeá', 'chuirfeadh sé', 'chuirfeadh sí', 'chuirfimis', 'chuirfeadh sibh', 'chuirfidís', 'ní chuirfinn', 'an gcuirfeá?', 'chuirfí']
    },
    {
      verb: 'Feic',
      meaning: 'to see',
      present: ['feicim', 'feiceann tú', 'feiceann sé', 'feiceann sí', 'feicimid', 'feiceann sibh', 'feiceann siad', 'ní fheicim', 'an bhfeiceann tú?', 'feictear'],
      past: ['chonaic mé', 'chonaic tú', 'chonaic sé', 'chonaic sí', 'chonaiceamar', 'chonaic sibh', 'chonaic siad', 'ní fhaca mé', 'an bhfaca tú?', 'chonacthas'],
      future: ['feicfidh mé', 'feicfidh tú', 'feicfidh sé', 'feicfidh sí', 'feicfimid', 'feicfidh sibh', 'feicfidh siad', 'ní fheicfidh mé', 'an bhfeicfidh tú?', 'feicfear'],
      conditional: ['d\'fheicfinn', 'd\'fheicfeá', 'd\'fheicfeadh sé', 'd\'fheicfeadh sí', 'd\'fheicfimis', 'd\'fheicfeadh sibh', 'd\'fheicfidís', 'ní fheicfinn', 'an bhfeicfeá?', 'd\'fheicfí']
    },
    {
      verb: 'Dúisigh',
      meaning: 'to wake up',
      present: ['dúisím', 'dúisíonn tú', 'dúisíonn sé', 'dúisíonn sí', 'dúisímid', 'dúisíonn sibh', 'dúisíonn siad', 'ní dhúisím', 'an ndúisíonn tú?', 'dúisítear'],
      past: ['dhúisigh mé', 'dhúisigh tú', 'dhúisigh sé', 'dhúisigh sí', 'dhúisíomar', 'dhúisigh sibh', 'dhúisigh siad', 'níor dhúisigh mé', 'ar dhúisigh tú?', 'dúisíodh'],
      future: ['dúiseoidh mé', 'dúiseoidh tú', 'dúiseoidh sé', 'dúiseoidh sí', 'dúiseoimid', 'dúiseoidh sibh', 'dúiseoidh siad', 'ní dhúiseoidh mé', 'an ndúiseoidh tú?', 'dúiseofar'],
      conditional: ['dhúiseoinn', 'dhúiseofá', 'dhúiseodh sé', 'dhúiseodh sí', 'dhúiseoimis', 'dhúiseodh sibh', 'dhúiseoidís', 'ní dhúiseoinn', 'an ndúiseofá?', 'dhúiseofaí']
    },
    {
      verb: 'Críochnaigh',
      meaning: 'to finish',
      present: ['críochnaím', 'críochnaíonn tú', 'críochnaíonn sé', 'críochnaíonn sí', 'críochnaímid', 'críochnaíonn sibh', 'críochnaíonn siad', 'ní chríochnaím', 'an gcríochnaíonn tú?', 'críochnaítear'],
      past: ['chríochnaigh mé', 'chríochnaigh tú', 'chríochnaigh sé', 'chríochnaigh sí', 'chríochnaíomar', 'chríochnaigh sibh', 'chríochnaigh siad', 'níor chríochnaigh mé', 'ar chríochnaigh tú?', 'críochnaíodh'],
      future: ['críochnóidh mé', 'críochnóidh tú', 'críochnóidh sé', 'críochnóidh sí', 'críochnóimid', 'críochnóidh sibh', 'críochnóidh siad', 'ní chríochnóidh mé', 'an gcríochnóidh tú?', 'críochnófar'],
      conditional: ['chríochnóinn', 'chríochnófá', 'chríochnódh sé', 'chríochnódh sí', 'chríochnóimis', 'chríochnódh sibh', 'chríchnóidís', 'ní chríochnóinn', 'an gcríochnófá?', 'chríochnófaí']
    },
    {
      verb: 'Rith',
      meaning: 'to run',
      present: ['rithim', 'ritheann tú', 'ritheann sé', 'ritheann sí', 'rithimid', 'ritheann sibh', 'ritheann siad', 'ní rithim', 'an ritheann tú?', 'rithtear'],
      past: ['rith mé', 'rith tú', 'rith sé', 'rith sí', 'ritheamar', 'rith sibh', 'rith siad', 'níor rith mé', 'ar rith tú?', 'ritheadh'],
      future: ['rithfidh mé', 'rithfidh tú', 'rithfidh sé', 'rithfidh sí', 'rithfimid', 'rithfidh sibh', 'rithfidh sibh', 'ní rithfidh mé', 'ar rithfidh tú?', 'rithfear'],
      conditional: ['rithfinn', 'rithfeá', 'rithfeadh sé', 'rithfeadh sí', 'rithfimis', 'rithfeadh sibh', 'rithfidís', 'ní rithfinn', 'an rithfeá?', 'rithfí']
    },
    {
      verb: 'Bailigh',
      meaning: 'to collect',
      present: ['bailím', 'bailíonn tú', 'bailíonn sé', 'bailíonn sí', 'bailíimid', 'bailíonn sibh', 'bailíonn siad', 'ní bhailím', 'an mbailíonn tú?', 'bailítear'],
      past: ['bhailigh mé', 'bhailigh tú', 'bhailigh sé', 'bhailigh sí', 'bhailíomar', 'bhailigh sibh', 'bhailigh siad', 'níor bhailigh mé', 'ar bhailigh tú?', 'bailíodh'],
      future: ['baileoidh mé', 'baileoidh tú', 'baileoidh sé', 'baileoidh sí', 'baileoimid', 'baileoidh sibh', 'baileoidh siad', 'ní bhaileoidh mé', 'an mbaileoidh tú?', 'baileofar'],
      conditional: ['bhaileoinn', 'bhaileofá', 'bhaileodh sé', 'bhaileodh sí', 'bhaileoimis', 'bhaileodh sibh', 'bhaileoidís', 'ní bhaileoinn', 'an mbaileofá?', 'bhaileofaí']
    },
    {
      verb: 'Clois',
      meaning: 'to hear',
      present: ['cloisim', 'cloiseann tú', 'cloiseann sé', 'cloiseann sí', 'cloisimid', 'cloiseann sibh', 'cloiseann siad', 'ní chloisim', 'an gcloiseann tú?', 'cloistear'],
      past: ['chuala mé', 'chuala tú', 'chuala sé', 'chuala sí', 'chualamar', 'chuala sibh', 'chuala siad', 'níor chuala mé', 'ar chuala tú?', 'chualathas'],
      future: ['cloisfidh mé', 'cloisfidh tú', 'cloisfidh sé', 'cloisfidh sí', 'cloisfimid', 'cloisfidh sibh', 'cloisfidh siad', 'ní chloisfidh mé', 'an gcloisfidh tú?', 'cloisfear'],
      conditional: ['chloisfinn', 'chloisfeá', 'chloisfeadh sé', 'chloisfeadh sí', 'chloisfimis', 'chloisfeadh sibh', 'chloisfidís', 'ní chloisfinn', 'an gcloisfeá?', 'chloisfí']
    }
  ];

  var providedVerbs = [],
    randomDictionarySet = [];


  return {
    getVerbs: function getVerbs (tense, number) {
      var verbsToReturn = [];
      providedVerbs = [];
      // var slicedVerbsFromDiciionary = verbDictionary.slice(-number);
      randomDictionarySet = getRandomSubarray(verbDictionary, number);
      angular.forEach(randomDictionarySet, function (entry) {
        switch (tense) {
          case "present": verbsToReturn.push({ verb: entry.verb, verbs: entry.present });
            providedVerbs.push.apply(providedVerbs, entry[tense]);
            break;
          case "past": verbsToReturn.push({ verb: entry.verb, verbs: entry.past });
            providedVerbs.push.apply(providedVerbs, entry[tense]);
            break;
          case "future": verbsToReturn.push({ verb: entry.verb, verbs: entry.future });
            providedVerbs.push.apply(providedVerbs, entry[tense]);
            break;
          case "conditional": verbsToReturn.push({ verb: entry.verb, verbs: entry.conditonal });
            providedVerbs.push.apply(providedVerbs, entry[tense]);
            break;
        }
      });
      
      return verbsToReturn;
    },
    getProvidedVerbs: function () {
      return providedVerbs;
    },
    getSwitchedVerbs: function getVerbs (tense, number) {
      var verbsToReturn = [];
      providedVerbs = [];
      angular.forEach(randomDictionarySet, function (entry) {
        switch (tense) {
          case "present": verbsToReturn.push({ verb: entry.verb, verbs: entry.present });
            providedVerbs.push.apply(providedVerbs, entry[tense]);
            break;
          case "past": verbsToReturn.push({ verb: entry.verb, verbs: entry.past });
            providedVerbs.push.apply(providedVerbs, entry[tense]);
            break;
          case "future": verbsToReturn.push({ verb: entry.verb, verbs: entry.future });
            providedVerbs.push.apply(providedVerbs, entry[tense]);
            break;
          case "conditional": verbsToReturn.push({ verb: entry.verb, verbs: entry.conditional });
            providedVerbs.push.apply(providedVerbs, entry[tense]);
            break;
        }
      });
      return verbsToReturn;
    },
    getVerbData: function (verb, tense) {
      var returnVerbData = {};
      angular.forEach(verbDictionary, function (entry) {
        if (entry.verb === verb) {
          returnVerbData.meaning = entry.meaning;
          returnVerbData.conjugations = entry[tense];
        }
      });
      return returnVerbData;
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