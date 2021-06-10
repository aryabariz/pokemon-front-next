import { css } from '@emotion/css';
import styled from '@emotion/styled';
import React from 'react';
import { COLOR_PALETTE } from '../../../helpers/styling-helper';

interface DotsProps {
  selected: number;
  slides: any;
}

const DotsMarker = (props: DotsProps): React.ReactElement => {
  const DotsContainer = styled.div({ display: 'flex' });

  const dots = props.slides?.map((_slide: any, i: number) => {
    return (
      <div
        key={i}
        className={css`
          width: 8px;
          height: 8px;
          border-radius: 9999px;
          margin-right: 4px;
          background-color: ${i === props.selected ? COLOR_PALETTE.GREY_1 : COLOR_PALETTE.GREY_3};
        `}
      />
    );
  });

  return <DotsContainer>{dots}</DotsContainer>;
};

export default DotsMarker;
