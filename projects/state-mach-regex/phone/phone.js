var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});


// This code reads a line at a time from stdin

rl.on('line', function (line) {

    // !!!! IMPLEMENT ME

    // Come up with the phone regex
const regex = /^\(?\d{3}\)?(\s|-)?(\d{3})?(\s|-)?(\d{4})$/g
    // Find matches
const match = line.match(regex)
if(regex.test(line)){
  console.log(line.replace(/[\s\-\(\)]+/g, ""))
}else{
  console.log("No number found.")
}
    // If match found, print number with no spaces, parens, or dashes

    // Else print that no number was found
});
