import styled from '@emotion/styled';

interface OverlayProps {
  backgroundColor?: string;
}

const OverlayContainer = styled.div(
  {
    position: 'fixed',
    top: 0,
    width: '100%',
    maxWidth: '720px',
    height: '100%',
    opacity: 0.6,
    zIndex: 20
  },
  (props: OverlayProps) => ({ background: props.backgroundColor }),
);

OverlayContainer.defaultProps = {
    backgroundColor: 'black'
}

export default OverlayContainer;
