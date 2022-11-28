//Create a program that will create a speed detector.
const prompt = require("prompt-sync")()
//Input speed of car.
let speed = prompt("Enter your speed:")
//Comparing the different speeds of the cars using conditional statements.
if(!(speed <0)){
    if((speed-70)/5>12){
        console.log("License suspended")
    }else if(speed>=0 && speed<=70){
        console.log('ok')
    }else{
        console.log("points: " + ((speed-70)/5))
    }
}else{
    console.log("Invalid speed")
}