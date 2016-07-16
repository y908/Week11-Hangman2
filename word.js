var game = require('./game');
var letter = require('./letter');
var found = 0;

/*console.log("------------------");
console.log(game.currentWord);
console.log("------------------");*/

function Checker(options) {
  //the number of guesses remaining
  this.counter = options.counter;

  //code to decrease the counter
  this.decreaseCounter = function(){
    this.counter--;
    console.log("Number of guesses remaining: "+this.counter);
  }

  //
  this.gameCheck = function(){
    if (this.counter == 10){
      console.log("Yay this works");
      this.decreaseCounter();
    }
  }


  this.letterCheck = function(l){

    console.log("your letterCheck is: " + l);

/*    var gameWord =  game.currentWord.split('')
    for(var i = 0; i<game.currentWord.length; i++){
      if (main.game.guess == gameWord[i]){
        letter.dashedWord[i] == game.currentWord;
        found = 1; 
      }
    }*/

  } // end of letterCheck

}

var yana = new Checker({counter: 10});

module.exports.Checker = Checker;

module.exports.yana = yana;