import { css } from '@emotion/css';
import React, { useEffect, useState } from 'react';
import { TypeToColor } from '../../helpers/common-helper';
import PageContainer from '../atoms/containers/page-container';
import BottomMarker from '../atoms/markers/bottom-markers';
import BottomSheet from '../molecules/bottom-sheet/bottom-sheet';
import AboutPokemonContent from '../molecules/content/about-pokemon-content';
import MovesPokemonContent from '../molecules/content/moves-pokemon-content';
import ProfilePokemonContent from '../molecules/content/profile-pokemon-content';
import StatsPokemonContent from '../molecules/content/stats-pokemon-content';
import ButtonInput from '../molecules/inputs/button-input';

interface PokemonDetailProps {
  pokemonDetail: any;
  choosenPokemon: any;
  isActive: boolean;
  deactive: () => void;
  catchOnClick: () => void;
}

const PokemonDetailDialog = (props: PokemonDetailProps) => {
  const slides = [{ src: props.pokemonDetail?.sprites?.front_default }, { src: props.pokemonDetail?.sprites?.back_default }];

  return (
    <BottomSheet isActive={props.isActive} deactive={props.deactive} handlerColor={TypeToColor(props.pokemonDetail?.types ? props.pokemonDetail?.types[0].type.name : 'white')}>
      <ProfilePokemonContent slides={slides} pokeName={props.choosenPokemon?.name.replaceAll('-', ' ')} pokeTypes={props.pokemonDetail?.types} />
      <PageContainer>
        <AboutPokemonContent pokemonDetail={props.pokemonDetail} />

        <StatsPokemonContent
          pokemonDetail={props.pokemonDetail}
          className={css`
            margin-top: 40px;
          `}
        />
        <MovesPokemonContent
          pokemonDetail={props.pokemonDetail}
          className={css`
            margin-top: 40px;
          `}
        />
        <BottomMarker />
        <BottomMarker />
      </PageContainer>
      <div
        className={css`
          position: fixed;
          bottom: 0;
          padding-bottom: 16px;
          width: 100%;
          max-width: 720px;
          padding-top: 8px;
          background-color: white;
          padding-left: 16px;
          padding-right: 16px;
        `}>
        <ButtonInput type="primary" label="Add to Collection" onClick={props.catchOnClick} />
      </div>
    </BottomSheet>
  );
};

export default PokemonDetailDialog;
