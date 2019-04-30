import React, { Component } from "react";
import CharacterCard from "./CharacterCard";
import characters from "./characters.json";
import "./style.css"


class GameContainer extends Component {
    state = {
        characters,
        score: 0
    };

    anotherFunction = id => {
        // determining if the id has been clicked on
            // if it has, the user lost. reset the score, and shuffle
                //reset all to false
            // if not, increase the score and shuffle
                //change to true
        const shuffledArr = this.shuffle(this.state.characters);
        this.setState({ score: this.state.score + 1, characters: shuffledArr });
    }

    shuffle = array => {
        for (let i = 0; i < array.length; i++) {
            const random = Math.floor(Math.random() * array.length);
            let temp = array[i];
            array[i] = array[random];
            array[random] = temp;
        }
        return array;
    }


    render() {
        return (
            <div class="characterDiv">
                {this.state.characters.map(character => (
                    <CharacterCard id = {character.id}
                    key = {character.id}
                    name = {character.name}
                    image = {character.image}
                    changeState = {this.anotherFunction}/>
                ))}
            </div>
        )
    }
}

export default GameContainer;
