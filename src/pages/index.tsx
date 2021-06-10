import { css } from '@emotion/css';
import React, { useEffect, useState } from 'react';
import { PokemonData } from '../apollo/gql/pokemons';
import PageContainer from '../components/atoms/containers/page-container';
import ButtonInput from '../components/molecules/inputs/button-input';
import PokemonCard from '../components/molecules/cards/pokemon-card';
import BasicHeader from '../components/molecules/headers/basic-header';
import { getLocalStorage, removeLocalStorageArray } from '../helpers/local-storage';
import { COLOR_PALETTE, font_color, font_leading, font_size } from '../helpers/styling-helper';
import CollectedCard from '../components/molecules/cards/collected-card';
import { useRouter } from 'next/dist/client/router';
import { MdAddToPhotos } from 'react-icons/md';

export default function Home() {
  const [pokeData, setPokeData] = useState([]);
  const router = useRouter();

  function removePokemon(index: number) {
    removeLocalStorageArray('tes', index);
    const { item } = getLocalStorage('tes');
    setPokeData(item);
  }

  useEffect(() => {
    const { item } = getLocalStorage('tes');
    setPokeData(item);
  }, []);
  return (
    <div>
      <BasicHeader label="Pokémon" />
      <PageContainer>
        <div
          className={css`
            padding: 16px;
            background: ${COLOR_PALETTE.ORANGE_3};
            border-radius: 8px;
          `}>
          <div
            className={css`
              display: flex;
              align-items: center;
            `}>
            <div
              className={css`
                background: #4d7cc4;
                height: 72px;
                width: 60px;
                border-radius: 4px;
                padding-top: 16px;
              `}>
              <div
                className={css`
                  display: flex;
                  justify-content: center;
                  font-size: ${font_size.XL};
                  line-height: ${font_leading.XL};
                  color: white;
                  font-weight: 700;
                `}>
                {pokeData?.length}
              </div>
              <div
                className={css`
                  display: flex;
                  justify-content: center;
                  font-size: ${font_size.XXS};
                  line-height: ${font_leading.S};
                  ${font_color.GREY_3}
                  font-weight: 400;
                  margin-top: 4px;
                `}>
                Pokémon
              </div>
            </div>
            <div
              className={css`
                margin-left: 16px;
              `}>
              <div
                className={css`
                  font-weight: 700;
                  font-size: ${font_size.L};
                  line-height: ${font_leading.L};
                `}>
                Hi, Pokémon Trainer
              </div>
              <div
                className={css`
                  font-weight: 400;
                  font-size: ${font_size.XS};
                  line-height: ${font_leading.S};
                  ${font_color.GREY_2};
                `}>
                Newbie
              </div>
            </div>
          </div>
          <ButtonInput
            className={css`
              margin-top: 24px;
            `}
            type="primary"
            label="View Pokédex"
            onClick={() => router.push('/pokedex')}
          />
        </div>
        <div>
          {pokeData.length ? (
            <div>
              <h3
                className={css`
                  margin-top: 24px;
                  font-size: ${font_size.L};
                  line-height: ${font_leading.L};
                `}>
                Collected Pokémon
              </h3>
              <div
                className={css`
                  margin-top: 12px;
                  display: grid;
                  grid-row-gap: 8px;
                  grid-auto-flow: row;
                `}>
                {pokeData?.map((poke: any, i: number) => {
                  return (
                    <div key={i}>
                      <CollectedCard pokeNickname={poke.nickname} pokeType={poke.type} onDeleteClick={() => removePokemon(i)} pokeName={poke.name} pokeSrc={poke.image} />
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div
              className={css`
                margin-top: 100px;
                width: 100%;
                text-align: center;
                font-weight: 700;
              `}>
              <div>
                <MdAddToPhotos size="100px" />
              </div>
              <div>
                No Pokémon Data
                <br />
                Let's Catch Pokémon via Pokédex
              </div>
            </div>
          )}
        </div>
      </PageContainer>
    </div>
  );
}
