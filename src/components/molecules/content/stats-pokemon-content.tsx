import { css } from '@emotion/css';
import React, { useState } from 'react';
import { TypeToColor } from '../../../helpers/common-helper';
import { COLOR_PALETTE, font_leading, font_size } from '../../../helpers/styling-helper';
import BadgesContainer from '../../atoms/containers/badges-container';
import CarouselContainer from '../../atoms/containers/carousel-container';
import DotsMarker from '../../atoms/markers/dot-marker';

interface StatsPokemonProps {
  className?: string;
  pokemonDetail: any;
}

const StatsPokemonContent = (props: StatsPokemonProps): React.ReactElement => {
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
          Pokémon Base Stats
        </h3>
      </div>
      <div
        className={css`
          margin-top: 16px;
          display: flex;
        `}>
        <div
          className={css`
            display: grid;
            grid-auto-flow: row;
            grid-row-gap: 8px;
            font-size: 14px;
            line-height: 20px;
            color: grey;
            width: 120px;
            text-transform: capitalize;
          `}>
          {props.pokemonDetail?.stats?.map((poke: any, i: number) => {
            return <div key={i}> {poke.stat.name.replaceAll('-', ' ')}</div>;
          })}
        </div>

        <div
          className={css`
            display: grid;
            grid-auto-flow: row;
            grid-row-gap: 8px;
            font-size: 14px;
            line-height: 20px;
            font-weight: 700;
          `}>
          {props.pokemonDetail?.stats?.map((poke: any, i: number) => {
            return (
              <div
                key={i}
                className={css`
                  display: flex;
                  align-items: center;
                `}>
                <div
                  className={css`
                    width: 28px;
                    margin-right: 4px;
                  `}>
                  {poke.base_stat}
                </div>
                <div
                  className={css`
                    height: 16px;
                    background-color: #f1f1f1;
                    width: 180px;
                    border-radius: 4px;
                  `}>
                  <div
                    className={css`
                      border-radius: 4px;
                      background-color: ${poke.base_stat >= 50 && poke.base_stat < 75 ? COLOR_PALETTE.ORANGE_2 : poke.base_stat < 50 ? COLOR_PALETTE.RED_2 : COLOR_PALETTE.GREEN_2};
                      height: 16px;
                      width: ${poke.base_stat > 100 ? 180 : (poke.base_stat / 100) * 180}px;
                    `}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StatsPokemonContent;
