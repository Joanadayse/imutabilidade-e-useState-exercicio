import React, {useState} from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import PokemonCard from './Components/PokemonCard/PokemonCard';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
function App() {
   const pokemon2=[
{
  name: "Pichu",
  type: "Electric",
  evolved: false,
  weight: 2,
  color: 'yellow',
  image: 'https://archives.bulbagarden.net/media/upload/thumb/b/b9/172Pichu.png/250px-172Pichu.png',
  id: 0
},

{
  name: "Raichu  ",
  type: "Eletric",
  evolved: false,
  weight: 30,
  color: 'yellow',
  image: 'https://www.pokemonunited.nl/img/dex/pgl/raichu.png',
  id: 2


},

{
  name: "Pichu",
  type: "Electric",
  evolved: false,
  weight: 2,
  color: 'yellow',
  image: 'https://archives.bulbagarden.net/media/upload/thumb/b/b9/172Pichu.png/250px-172Pichu.png',
  id: 0

}

   ]

  const [pokemon, setPokemon] = useState(pokemon2[0])
  

  return ( <>
  <GlobalStyles/>
    <FlexContainer>
      {/* Aqui neste componente, passe as props. Lembre-se que também é possivel passar a função de setState via props! */}
     
      
      <PokemonCard
       pokemon={pokemon}
       setPokemon={setPokemon}
       pokemon2={pokemon2[1]}
       pokemon3={pokemon2[2]}



      
      />
      {/* Crie aqui seus próximos pokemons! */}

    </FlexContainer>
  </>
    
  );
}

export default App;
