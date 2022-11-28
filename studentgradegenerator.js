//The total score for the test.
const prompt = require("prompt-sync")()
// Input marks .
let marks = prompt("Enter your marks:")
//Comparing test scores with grade using conditional statements.
if (marks >= 79 && marks <= 100) {
    console.log("A")
}
else if (marks >= 60 && marks <= 78) {
    console.log("B") 
}
else if (marks >= 49 && marks <= 59) {
    console.log("C")
}
else if (marks >= 40 && marks <= 48) {
    console.log("D")
}

else {
    console.log ("E")
}
