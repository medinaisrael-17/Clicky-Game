import React, { Component } from "react";
import CharacterCard from "./CharacterCard/index";
import characters from "./characters.json"


class GameContainer extends Component {
    state = {
        characters
    };


    render() {
        return (
            <div>
                {this.state.characters.map(character => (
                    <CharacterCard id = {character.id}
                    key = {character.id}
                    name = {character.name}
                    image = {character.image}/>
                ))}
            </div>
        )
    }
}

export default GameContainer;
