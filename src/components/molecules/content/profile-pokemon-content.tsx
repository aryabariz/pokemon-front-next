import { css } from '@emotion/css';
import React, { useState } from 'react';
import { TypeToColor } from '../../../helpers/common-helper';
import { font_leading, font_size } from '../../../helpers/styling-helper';
import BadgesContainer from '../../atoms/containers/badges-container';
import CarouselContainer from '../../atoms/containers/carousel-container';
import DotsMarker from '../../atoms/markers/dot-marker';

interface ProfilPokemonProps {
  slides: any;
  pokeName: string;
  pokeTypes: any;
}

const ProfilePokemonContent = (props: ProfilPokemonProps): React.ReactElement => {
  const [selected, setSelected] = useState(0);
  const handleSelectCallback = (data: any) => {
    setSelected(data);
  };

  const slideChild = props.slides?.map((data: any, i: number) => {
    return (
      <div
        key={i}
        className={css`
          width: 100%;
          height: 300px;
          display: flex;
          justify-content: center;
        `}>
        <img
          className={css`
            height: 300px;
          `}
          src={data.src}
        />
      </div>
    );
  });
  return (
    <div>
      <div
        className={css`
          background-color: ${TypeToColor(props.pokeTypes[0]?.type.name)};
          padding-bottom: 16px;
        `}>
        <CarouselContainer selected={selected} selectCallback={handleSelectCallback}>
          {slideChild}
        </CarouselContainer>
        <div
          className={css`
            display: flex;
            justify-content: center;
            margin-top: -8px;
          `}>
          <DotsMarker slides={slideChild} selected={selected} />
        </div>
      </div>
      <div
        className={css`
          display: flex;
          font-size: ${font_size.XL};
          line-height: ${font_leading.XL};
          text-transform: uppercase;
          font-weight: 700;
          justify-content: center;
          margin-top: 16px;
        `}>
        {props.pokeName}
      </div>
      <div
        className={css`
          display: flex;
          margin-top: 8px;
          justify-content: center;
          display: grid;
          grid-auto-flow: column;
          grid-column-gap: 8px;
          text-transform: capitalize;
        `}>
        {props.pokeTypes.map((poke: any, i: number) => {
          return (
            <BadgesContainer key={i} fontColor="white" backgroundColor={TypeToColor(poke.type.name)}>
              {poke.type.name}
            </BadgesContainer>
          );
        })}
      </div>
    </div>
  );
};

export default ProfilePokemonContent;
