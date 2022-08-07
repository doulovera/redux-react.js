import PokemonCard from "./PokemonCard";

export default function PokemonList ({ pokemons }) {
  return (
    <div className="PokemonList">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.name} name={pokemon.name} />
      ))}
    </div>
  );
}

PokemonList.defaultProps = {
  pokemons: Array(10).fill(''),
}
