var inquirer = require('inquirer');
var letters = require('./letter');
var bank = require('./game');

inquirer.prompt([

   {
    type: "input",
    name: "guess",
    message: "Guess a Letter:",
     
  }

  ]).then(function (game) {


    if (game.guess < 64 || game.guess > 91){
      console.log("Please type a letter.");
    }

    else{
      console.log(bank.wordbank.words[Math.floor(Math.random()*bank.wordbank.words.length)]);
    }

 

  // Use user feedback for... whatever!! 
}); 
