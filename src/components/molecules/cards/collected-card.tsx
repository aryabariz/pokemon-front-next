import { css } from '@emotion/css';
import React from 'react';
import { COLOR_PALETTE, font_leading, font_size } from '../../../helpers/styling-helper';
import Card from '../../atoms/containers/card-container';
import { MdDeleteForever } from 'react-icons/md';
import { PokemonTypes, TypeToColor } from '../../../helpers/common-helper';

interface CollectedCardProps {
  pokeName: string;
  pokeSrc: string;
  pokeType: PokemonTypes;
  pokeNickname: string;
  onDeleteClick: () => void;
}

const CollectedCard = (props: CollectedCardProps) => {
  return (
    <Card
      className={css`
        padding: 8px;
        width: 100%;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      `}
      backgroundColor={TypeToColor(props.pokeType)}>
      <div
        className={css`
          display: flex;
          align-items: center;
        `}>
        <img
          className={css`
            width: 64px;
          `}
          src={props.pokeSrc}
          alt={props.pokeName}
        />
        <div
          className={css`
            color: white;
            font-weight: 700;
            font-size: ${font_size.M};
            line-height: ${font_leading.M};
            text-transform: capitalize;
          `}>
          {props.pokeNickname}/<br />
          {props.pokeName}
        </div>
      </div>
      <div
        onClick={props.onDeleteClick}
        className={css`
          display: flex;
          align-items: center;
          margin-right: 8px;
          padding: 4px;
          background: red;
          border-radius: 8px;
        `}>
        <MdDeleteForever size="24px" color="white" />
      </div>
    </Card>
  );
};

export default CollectedCard;
