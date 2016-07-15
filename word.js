var wordbank = require('./game');


function checker(options) {
  this.test = options.test;
}

var yana = new checker({test: "this works"});

module.exports.checker = checker;

module.exports.yana = yana;