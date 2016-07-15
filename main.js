var inquirer = require('inquirer');
var works = require('./letter');

  console.log(works.letter.a);



inquirer.prompt([

   {
    type: "prompt",
    name: "selection",
    message: "Let's play hangman! What level do you want ",
    choices: ["hard", "medium", "easy",] 
  }

  ]).then(function (answers) {


  console.log(works.letter.a);

  // Use user feedback for... whatever!! 
}); 
