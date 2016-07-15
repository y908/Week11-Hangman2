var inquirer = require('inquirer');
var letters = require('./letter');
var bank = require('./game');

inquirer.prompt([

   {
    type: "input",
    name: "question",
    message: "Guess a Letter:",
     
  }

  ]).then(function (answer) {
    if (answer.question < 64 || answer.question > 91){
      console.log("this works");
    }

    else{
      console.log(bank.wordbank.words[2]);
    }

 

  // Use user feedback for... whatever!! 
}); 
