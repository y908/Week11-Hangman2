var inquirer = require('inquirer');
var letters = require('./letter');
var bank = require('./game');

inquirer.prompt([

   {
    type: "list",
    name: "selection",
    message: "Let's play hangman! What level do you want ",
    choices: ["hard", "medium", "easy",] 
  }

  ]).then(function (answers) {


  console.log(bank.wordbank.words[2]);

  // Use user feedback for... whatever!! 
}); 
