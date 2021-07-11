const Player = require("./Player");


class AI extends Player{
    constructor(){
        super();
        this.nameOptions = ["Juicy", "Curly", "Pinky", "Water"];
        this.name = this.nameOptions[Math.floor(Math.random()*this.nameOptions.length)];
    }
    chosenGesture(){
        this.choice = this.handGame[Math.floor(Math.random()*this.handGame.length)];
        console.log(`${this.choice}! I choose you!!`);
    }
    

}

module.exports = computer;