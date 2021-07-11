class Trainer {
    constructor(){
        this.pokemonCollection = [
            "Bulbasur",
            "Mew",
            "Charizard",
            "Psyduck",
            "Pikachu",
            "Magicarp",

        ];
    }
    choosePokemon(){
        let choosePokemon = this.pokemonCollection[Math.floor(Math.random()*this.pokemonCollection.length)];
        console.log(`${choosePokemon}! I choose you!!`);
    }
    

}