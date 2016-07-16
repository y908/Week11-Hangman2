var inquirer = require('inquirer');
var letter = require('./letter');
var game = require('./game');
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


     /* console.log(bank.game.words[Math.floor(Math.random()*bank.game.words.length)]);*/

     //bank.game();

     /*console.log(bank.foo);

     bank.game();*/

     word.yana.letterCheck(game.guess);

     console.log(word.yana.gameCheck());
     console.log(letter.yana2.lines());

    }

 
}); 


}

ask();


