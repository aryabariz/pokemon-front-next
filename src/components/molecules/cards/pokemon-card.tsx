import { css } from '@emotion/css';
import React from 'react';
import Card from '../../atoms/containers/card-container';

interface PokemonCardProps {
  pokeName: string;
  pokeSrc: string;
  onClick: () => void;
}

const PokemonCard = (props: PokemonCardProps) => {
  return (
    <Card
      className={css`
        padding: 8px;
        width: 100%;
        height: 100%;
      `}
      onClick={props.onClick}>
      <div
        className={css`
          width: 100%;
          height: 64px;
          display: flex;
          justify-content: center;
        `}>
        <img
          src={props.pokeSrc}
          alt={props.pokeName}
          className={css`
            width: 64px;
          `}
        />
      </div>
      <div
        className={css`
          margin-top: 4px;
          text-align: center;
          text-transform: capitalize;
          font-size: 14px;
          line-height: 20px;
          font-weight: bold;
        `}>
        {props.pokeName}
      </div>
    </Card>
  );
};

export default PokemonCard;
