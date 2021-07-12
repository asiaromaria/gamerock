const Player = require("./Player");
const prompt = require("prompt-sync");

class Human extends Player{
    constructor(){
        super();
        this.userName = prompt("Please enter in your name. ");
    }

    chosenGesture(){
        console.log(`Hello ${this.userName}... choose your weapon for battle. Rock, Paper, Scissors, Lizard, or Spock? `)
        this.choice = prompt();
        switch (this.choice) {
            case "Rock":
                this.choice = this.handgame [0];
                break;
            case "Paper":
                this.choice = this.handgame [1];
                break;
            case "Scissors":
                this.choice = this.handgame [2]; 
                break;
            case "Lizard":
                this.choice = this.handgame [3];
                break;
            case "Spock":
                this.choice = this.handgame [4];
                break;
            default:    
                console.log("Whoops! Try again User!") 
                this.chosenGesture();
                break;
        }
        console.log(`${this.choice}! I choose you!!`);
    }
    

}

module.exports = human;