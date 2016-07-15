var Wordbank = require('./game');

function checker(options) {
  this.counter = options.counter;

  this.decreaseCounter = function(){
    this.counter--;
    console.log("Number of guesses remaining: "+this.counter);
  }

  this.gameCheck = function(){
    if (this.counter == 10){
      console.log("Yay this works");
      this.decreaseCounter();
    }
  };

}

var yana = new checker({counter: 10});

module.exports.checker = checker;

module.exports.yana = yana;