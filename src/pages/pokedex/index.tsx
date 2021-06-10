import NavigationHeader from '../../components/molecules/headers/navigation-header';
import { css } from '@emotion/css';
import React, { useState } from 'react';
import PageContainer from '../../components/atoms/containers/page-container';
import PokemonCard from '../../components/molecules/cards/pokemon-card';
import GetPokemonsList, { PokemonData } from '../../apollo/gql/pokemons';
// import GetPokemonDetail from '../../apollo/gql/pokemon';
import BottomMarker from '../../components/atoms/markers/bottom-markers';
// import { addLocalStorageArray, getLocalStorage, removeLocalStorageArray } from '../../helpers/local-storage';
// import PokemonDetailDialog from '../../components/templates/pokemon-detail';
// import Snackbar from '../../components/molecules/snackbar/snackbar';
// import LoadingPage from '../../components/molecules/loading/loading';
// import NamingDialog from '../../components/molecules/dialogs/naming-dialog';
import Pagination from '../../components/organism/pagination/pagination';
import { COLOR_PALETTE } from '../../helpers/styling-helper';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Pokedex() {
  const Skeleton = () => {
    return (
      <div
        className={css`
          display: grid;
          @media (min-width: 320px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          @media (min-width: 520px) {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          grid-row-gap: 12px;
          grid-column-gap: 12px;
        `}>
        {Array.from({ length: 12 }).map((e: any, i: number) => {
          e = (
            <div
              key={i + 1}
              className={css`
                width: 100%;
                height: 100px;
                background-color: ${COLOR_PALETTE.GREY_3};
                border-radius: 16px;
                animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                @keyframes pulse {
                  0%,
                  100% {
                    opacity: 1;
                  }
                  50% {
                    opacity: 0.5;
                  }
                }
              `}
            />
          );
          return e;
        })}
      </div>
    );
  };

  const limit = 12;
  const [offset, setOffset] = useState(0);
  const [selected, setSelected] = useState(0);

  const router = useRouter();
  // const [choosenPokemon, setChoosenPokemon] = useState<PokemonData>();
  // const [showBottomsheet, setShowBottomsheet] = useState(false);
  const { pokemonList, pokemonTotal, pokemonListLoading } = GetPokemonsList(limit, offset);
  // const { pokemonDetail, pokemonLoading } = GetPokemonDetail(choosenPokemon?.name || '');

  // const [showFail, setShowFail] = useState(false);
  // const [showFailCancel, setShowFailCancel] = useState(false);
  // const [showSucess, setShowSucess] = useState(false);

  // const [pokeNickName, setPokeNickName] = useState('');

  const pokeMax = Math.round(pokemonTotal! / limit);

  return (
    <div>
      <Head>
        <title>Pokédex graphql</title>
      </Head>
      <NavigationHeader label="Pokédex" />
      <PageContainer>
        {pokemonListLoading ? (
          <Skeleton />
        ) : (
          <div
            className={css`
              display: grid;
              @media (min-width: 320px) {
                grid-template-columns: repeat(2, minmax(0, 1fr));
              }
              @media (min-width: 520px) {
                grid-template-columns: repeat(3, minmax(0, 1fr));
              }

              grid-row-gap: 12px;
              grid-column-gap: 12px;
            `}>
            {pokemonList?.map((poke: PokemonData, i: number) => {
              return (
                <div key={i}>
                  <PokemonCard
                    onClick={() => {
                      router.push({ pathname: '/pokedex' + '/' + poke.name });
                    }}
                    pokeName={poke.name.replaceAll('-', ' ')}
                    pokeSrc={poke.image}
                  />
                </div>
              );
            })}
          </div>
        )}

        <BottomMarker />
        <BottomMarker />
      </PageContainer>
      <Pagination
        firstOnClick={() => {
          setOffset(0);
          setSelected(0);
        }}
        lastOnClick={() => {
          setOffset(limit * pokeMax);
          setSelected(pokeMax - 1);
        }}
        max={pokeMax || 93}
        nextOnClick={() => {
          if (selected < pokeMax) {
            setOffset(offset + limit);
            setSelected(selected + 1);
          }
        }}
        prevOnClick={() => {
          if (selected > 0) {
            setOffset(offset - limit);
            setSelected(selected - 1);
          }
        }}
        selected={selected}
      />
      {/* <Snackbar actionLabel="OK" label="Failed to Catch, Try Again" actionOnClick={() => setShowFail(false)} active={showFail} deactive={() => setShowFail(false)} />
      <Snackbar actionLabel="Sad" label="Whyy you cancel, :sad-emot:" actionOnClick={() => setShowFailCancel(false)} active={showFailCancel} deactive={() => setShowFailCancel(false)} />
      <PokemonDetailDialog catchOnClick={CatchProbability} choosenPokemon={choosenPokemon} pokemonDetail={pokemonDetail} isActive={showBottomsheet && !pokemonLoading} deactive={() => setShowBottomsheet(false)} />
      <LoadingPage active={pokemonLoading} />
      <NamingDialog
        active={showSucess}
        secondaryOnClick={() => {
          setShowSucess(false);
          setShowFailCancel(true);
        }}
        primaryOnClick={addPokemonLocal}
        value={pokeNickName}
        onChange={(e: any) => setPokeNickName(e.target.value)}
      /> */}
    </div>
  );
}
