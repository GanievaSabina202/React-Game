import React, { Component } from 'react'
import "./PokemonCard.css"
class PokemonCard extends Component {
    render() {
        return (
            <div className='d-flex align-items-center justify-content-center' >
                <h1 className= {`${this.props.win ? 'successH' : 'dangerH'}`}>{this.props.gamer}</h1>
                {this.props.pokemonWrapper.map((items) => (
                    <div className='CardWrapper'>
                        <h1>{items.name}</h1>
                        <div className='imgWrapper'>
                            <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${items.img}.png`} />
                        </div>
                        <div className='ContentWrapper'>
                            <p>Type: {items.type}</p>
                            <p>EXP: {items.base_experience}</p>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}
export default PokemonCard