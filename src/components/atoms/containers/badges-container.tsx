import styled from '@emotion/styled';

interface BadgesContainerProps {
  backgroundColor: any;
  fontColor: string;
}

const BadgesContainer = styled.div(
  {
    borderRadius: '4px',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    fontSize: '14px',
    lineHeight: '16px',
    padding: '4px 8px',
  },
  (props: BadgesContainerProps) => ({ background: props.backgroundColor, color: props.fontColor }),
);

BadgesContainer.defaultProps = {
  backgroundColor: 'black',
};

export default BadgesContainer;
