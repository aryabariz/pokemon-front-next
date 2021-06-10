import { gql, useQuery } from '@apollo/client';

export interface PokemonData {
  id: number;
  name: string;
  image: string;
}

interface PokemonList {
  pokemons: {
    count: number;
    results: Array<PokemonData>;
  };
}

export function GetPokemonsList(limit: number, offset: number) {
  const GET_POKEMONS = gql`
    query pokemons($limit: Int, $offset: Int) {
      pokemons(limit: $limit, offset: $offset) {
        count
        results {
          url
          name
          image
          id
        }
      }
    }
  `;

  const gqlVariables = {
    limit: limit,
    offset: offset,
  };

  const { loading, error, data } = useQuery<PokemonList>(GET_POKEMONS, {
    variables: gqlVariables,
  });

  let pokemonList = data?.pokemons.results;
  let pokemonTotal = data?.pokemons.count;
  let pokemonListLoading = loading;
  let pokemonListError = error;
  return { pokemonListLoading, pokemonListError, pokemonList, pokemonTotal };
}

export default GetPokemonsList;
