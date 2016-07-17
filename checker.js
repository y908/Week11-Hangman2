
// found is a flag to see if a letter was found in the currentWord
var found = 0;

/*console.log("------------------");
console.log(game.currentWord);
console.log("------------------");*/

function Checker(options) {
  //the number of guesses remaining
  this.counter = options.counter;
  this.wordArray = options.word.split('');
  console.log('wordArray', this.wordArray);
  this.letters = options.letters;

  //code to decrease the counter
  this.decreaseCounter = function(){
    console.log('in decreaseCounter');
    console.log("counter", this.counter);
    this.counter--;
    console.log("Number of guesses remaining: "+ this.counter);
  }

  //
  this.gameCheck = function(){
    console.log('in gameCheck');

    //TODO: first check if word is all matched
    //then if the counter is greater than 0, decrease it
    var gameWon = false;

      if (gameWon == true) {
      console.log('Wow! You won!')
      
/*    } else if (this.counter > 0 && found == 0){   
      this.decreaseCounter();*/
       
    }else if (this.counter == 0) {
      console.log('Sorry, you lost. Try again!');
    }
  }


  this.letterCheck = function(L){

    console.log("your letterCheck is: " + L);
    console.log('wordaAray', this.wordArray);
    for(var i = 0; i< this.wordArray.length; i++){
      if (L == this.wordArray[i]) {
        console.log('matched!', this.letters);
        this.letters.dashedWord[i] = L;
        found = 1; 
        console.log('this.letters', this.letters);
        console.log('calling lines!');
        this.letters.printLines();
      }
    }
    if (found == 1){
        found = 0;
    }
    else {
        this.decreaseCounter();
        //found = 0;
    }

  } // end of letterCheck

}

module.exports = Checker;