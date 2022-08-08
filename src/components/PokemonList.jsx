import PokemonCard from "./PokemonCard";

export default function PokemonList ({ pokemons }) {
  return (
    <div className="PokemonList">
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.name}
          name={pokemon.name}
          avatar={pokemon.sprites.front_default}
          types={pokemon.types}
          id={pokemon.id}
          favorite={pokemon.favorite}
        />
      ))}
    </div>
  );
}

PokemonList.defaultProps = {
  pokemons: Array(10).fill(''),
}
