var inquirer = require('inquirer');
var letters = require('./letter');
var wordbank = require('./game');
var word = require('./word');

function ask(){

inquirer.prompt([

   {
    type: "input",
    name: "guess",
    message: "Guess a Letter:",
     
  }

  ]).then(function (game) {


    if (game.guess < 64 || game.guess > 91){
      console.log("Please type a letter.");

      ask();
    }

    else{
     /* console.log(bank.wordbank.words[Math.floor(Math.random()*bank.wordbank.words.length)]);*/

     //bank.wordbank();

     /*console.log(bank.foo);

     bank.wordbank();*/

     console.log(word.yana.gameCheck());

    }

 
}); 


}

ask();


