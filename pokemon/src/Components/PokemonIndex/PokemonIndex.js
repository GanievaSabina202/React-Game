import React, { Component } from 'react'
import PokemonCard from '../PokemonCard/PokemonCard'

class PokemonIndex extends Component {
    static defaultProps = {
        pokemon: [
            { id: 4, img: "004", name: 'Charmander', type: 'fire', base_experience: 62 },
            { id: 7, img: "007", name: 'Squirtle', type: 'water', base_experience: 63 },
            { id: 11, img: "011", name: 'Metapod', type: 'bug', base_experience: 72 },
            { id: 12, img: "012", name: 'Butterfree', type: 'flying', base_experience: 178 },
            { id: 25, img: "025", name: 'Pikachu', type: 'electric', base_experience: 112 },
            { id: 39, img: "039", name: 'Jigglypuff', type: 'normal', base_experience: 95 },
            { id: 94, img: "094", name: 'Gengar', type: 'poison', base_experience: 225 },
            { id: 133, img: "133", name: 'Eevee', type: 'normal', base_experience: 65 }
        ]
    };
    render() {
        let pokemons = [...this.props.pokemon];
        let pokemonWrapper = pokemons.sort(() => .5 - Math.random());
        let topSection = pokemonWrapper.slice(0, 4)
        let bottomSection = pokemonWrapper.slice(4, 9)
        let gamer1 = topSection.reduce((img, pokemon) => img + pokemon.base_experience, 0);
        let gamer2 = bottomSection.reduce((img, pokemon) => img + pokemon.base_experience, 0);
        return (
            <div>
                <PokemonCard pokemonWrapper={topSection} gamer={gamer1} win={gamer1 < gamer2 ? false : true} />
                <PokemonCard pokemonWrapper={bottomSection} gamer={gamer2}  win={gamer2 < gamer1 ? false : true}/>
            </div>
        )
    }
}
export default PokemonIndex