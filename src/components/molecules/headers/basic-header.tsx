import { css } from '@emotion/css';
import React from 'react';
import HeaderContainer from '../../atoms/containers/header-container';

interface DefaultHeaderProps {
  label: string;
  backgroundColor?: string;
}

const BasicHeader = (props: DefaultHeaderProps) => {
  return (
    <HeaderContainer backgroundColor="white" textColor="black">
      {props.label}
    </HeaderContainer>
  );
};

export default BasicHeader;
