import { css } from '@emotion/css';
import React, { useState } from 'react';
import { TypeToColor } from '../../../helpers/common-helper';
import { COLOR_PALETTE, font_leading, font_size } from '../../../helpers/styling-helper';
import BadgesContainer from '../../atoms/containers/badges-container';
import CarouselContainer from '../../atoms/containers/carousel-container';
import DotsMarker from '../../atoms/markers/dot-marker';

interface MovesPokemonProps {
  className?: string;
  pokemonDetail: any;
}

const MovesPokemonContent = (props: MovesPokemonProps): React.ReactElement => {
  return (
    <div className={props.className}>
      <div
        className={css`
          display: flex;
        `}>
        <h3
          className={css`
            font-size: 18px;
            line-height: 24px;
            border-bottom: 3px solid #f7cd46;
          `}>
          Pokémon Moves ({props.pokemonDetail?.moves.length})
        </h3>
      </div>
      <div
        className={css`
          display: grid;
          grid-auto-flow: row;
          grid-row-gap: 8px;
          margin-top: 16px;
        `}>
        {props.pokemonDetail?.moves.map((poke: any, i: number) => {
          return (
            <div
              key={i}
              className={css`
                display: flex;
                border-bottom: 1px solid ${COLOR_PALETTE.GREY_3};
                padding-bottom: 4px
              `}>
              <div
                className={css`
                  text-transform: capitalize;
                  font-size: 14px;
                  line-height: 20px;
                  color: grey;
                  width: 120px;
                `}>
                <div>Move</div>
                <div>Learn Method</div>
              </div>
              <div
                className={css`
                  font-size: 14px;
                  line-height: 20px;
                  font-weight: 700;
                  text-transform: capitalize;
                `}>
                <div>{poke.move?.name.replaceAll('-', ' ')}</div>
                <div>{poke.version_group_details[0]?.move_learn_method.name}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovesPokemonContent;
