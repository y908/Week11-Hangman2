var game = require('./game');


function Dashes(options){
  
  this.lines = function(){
    var dashedWord = game.currentWord.split('')
    for(var i = 0; i<game.currentWord.length; i++){
    dashedWord[i] = '_ ';
   }
   console.log(dashedWord.join(''));
  }

}

var yana2 = new Dashes({});

module.exports.Dashes = Dashes;
module.exports.yana2 = yana2; 