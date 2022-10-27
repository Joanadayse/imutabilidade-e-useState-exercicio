import React from 'react'
import {Card, PokemonName, PokemonType, EvolveButton} from './styles'



const PokemonCard = ({pokemon,setPokemon,pokemon2,pokemon3}) => {
  const {name , type , weight , color,image}= pokemon

    const evoluirPokemon = () => {
        console.log("Cliquei no botão de evoluir")
       setPokemon(pokemon2)
       
    }

   function Pokemon (){
    setPokemon(pokemon3)
   }

   
    
  return (
    <Card color={color}>
        <img src={image} alt={`Pokemon`}/>
        <PokemonName>{name}</PokemonName>
        <PokemonType>{type}</PokemonType>
        <p>{weight}kg</p>

        <EvolveButton onClick={evoluirPokemon}>Evoluir!</EvolveButton>
        <EvolveButton onClick={Pokemon}>Reverter</EvolveButton>
    </Card>
  )
}

export default PokemonCard