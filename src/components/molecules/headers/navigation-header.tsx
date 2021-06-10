import HeaderContainer from '../../atoms/containers/header-container';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import styled from '@emotion/styled';
import { useRouter } from 'next/dist/client/router';
import { css } from '@emotion/css';

interface DefaultHeaderProps {
  label: string;
  backgroundColor?: string;
  textColor?: string;
  actionOnClick?: () => void;
  actionIcon?: React.ReactElement;
}

const NavigationHeader = (props: DefaultHeaderProps) => {
  const router = useRouter();
  const ActionContainer = styled.div(
    {
      width: '32px',
      height: '32px',
    },
    (props: { used?: boolean }) => ({}),
  );

  return (
    <HeaderContainer
      backgroundColor={props.backgroundColor}
      justifyContent="space-between"
      textColor={props.textColor}
      className={css`
        position: sticky;
        top: 0;
        z-index: 40;
      `}>
      <ActionContainer used={true} onClick={() => router.back()}>
        <MdKeyboardArrowLeft size="32px" />
      </ActionContainer>

      {props.label}

      <ActionContainer used={props.actionIcon ? true : false} onClick={props.actionOnClick}>
        {props.actionIcon}
      </ActionContainer>
    </HeaderContainer>
  );
};

export default NavigationHeader;
