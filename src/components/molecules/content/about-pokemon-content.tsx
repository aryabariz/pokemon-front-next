import { css } from '@emotion/css';
import React, { useState } from 'react';
import { TypeToColor } from '../../../helpers/common-helper';
import { font_leading, font_size } from '../../../helpers/styling-helper';
import BadgesContainer from '../../atoms/containers/badges-container';
import CarouselContainer from '../../atoms/containers/carousel-container';
import DotsMarker from '../../atoms/markers/dot-marker';

interface AboutPokemonProps {
  className?: string;
  pokemonDetail: any;
}

const AboutPokemonContent = (props: AboutPokemonProps): React.ReactElement => {
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
          About
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
          `}>
          <div>Base Exp</div>
          <div>Height</div>
          <div>Weight</div>
          <div>Abilities</div>
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
          <div>{props.pokemonDetail?.base_experience}</div>
          <div>{props.pokemonDetail?.height / 10} meter</div>
          <div>
            {props.pokemonDetail?.weight / 10}kg ({((props.pokemonDetail?.weight / 10) * 2.2).toFixed(2)}lbs)
          </div>
          <div
            className={css`
              display: grid;
              grid-auto-flow: column;
              grid-auto-columns: auto;
              grid-auto-rows: auto;
              grid-column-gap: 4px;
              text-transform: capitalize;
            `}>
            {props.pokemonDetail?.abilities?.map((poke: any, i: number) => {
              return (
                <div key={i}>
                  <div
                    className={css`
                      display: flex;
                      justify-content: center;
                    `}>
                    <div>
                      {poke.ability.name.replaceAll('-', ' ')}
                      {i !== props.pokemonDetail?.abilities?.length - 1 ? ',' : ''}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPokemonContent;
