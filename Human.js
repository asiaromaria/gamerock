const Player = require("./Player");
const prompt = require("prompt-sync");

class Human extends Player{
    constructor(){
        super();
        this.name = prompt("Please enter in your name. ");
    }

    chosenGesture(){
        console.log(`Hello ${this.name}... choose your weapon for battle. '1' for Rock\n '2' for Paper\n '3' for Scissors\n '4' for Lizard\n '5' for Spock? `)
        this.choice = prompt();
        switch (this.choice) {
            case "1":
                this.choice = this.handgame [0];
                break;
            case "2":
                this.choice = this.handgame [1];
                break;
            case "3":
                this.choice = this.handgame [2]; 
                break;
            case "4":
                this.choice = this.handgame [3];
                break;
            case "5":
                this.choice = this.handgame [4];
                break;
            default:    
                console.log("Whoops! Try again User!") 
                this.chosenGesture();
                break;
        }
        console.log(`${this.choice} my little friend! I choose you!!`);
    }
    

}

module.exports = human;