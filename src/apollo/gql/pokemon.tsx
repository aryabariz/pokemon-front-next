import { gql, useQuery } from '@apollo/client';

export function GetPokemonDetail(name: string) {
  const GET_POKEMON = gql`
    query pokemon($name: String!) {
      pokemon(name: $name) {
        id
        name
        abilities {
          ability {
            name
          }
        }
        base_experience
        height
        species {
          name
          url
        }
        location_area_encounters
        sprites {
          front_default
          back_default
        }
        stats {
          base_stat
          effort
          stat {
            name
          }
        }
        moves {
          move {
            name
          }
          version_group_details{
            move_learn_method {
              name
            }
          }
        }
        types {
          type {
            name
          }
        }

        weight
        message
        status
      }
    }
  `;

  const gqlVariables = {
    name: name,
  };

  const { loading, error, data } = useQuery(GET_POKEMON, {
    variables: gqlVariables,
  });

  let pokemonDetail = data?.pokemon;
  let pokemonLoading = loading;
  let pokemonError = error;

  return { pokemonLoading, pokemonError, pokemonDetail };
}

export default GetPokemonDetail;
