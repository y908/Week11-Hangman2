//get data from other js files
var inquirer = require('inquirer');
var Letter = require('./letter');
var game = require('./game');
var Checker = require('./checker');


console.log('The Current Word is:', game.currentWord);
var letters = new Letter(game.currentWord);
var checker = new Checker({counter: 10, word: game.currentWord, letters: letters});


//=======================================================
//this prompts user to make a letter guess
//=======================================================
function ask() {  //recursive functiion to make the game continue
  inquirer.prompt([
     {
      type: "input",
      name: "guess",
      message: "Guess a Letter:",
       
    }
    ]).then(function (game) {
      //if the persons types anything other than a letter
      //they get an message
      if (game.guess < 64 || game.guess > 91){
        console.log("Please type a letter.");
        ask();
      }
      else{
      //else the game continues  
       checker.letterCheck(game.guess);
       console.log('checking game');
       checker.gameCheck();
       console.log('done gameCheck()');
       ask();
      }
  }); 
}

ask();


