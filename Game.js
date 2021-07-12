const Player = require("./Player");
const Human = require('./Human');
const prompt = require('prompt-sync')()
const AI = require('./AI')
const chalk = require('chalk');


beginBattle() 
class Game{
    constructor(){
        this.playerOne;
        this.playerTwo;
        console.log(chalk.magentaBright(`Hello user! Welcome to the battle of your life 👾\n Choose your player setup:\n Option 1: Human vs Human\n Option 2: Human vs AI`));

        this.playerSetup = prompt();
        switch (this.playerSetup) {
            case one:
                this.playerOne = new Human//(prompt('Player #1 enter Name:'));
                this.playerTwo = new Human//(prompt('Player #2 enter Name:'));
                console.log(chalk.greenBright("Let the games begin!"));
                break;
            case two:
                this.playerOne = new Human//(prompt('Player #1 enter Name:'));
                this.playerTwo = new AI;
                console.log(chalk.greenBright("Let the games begin!"));
                break;
            default:
                console.log(chalk.bgCyanBright("Whoops! Please select option one (human vs human) or two (human vs AI)! "))
                this.playerSetup();
                break;
        }
    
    }
}

    let chosenGesture = prompt()
        this.weapon
        if(chosenGesture == '1'){
            weapon = this.handGame.push[0]
            return weapon;
        }
        else if(chosenGesture == '2'){
            weapon = this.handGame.push[1]
            return weapon;
        }
        else if(chosenGesture == '3'){
            weapon = this.handGame.push[2]
            return weapon;
        }
        else if(chosenGesture == '4'){
            weapon = this.handGame.push[3]
            return weapon;
        }
        else if(chosenGesture == '5'){
            weapon = this.handGame.push[4]
            return weapon;
            }
    


module.exports = game;