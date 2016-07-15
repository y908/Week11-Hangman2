var game = require('./game');

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
  };

}

var yana = new Checker({counter: 10});

module.exports.Checker = Checker;

module.exports.yana = yana;