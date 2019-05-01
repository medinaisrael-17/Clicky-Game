import React, { Component } from "react";
import CharacterCard from "./CharacterCard";
import characters from "./characters.json";
import "./style.css"


class GameContainer extends Component {
    state = {
        characters,
        score: 0,
        topScore: 0
    };

    // determining if the id has been clicked on
    anotherFunction = id => {
        // if it has 
        if (this.state.characters[id].clicked === true) {
            //shuffle
            const shuffledArr = this.shuffle(this.state.characters);

            if (this.state.score > this.state.topScore){
                this.setState({topScore: this.state.score});
                // document.getElementById("topScore").text(this.state.topScore)
            }
            

            //reset all to false
            shuffledArr.map( i => i.clicked = false)
            //the user lost and we need to change our state
            this.setState({ score: 0 , characters: shuffledArr });
            // document.getElementById("currentScore").text(this.state.score)

            alert("You lost :-(")
        }
        // if not 
        if (this.state.characters[id].clicked === false) {
            const copy = [...characters]

            copy[id].clicked = true
            // shuffle
            const shuffledArr = this.shuffle(copy);
            //increase the score
            this.setState({ score: this.state.score + 1, characters: shuffledArr });

            // document.getElementById("currentScore").text(this.state.score)
        }
        // const shuffledArr = this.shuffle(this.state.characters);
        // this.setState({ score: this.state.score + 1, characters: shuffledArr });
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
