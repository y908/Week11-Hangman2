var fruits = {
  words: ["banana", "orange", "apple", "mango"]
}

var currentWord = fruits.words[Math.floor(Math.random()*fruits.words.length)];

console.log(currentWord);


module.exports.currentWord = currentWord;

/*
function fruits(){

  console.log("this works...");


}



var foo = "nice!";

module.exports.foo = foo;
module.exports.fruits = fruits;*/